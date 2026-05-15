export function validateLatLng(lat: number, lng: number): boolean {
  return (
    Number.isFinite(lat) &&
    Number.isFinite(lng) &&
    lat >= -90 &&
    lat <= 90 &&
    lng >= -180 &&
    lng <= 180
  );
}

export function parseCoordinate(value: string): number {
  if (value.trim() === "") {
    return Number.NaN;
  }

  return Number(value);
}
