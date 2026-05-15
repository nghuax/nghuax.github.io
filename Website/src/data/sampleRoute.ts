import type { LocationPoint, TollStop, VehicleSettings } from "@/types/route";

export const sampleOrigin: LocationPoint = {
  id: "origin-hanoi",
  name: "Hanoi",
  lat: 21.0285,
  lng: 105.8542,
  type: "origin"
};

export const sampleCheckpoints: LocationPoint[] = [
  {
    id: "checkpoint-ninh-binh",
    name: "Ninh Binh",
    lat: 20.2506,
    lng: 105.9745,
    type: "checkpoint"
  },
  {
    id: "checkpoint-thanh-hoa",
    name: "Thanh Hóa",
    lat: 19.8067,
    lng: 105.7852,
    type: "checkpoint"
  }
];

export const sampleDestination: LocationPoint = {
  id: "destination-vinh",
  name: "Vinh",
  lat: 18.6796,
  lng: 105.6813,
  type: "destination"
};

export const sampleTollStops: TollStop[] = [
  {
    id: "toll-cao-bo",
    name: "Cao Bo Toll Plaza",
    lat: 20.2295,
    lng: 106.027,
    cost: 350000,
    source: "manual"
  }
];

export const sampleVehicleSettings: VehicleSettings = {
  vehicleType: "Sedan",
  fuelPrice: 24680,
  fuelConsumption: 6.5
};
