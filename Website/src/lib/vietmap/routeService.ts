import { calculatePathDistanceKm } from "@/lib/calculations";
import { VIETMAP_API_KEY } from "@/lib/vietmap/map";
import { validateLatLng } from "@/lib/validation";
import type {
  LocationPoint,
  RouteInstruction,
  RouteResult,
  VehicleType
} from "@/types/route";

const VIETMAP_ROUTE_ENDPOINT = "https://maps.vietmap.vn/api/route/v3";
const REQUEST_TIMEOUT_MS = 14000;
const AVERAGE_FALLBACK_SPEED_KMH = 62;

type VietMapVehicle = "car" | "motorcycle" | "truck";

interface VietMapRouteInstruction {
  distance?: number;
  time?: number;
  text?: string;
  street_name?: string;
}

interface VietMapRoutePath {
  distance?: number;
  time?: number;
  points?: string | Array<[number, number]> | { coordinates?: Array<[number, number]> };
  instructions?: VietMapRouteInstruction[];
}

interface VietMapRouteResponse {
  code?: string;
  messages?: string | string[] | null;
  paths?: VietMapRoutePath[];
}

export function getVietMapVehicle(vehicleType: VehicleType): VietMapVehicle {
  if (vehicleType === "Motorbike") {
    return "motorcycle";
  }

  if (vehicleType === "Truck") {
    return "truck";
  }

  return "car";
}

export function createFallbackRoute(points: LocationPoint[]): RouteResult {
  const distanceKm = calculatePathDistanceKm(points);

  return {
    distanceKm,
    durationSeconds: (distanceKm / AVERAGE_FALLBACK_SPEED_KMH) * 60 * 60,
    geometry: points.map((point) => ({
      lat: point.lat,
      lng: point.lng
    })),
    isFallbackEstimate: true,
    instructions: []
  };
}

function formatMessages(messages: VietMapRouteResponse["messages"]): string {
  if (Array.isArray(messages)) {
    return messages.join(", ");
  }

  return messages || "VietMap Route API returned no route.";
}

function withTimeout(url: string, init: RequestInit = {}): Promise<Response> {
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  return fetch(url, {
    ...init,
    cache: "no-store",
    signal: controller.signal
  }).finally(() => window.clearTimeout(timeout));
}

function coordinateToLatLng(coordinate: [number, number]): { lat: number; lng: number } {
  const [first, second] = coordinate;

  if (Math.abs(first) > 90 && Math.abs(second) <= 90) {
    return { lat: second, lng: first };
  }

  return { lat: first, lng: second };
}

function decodePolyline(value: string): Array<{ lat: number; lng: number }> {
  const coordinates: Array<{ lat: number; lng: number }> = [];
  let index = 0;
  let lat = 0;
  let lng = 0;

  while (index < value.length) {
    let byte = 0;
    let shift = 0;
    let result = 0;

    do {
      byte = value.charCodeAt(index) - 63;
      index += 1;
      result |= (byte & 0x1f) << shift;
      shift += 5;
    } while (byte >= 0x20);

    lat += result & 1 ? ~(result >> 1) : result >> 1;
    shift = 0;
    result = 0;

    do {
      byte = value.charCodeAt(index) - 63;
      index += 1;
      result |= (byte & 0x1f) << shift;
      shift += 5;
    } while (byte >= 0x20);

    lng += result & 1 ? ~(result >> 1) : result >> 1;
    coordinates.push({ lat: lat / 1e5, lng: lng / 1e5 });
  }

  return coordinates;
}

function normalizeGeometry(points: VietMapRoutePath["points"]): Array<{
  lat: number;
  lng: number;
}> {
  if (typeof points === "string") {
    return decodePolyline(points);
  }

  if (Array.isArray(points)) {
    return points.map(coordinateToLatLng);
  }

  if (points?.coordinates) {
    return points.coordinates.map(coordinateToLatLng);
  }

  return [];
}

function normalizeInstructions(
  instructions: VietMapRouteInstruction[] | undefined
): RouteInstruction[] {
  return (instructions ?? []).map((instruction) => ({
    distanceMeters: instruction.distance ?? 0,
    durationSeconds: (instruction.time ?? 0) / 1000,
    text: instruction.text ?? "Continue",
    streetName: instruction.street_name
  }));
}

export async function fetchRouteFromVietMap(
  points: LocationPoint[],
  vehicleType: VehicleType
): Promise<RouteResult> {
  const validPoints = points.filter((point) => validateLatLng(point.lat, point.lng));

  if (validPoints.length < 2 || validPoints.length !== points.length) {
    throw new Error("Please enter valid latitude and longitude for every route point.");
  }

  if (!VIETMAP_API_KEY) {
    throw new Error("NEXT_PUBLIC_VIETMAP_API_KEY is required for VietMap routing.");
  }

  const vehicle = getVietMapVehicle(vehicleType);
  const params = new URLSearchParams({
    apikey: VIETMAP_API_KEY,
    points_encoded: "false",
    vehicle
  });

  validPoints.forEach((point) => {
    params.append("point", `${point.lat},${point.lng}`);
  });

  if (vehicle === "truck") {
    params.set("capacity", "2000");
  }

  // Production apps should proxy VietMap route calls through a backend,
  // restrict this key by domain, and add server-side rate limiting.
  const response = await withTimeout(`${VIETMAP_ROUTE_ENDPOINT}?${params.toString()}`);

  if (!response.ok) {
    throw new Error(`VietMap Route API request failed with ${response.status}.`);
  }

  const data = (await response.json()) as VietMapRouteResponse;

  if (data.code && data.code !== "OK") {
    throw new Error(`${data.code}: ${formatMessages(data.messages)}`);
  }

  const path = data.paths?.[0];
  const geometry = normalizeGeometry(path?.points);

  if (!path || geometry.length < 2) {
    throw new Error("VietMap Route API returned empty geometry.");
  }

  return {
    distanceKm: (path.distance ?? 0) / 1000,
    durationSeconds: (path.time ?? 0) / 1000,
    geometry,
    isFallbackEstimate: false,
    instructions: normalizeInstructions(path.instructions)
  };
}
