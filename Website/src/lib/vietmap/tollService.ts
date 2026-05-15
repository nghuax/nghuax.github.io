import { calculateDistanceFromStartKm } from "@/lib/calculations";
import { VIETMAP_API_KEY } from "@/lib/vietmap/map";
import type { LocationPoint, TollStop, VehicleType } from "@/types/route";

const VIETMAP_ROUTE_TOLLS_ENDPOINT = "https://maps.vietmap.vn/api/route-tolls";
const REQUEST_TIMEOUT_MS = 14000;
const MAX_TOLL_PATH_POINTS = 600;

interface VietMapTollApiItem {
  name?: string;
  address?: string;
  type?: string;
  amount?: number;
  lat?: number;
  lng?: number;
  lon?: number;
  long?: number;
  longitude?: number;
  latitude?: number;
  location?: [number, number];
}

interface VietMapTollResponse {
  path?: Array<[number, number]>;
  tolls?: VietMapTollApiItem[];
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

function vehicleToTollCategory(vehicleType: VehicleType): number {
  if (vehicleType === "Truck") {
    return 4;
  }

  return 1;
}

function normalizeCoordinate(coordinate: [number, number]): { lat: number; lng: number } {
  const [first, second] = coordinate;

  if (Math.abs(first) > 90 && Math.abs(second) <= 90) {
    return { lat: second, lng: first };
  }

  return { lat: first, lng: second };
}

function compactPath(
  geometry: Array<Pick<LocationPoint, "lat" | "lng">>
): Array<[number, number]> {
  if (geometry.length <= MAX_TOLL_PATH_POINTS) {
    return geometry.map((point) => [point.lng, point.lat]);
  }

  const step = Math.ceil(geometry.length / MAX_TOLL_PATH_POINTS);
  const sampled = geometry.filter((_, index) => index % step === 0);
  const last = geometry[geometry.length - 1];

  if (sampled[sampled.length - 1] !== last) {
    sampled.push(last);
  }

  return sampled.map((point) => [point.lng, point.lat]);
}

function readTollCoordinate(
  toll: VietMapTollApiItem,
  path: Array<{ lat: number; lng: number }>,
  index: number,
  total: number
): { lat: number; lng: number } {
  const rawLat = toll.lat ?? toll.latitude;
  const rawLng = toll.lng ?? toll.lon ?? toll.long ?? toll.longitude;

  if (typeof rawLat === "number" && typeof rawLng === "number") {
    return { lat: rawLat, lng: rawLng };
  }

  if (Array.isArray(toll.location)) {
    return normalizeCoordinate(toll.location);
  }

  const fallbackIndex = Math.min(
    path.length - 1,
    Math.max(0, Math.round(((index + 1) / (total + 1)) * (path.length - 1)))
  );

  return path[fallbackIndex] ?? { lat: 0, lng: 0 };
}

function slugify(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export async function fetchRouteTollsFromVietMap(
  geometry: Array<Pick<LocationPoint, "lat" | "lng">>,
  vehicleType: VehicleType
): Promise<TollStop[]> {
  if (!VIETMAP_API_KEY) {
    throw new Error("NEXT_PUBLIC_VIETMAP_API_KEY is required for VietMap tolls.");
  }

  if (geometry.length < 2) {
    return [];
  }

  const params = new URLSearchParams({
    "api-version": "1.1",
    apikey: VIETMAP_API_KEY,
    vehicle: String(vehicleToTollCategory(vehicleType))
  });

  // Production apps should proxy VietMap toll calls through a backend,
  // restrict this key by domain, and avoid exposing sensitive APIs publicly.
  const response = await withTimeout(
    `${VIETMAP_ROUTE_TOLLS_ENDPOINT}?${params.toString()}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(compactPath(geometry))
    }
  );

  if (!response.ok) {
    throw new Error(`VietMap Route Tolls API request failed with ${response.status}.`);
  }

  const data = (await response.json()) as VietMapTollResponse;
  const path =
    data.path?.map(normalizeCoordinate) ??
    geometry.map((point) => ({ lat: point.lat, lng: point.lng }));
  const tolls = data.tolls ?? [];

  return tolls.map((toll, index) => {
    const location = readTollCoordinate(toll, path, index, tolls.length);
    const name = toll.name || `VietMap toll station ${index + 1}`;

    return {
      id: `api-toll-${index}-${slugify(name) || "station"}`,
      name,
      lat: location.lat,
      lng: location.lng,
      cost: Math.max(0, toll.amount ?? 0),
      note: toll.address,
      address: toll.address,
      tollType: toll.type,
      source: "api",
      distanceFromStartKm: calculateDistanceFromStartKm(location, path)
    };
  });
}
