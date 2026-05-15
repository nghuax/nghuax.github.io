export function formatVND(amount: number): string {
  return new Intl.NumberFormat("vi-VN", {
    maximumFractionDigits: 0
  }).format(Math.max(0, amount)) + " ₫";
}

export function formatDistance(km: number): string {
  if (!Number.isFinite(km)) {
    return "—";
  }

  return `${new Intl.NumberFormat("vi-VN", {
    maximumFractionDigits: km >= 100 ? 0 : 1
  }).format(km)} km`;
}

export function formatFuel(litres: number): string {
  return `${new Intl.NumberFormat("vi-VN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(litres)} L`;
}

export function formatDuration(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds <= 0) {
    return "—";
  }

  const totalMinutes = Math.round(seconds / 60);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  if (hours === 0) {
    return `${minutes} m`;
  }

  return `${hours} h ${minutes} m`;
}
