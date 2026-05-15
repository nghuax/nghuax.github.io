export type LocationType = "origin" | "destination" | "checkpoint" | "toll";

export interface LocationPoint {
  id: string;
  name: string;
  lat: number;
  lng: number;
  type: LocationType;
}

export interface TollStop {
  id: string;
  name: string;
  lat: number;
  lng: number;
  cost: number;
  note?: string;
  address?: string;
  tollType?: string;
  source?: "api" | "manual";
  distanceFromStartKm?: number | null;
}

export type VehicleType = "Sedan" | "SUV" | "Motorbike" | "Truck";

export interface VehicleSettings {
  vehicleType: VehicleType;
  fuelPrice: number;
  fuelConsumption: number;
}

export interface RouteResult {
  distanceKm: number;
  durationSeconds: number;
  geometry: Array<{
    lat: number;
    lng: number;
  }>;
  isFallbackEstimate: boolean;
  instructions?: RouteInstruction[];
}

export interface TripCost {
  fuelUsed: number;
  fuelCost: number;
  tollCost: number;
  totalCost: number;
}

export interface RouteInstruction {
  distanceMeters: number;
  durationSeconds: number;
  text: string;
  streetName?: string;
}
