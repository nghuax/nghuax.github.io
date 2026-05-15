import type { LocationPoint } from "@/types/route";

export function generateGoogleMapsUrl(
  origin: LocationPoint,
  destination: LocationPoint,
  checkpoints: LocationPoint[]
): string {
  const params = new URLSearchParams({
    api: "1",
    origin: `${origin.lat},${origin.lng}`,
    destination: `${destination.lat},${destination.lng}`,
    travelmode: "driving"
  });

  if (checkpoints.length > 0) {
    params.set(
      "waypoints",
      checkpoints.map((point) => `${point.lat},${point.lng}`).join("|")
    );
  }

  return `https://www.google.com/maps/dir/?${params.toString()}`;
}
