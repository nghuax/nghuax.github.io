import type { LocationPoint, TollStop, TripCost } from "@/types/route";

const EARTH_RADIUS_KM = 6371;

function toRadians(value: number): number {
  return (value * Math.PI) / 180;
}

export function haversineDistanceKm(
  a: Pick<LocationPoint, "lat" | "lng">,
  b: Pick<LocationPoint, "lat" | "lng">
): number {
  const latDistance = toRadians(b.lat - a.lat);
  const lngDistance = toRadians(b.lng - a.lng);
  const lat1 = toRadians(a.lat);
  const lat2 = toRadians(b.lat);

  const h =
    Math.sin(latDistance / 2) * Math.sin(latDistance / 2) +
    Math.cos(lat1) *
      Math.cos(lat2) *
      Math.sin(lngDistance / 2) *
      Math.sin(lngDistance / 2);

  return 2 * EARTH_RADIUS_KM * Math.asin(Math.sqrt(h));
}

export function calculatePathDistanceKm(
  points: Array<Pick<LocationPoint, "lat" | "lng">>
): number {
  return points.reduce((total, point, index) => {
    if (index === 0) {
      return total;
    }

    return total + haversineDistanceKm(points[index - 1], point);
  }, 0);
}

export function calculateFuelUsed(
  distanceKm: number,
  fuelConsumption: number
): number {
  return (distanceKm / 100) * fuelConsumption;
}

export function calculateFuelCost(fuelUsed: number, fuelPrice: number): number {
  return fuelUsed * fuelPrice;
}

export function calculateTollCost(tollStops: TollStop[]): number {
  return tollStops.reduce((total, stop) => total + Math.max(0, stop.cost || 0), 0);
}

export function calculateTotalTripCost(
  fuelCost: number,
  tollCost: number
): number {
  return fuelCost + tollCost;
}

export function calculateTripCost(
  distanceKm: number,
  fuelConsumption: number,
  fuelPrice: number,
  tollStops: TollStop[],
  includeTolls: boolean
): TripCost {
  const fuelUsed = calculateFuelUsed(distanceKm, fuelConsumption);
  const fuelCost = calculateFuelCost(fuelUsed, fuelPrice);
  const tollCost = includeTolls ? calculateTollCost(tollStops) : 0;

  return {
    fuelUsed,
    fuelCost,
    tollCost,
    totalCost: calculateTotalTripCost(fuelCost, tollCost)
  };
}

export function calculateDistanceFromStartKm(
  point: Pick<LocationPoint, "lat" | "lng">,
  geometry: Array<Pick<LocationPoint, "lat" | "lng">>
): number | null {
  if (geometry.length < 2) {
    return null;
  }

  let nearestIndex = 0;
  let nearestDistance = Number.POSITIVE_INFINITY;
  let cumulative = 0;
  const cumulativeDistances = [0];

  for (let index = 1; index < geometry.length; index += 1) {
    cumulative += haversineDistanceKm(geometry[index - 1], geometry[index]);
    cumulativeDistances[index] = cumulative;
  }

  geometry.forEach((geometryPoint, index) => {
    const distance = haversineDistanceKm(point, geometryPoint);
    if (distance < nearestDistance) {
      nearestDistance = distance;
      nearestIndex = index;
    }
  });

  return cumulativeDistances[nearestIndex] ?? null;
}
