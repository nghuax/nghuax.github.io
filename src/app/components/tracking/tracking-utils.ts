export type GeoPoint = {
  lat: number;
  lng: number;
};

export type LocationSource = "browser" | "fallback";
export type RouteSource = "osrm" | "fallback";
export type TrackingStatusKey =
  | "dispatching"
  | "on-the-way"
  | "approaching"
  | "arrived";

export type TrackingStatus = {
  key: TrackingStatusKey;
  label: string;
  detail: string;
};

export type RouteData = {
  points: GeoPoint[];
  totalDistanceMeters: number;
  source: RouteSource;
};

type OsrmResponse = {
  routes?: Array<{
    distance?: number;
    geometry?: {
      coordinates?: Array<[number, number]>;
    };
  }>;
};

const EARTH_RADIUS_METERS = 6_371_000;
const GEOLOCATION_TIMEOUT_MS = 7_500;
const STRAIGHT_LINE_STEPS = 28;

export const HO_CHI_MINH_CITY_FALLBACK: GeoPoint = {
  lat: 10.776889,
  lng: 106.700806,
};

export async function getUserLocation(): Promise<{
  point: GeoPoint;
  source: LocationSource;
}> {
  if (typeof window === "undefined" || !("geolocation" in navigator)) {
    return {
      point: HO_CHI_MINH_CITY_FALLBACK,
      source: "fallback",
    };
  }

  try {
    const position = await new Promise<GeolocationPosition>((resolve, reject) => {
      const timeoutId = window.setTimeout(() => {
        reject(new Error("Geolocation timed out"));
      }, GEOLOCATION_TIMEOUT_MS);

      navigator.geolocation.getCurrentPosition(
        (result) => {
          window.clearTimeout(timeoutId);
          resolve(result);
        },
        (error) => {
          window.clearTimeout(timeoutId);
          reject(error);
        },
        {
          enableHighAccuracy: true,
          timeout: GEOLOCATION_TIMEOUT_MS,
          maximumAge: 60_000,
        },
      );
    });

    return {
      point: {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      },
      source: "browser",
    };
  } catch {
    return {
      point: HO_CHI_MINH_CITY_FALLBACK,
      source: "fallback",
    };
  }
}

export function createVehicleOrigin(user: GeoPoint): GeoPoint {
  return {
    lat: user.lat + 0.0205,
    lng: user.lng - 0.026,
  };
}

export async function fetchRouteData(
  origin: GeoPoint,
  destination: GeoPoint,
  signal?: AbortSignal,
): Promise<RouteData> {
  const fallbackRoute = createStraightLineRoute(origin, destination);

  try {
    const url =
      "https://router.project-osrm.org/route/v1/driving/" +
      `${origin.lng},${origin.lat};${destination.lng},${destination.lat}` +
      "?overview=full&geometries=geojson";

    const response = await fetch(url, {
      method: "GET",
      signal,
    });

    if (!response.ok) {
      throw new Error(`OSRM request failed: ${response.status}`);
    }

    const payload = (await response.json()) as OsrmResponse;
    const route = payload.routes?.[0];
    const coordinates = route?.geometry?.coordinates;

    if (!coordinates || coordinates.length < 2) {
      throw new Error("Route geometry missing");
    }

    const points = coordinates.map(([lng, lat]) => ({ lat, lng }));
    const totalDistanceMeters =
      typeof route.distance === "number" && route.distance > 0
        ? route.distance
        : measurePathDistance(points);

    return {
      points,
      totalDistanceMeters,
      source: "osrm",
    };
  } catch {
    return {
      ...fallbackRoute,
      source: "fallback",
    };
  }
}

export function createStraightLineRoute(
  origin: GeoPoint,
  destination: GeoPoint,
  steps = STRAIGHT_LINE_STEPS,
): Omit<RouteData, "source"> {
  const points: GeoPoint[] = Array.from({ length: steps + 1 }, (_, index) => {
    const progress = index / steps;

    return {
      lat: interpolate(origin.lat, destination.lat, progress),
      lng: interpolate(origin.lng, destination.lng, progress),
    };
  });

  return {
    points,
    totalDistanceMeters: measurePathDistance(points),
  };
}

