import { useSyncExternalStore } from "react";
import { HO_CHI_MINH_CITY_FALLBACK, type GeoPoint } from "./tracking/tracking-utils";

export type VehicleType = "Xe máy" | "Ô tô";

export type ResQVehicle = {
  id: string;
  name: string;
  plate: string;
  year: string;
  type: VehicleType;
  isDefault: boolean;
};

export type ActiveResQRequest = {
  id: string;
  serviceId: string;
  serviceTitle: string;
  servicePrice: string;
  serviceEta: string;
  vehicleId: string;
  vehicleName: string;
  vehiclePlate: string;
  vehicleType: VehicleType;
  locationAddress: string;
  locationPoint: GeoPoint;
  locationSource: "browser" | "fallback" | "manual";
  notes: string;
  createdAt: string;
  fixerTeam: string;
  fixerVehicle: string;
  status: string;
};

type ResQStoreSnapshot = {
  vehicles: ResQVehicle[];
  activeRequest: ActiveResQRequest | null;
};

type AddVehicleInput = {
  name: string;
  plate: string;
  year: string;
  type: VehicleType;
};

const VEHICLES_STORAGE_KEY = "resq_vehicles";
const ACTIVE_REQUEST_STORAGE_KEY = "resq_active_request";

const defaultVehicles: ResQVehicle[] = [
  {
    id: "wave-rsx",
    name: "Honda Wave RSX",
    plate: "59F1-12345",
    year: "2022",
    type: "Xe máy",
    isDefault: true,
  },
  {
    id: "toyota-vios",
    name: "Toyota Vios",
    plate: "51G-67890",
    year: "2021",
    type: "Ô tô",
    isDefault: false,
  },
];

let currentVehicles = defaultVehicles;
let currentActiveRequest: ActiveResQRequest | null = null;
let currentSnapshot: ResQStoreSnapshot = {
  vehicles: currentVehicles,
  activeRequest: currentActiveRequest,
};
const listeners = new Set<() => void>();

hydrateStore();

function hydrateStore() {
  if (typeof window === "undefined") {
    return;
  }

  try {
    const savedVehicles = window.localStorage.getItem(VEHICLES_STORAGE_KEY);

    if (savedVehicles) {
      currentVehicles = normalizeVehicles(JSON.parse(savedVehicles) as ResQVehicle[]);
    }

    const savedRequest = window.localStorage.getItem(ACTIVE_REQUEST_STORAGE_KEY);

    if (savedRequest) {
      currentActiveRequest = JSON.parse(savedRequest) as ActiveResQRequest;
    }
  } catch {
    currentVehicles = defaultVehicles;
    currentActiveRequest = null;
  }

  syncSnapshot();
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot(): ResQStoreSnapshot {
  return currentSnapshot;
}

function emitChange() {
  syncSnapshot();
  persistStore();
  listeners.forEach((listener) => listener());
}

function persistStore() {
  if (typeof window === "undefined") {
    return;
  }

  try {
    window.localStorage.setItem(VEHICLES_STORAGE_KEY, JSON.stringify(currentVehicles));

    if (currentActiveRequest) {
      window.localStorage.setItem(
        ACTIVE_REQUEST_STORAGE_KEY,
        JSON.stringify(currentActiveRequest),
      );
    } else {
      window.localStorage.removeItem(ACTIVE_REQUEST_STORAGE_KEY);
    }
  } catch {
    // Ignore persistence failures and keep the in-memory state.
  }
}

function syncSnapshot() {
  currentSnapshot = {
    vehicles: currentVehicles,
    activeRequest: currentActiveRequest,
  };
}

function normalizeVehicles(vehicles: ResQVehicle[]) {
  if (vehicles.length === 0) {
    return [];
  }

  const defaultIndex = Math.max(
    vehicles.findIndex((vehicle) => vehicle.isDefault),
    0,
  );

  return vehicles.map((vehicle, index) => ({
    ...vehicle,
    isDefault: index === defaultIndex,
  }));
}

export function addVehicle(input: AddVehicleInput) {
  const nextVehicle: ResQVehicle = {
    id: createEntityId("vehicle"),
    name: input.name.trim(),
    plate: input.plate.trim().toUpperCase(),
    year: input.year.trim(),
    type: input.type,
    isDefault: currentVehicles.length === 0,
  };

  currentVehicles = normalizeVehicles([...currentVehicles, nextVehicle]);
  emitChange();
  return nextVehicle;
}

export function setDefaultVehicle(vehicleId: string) {
  currentVehicles = normalizeVehicles(
    currentVehicles.map((vehicle) => ({
      ...vehicle,
      isDefault: vehicle.id === vehicleId,
    })),
  );
  emitChange();
}

export function removeVehicle(vehicleId: string) {
  currentVehicles = normalizeVehicles(
    currentVehicles.filter((vehicle) => vehicle.id !== vehicleId),
  );

  emitChange();
}

export function setActiveRequest(request: ActiveResQRequest) {
  currentActiveRequest = request;
  emitChange();
}

export function clearActiveRequest() {
  currentActiveRequest = null;
  emitChange();
}

export function createRequestDraft(input: {
  serviceId: string;
  serviceTitle: string;
  servicePrice: string;
  serviceEta: string;
  vehicle: ResQVehicle;
  locationAddress: string;
  locationPoint?: GeoPoint;
  locationSource: "browser" | "fallback" | "manual";
  notes: string;
}) {
  return {
    id: `RSQ-${Math.floor(100000 + Math.random() * 900000)}`,
    serviceId: input.serviceId,
    serviceTitle: input.serviceTitle,
    servicePrice: input.servicePrice,
    serviceEta: input.serviceEta,
    vehicleId: input.vehicle.id,
    vehicleName: input.vehicle.name,
    vehiclePlate: input.vehicle.plate,
    vehicleType: input.vehicle.type,
    locationAddress: input.locationAddress,
    locationPoint: input.locationPoint ?? HO_CHI_MINH_CITY_FALLBACK,
    locationSource: input.locationSource,
    notes: input.notes.trim(),
    createdAt: new Date().toISOString(),
    fixerTeam: "Đội lưu động ResQ 07",
    fixerVehicle: "Box van cứu hộ",
    status: "Đang tiếp cận",
  } satisfies ActiveResQRequest;
}

export function useResQStore() {
  const snapshot = useSyncExternalStore(subscribe, getSnapshot, getSnapshot);

  return {
    ...snapshot,
    addVehicle,
    setDefaultVehicle,
    removeVehicle,
    setActiveRequest,
    clearActiveRequest,
  };
}

function createEntityId(prefix: string) {
  return `${prefix}-${Math.random().toString(36).slice(2, 10)}`;
}