export function measureDistanceMeters(start: GeoPoint, end: GeoPoint): number {
  const lat1 = toRadians(start.lat);
  const lat2 = toRadians(end.lat);
  const latDelta = toRadians(end.lat - start.lat);
  const lngDelta = toRadians(end.lng - start.lng);

  const haversine =
    Math.sin(latDelta / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(lngDelta / 2) ** 2;

  const arc = 2 * Math.atan2(Math.sqrt(haversine), Math.sqrt(1 - haversine));

  return EARTH_RADIUS_METERS * arc;
}

export function measurePathDistance(points: GeoPoint[]): number {
  return points.slice(1).reduce((total, point, index) => {
    return total + measureDistanceMeters(points[index], point);
  }, 0);
}

export function buildCumulativeDistances(points: GeoPoint[]): number[] {
  const cumulative: number[] = [0];

  for (let index = 1; index < points.length; index += 1) {
    cumulative[index] =
      cumulative[index - 1] + measureDistanceMeters(points[index - 1], points[index]);
  }

  return cumulative;
}

export function getPointAlongRoute(
  points: GeoPoint[],
  cumulativeDistances: number[],
  travelledDistanceMeters: number,
): GeoPoint {
  if (points.length === 0) {
    return HO_CHI_MINH_CITY_FALLBACK;
  }

  if (travelledDistanceMeters <= 0) {
    return points[0];
  }

  const totalDistance = cumulativeDistances[cumulativeDistances.length - 1] ?? 0;

  if (travelledDistanceMeters >= totalDistance) {
    return points[points.length - 1];
  }

  const nextIndex = cumulativeDistances.findIndex(
    (distance) => distance >= travelledDistanceMeters,
  );
  const safeIndex = Math.max(nextIndex, 1);
  const previousIndex = safeIndex - 1;

  const segmentStart = points[previousIndex];
  const segmentEnd = points[safeIndex];
  const segmentDistance =
    cumulativeDistances[safeIndex] - cumulativeDistances[previousIndex] || 1;
  const localProgress =
    (travelledDistanceMeters - cumulativeDistances[previousIndex]) / segmentDistance;

  return {
    lat: interpolate(segmentStart.lat, segmentEnd.lat, localProgress),
    lng: interpolate(segmentStart.lng, segmentEnd.lng, localProgress),
  };
}

export function getSegmentIndexAtDistance(
  cumulativeDistances: number[],
  travelledDistanceMeters: number,
): number {
  const nextIndex = cumulativeDistances.findIndex(
    (distance) => distance >= travelledDistanceMeters,
  );

  if (nextIndex === -1) {
    return Math.max(cumulativeDistances.length - 2, 0);
  }

  return Math.max(nextIndex - 1, 0);
}

export function getBearingAlongRoute(
  points: GeoPoint[],
  cumulativeDistances: number[],
  travelledDistanceMeters: number,
): number {
  if (points.length < 2) {
    return 0;
  }

  const segmentIndex = getSegmentIndexAtDistance(
    cumulativeDistances,
    travelledDistanceMeters,
  );
  const start = points[segmentIndex];
  const end = points[Math.min(segmentIndex + 1, points.length - 1)];

  return calculateBearing(start, end);
}

export function getSimulationSpeedMetersPerSecond(totalDistanceMeters: number): number {
  return clamp(totalDistanceMeters / 540, 6.2, 12.5);
}

export function formatDistance(distanceMeters: number): string {
  if (distanceMeters < 950) {
    return `${Math.max(50, Math.round(distanceMeters / 10) * 10)} m`;
  }

  const distanceInKm = distanceMeters / 1000;
  const digits = distanceInKm >= 10 ? 0 : 1;
  return `${distanceInKm.toFixed(digits)} km`;
}

export function formatEta(minutes: number): string {
  if (minutes <= 0.75) {
    return "Dưới 1 phút";
  }

  return `${Math.round(minutes)} phút`;
}

export function getTrackingStatus(remainingDistanceMeters: number): TrackingStatus {
  if (remainingDistanceMeters <= 80) {
    return {
      key: "arrived",
      label: "Đã tới nơi",
      detail: "Fixer đã đến điểm hẹn và sẵn sàng hỗ trợ bạn.",
    };
  }

  if (remainingDistanceMeters <= 700) {
    return {
      key: "approaching",
      label: "Sắp đến",
      detail: "Fixer đã ở rất gần vị trí của bạn.",
    };
  }

  if (remainingDistanceMeters <= 2_400) {
    return {
      key: "on-the-way",
      label: "Đang đến",
      detail: "Fixer đang di chuyển và hệ thống liên tục cập nhật ETA.",
    };
  }

  return {
    key: "dispatching",
    label: "Đang điều phối",
    detail: "Hệ thống đang tối ưu lộ trình để fixer đến bạn nhanh hơn.",
  };
}

function calculateBearing(start: GeoPoint, end: GeoPoint): number {
  const startLat = toRadians(start.lat);
  const startLng = toRadians(start.lng);
  const endLat = toRadians(end.lat);
  const endLng = toRadians(end.lng);

  const y = Math.sin(endLng - startLng) * Math.cos(endLat);
  const x =
    Math.cos(startLat) * Math.sin(endLat) -
    Math.sin(startLat) * Math.cos(endLat) * Math.cos(endLng - startLng);

  return ((Math.atan2(y, x) * 180) / Math.PI + 360) % 360;
}

function interpolate(start: number, end: number, progress: number): number {
  return start + (end - start) * progress;
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

function toRadians(value: number): number {
  return (value * Math.PI) / 180;
}
