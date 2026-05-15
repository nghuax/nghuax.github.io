"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useMemo, useState } from "react";
import {
  Bike,
  Bookmark,
  Car,
  ChevronDown,
  ChevronsLeft,
  CircleUserRound,
  Info,
  Keyboard,
  Menu,
  MoreHorizontal,
  Navigation,
  Plus,
  Search,
  Share2,
  Truck,
  X
} from "lucide-react";
import { formatDuration } from "@/lib/formatters";
import { createFallbackRoute } from "@/lib/vietmap/routeService";
import type { LocationPoint, RouteResult, VehicleType } from "@/types/route";

const MapView = dynamic(() => import("@/components/MapView"), {
  ssr: false,
  loading: () => <div className="h-full w-full bg-[#eef4fb]" />
});

type RouteStop = LocationPoint & {
  address: string;
};

const initialStops: RouteStop[] = [
  {
    id: "origin-hanoi",
    name: "Start",
    address: "Hanoi, Vietnam",
    lat: 21.0285,
    lng: 105.8542,
    type: "origin"
  },
  {
    id: "checkpoint-ninh-binh",
    name: "Checkpoint",
    address: "Ninh Binh, Vietnam",
    lat: 20.2506,
    lng: 105.9745,
    type: "checkpoint"
  },
  {
    id: "checkpoint-thanh-hoa",
    name: "Checkpoint",
    address: "Thanh Hóa, Vietnam",
    lat: 19.8067,
    lng: 105.7852,
    type: "checkpoint"
  },
  {
    id: "destination-vinh",
    name: "Destination",
    address: "Vinh, Nghệ An, Vietnam",
    lat: 18.6796,
    lng: 105.6813,
    type: "destination"
  }
];

const summary = {
  distanceKm: 338,
  durationSeconds: 6 * 60 * 60 + 12 * 60,
  fuelCost: 1025000,
  tollCost: 350000,
  totalCost: 1375000
};

const vehicles: Array<{
  label: string;
  value: VehicleType;
  icon: React.ReactNode;
}> = [
  { label: "Car", value: "Sedan", icon: <Car className="h-4 w-4" /> },
  { label: "Motorcycle", value: "Motorbike", icon: <Bike className="h-4 w-4" /> },
  { label: "Truck", value: "Truck", icon: <Truck className="h-4 w-4" /> }
];

function formatVnd(value: number): string {
  return `${new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0
  }).format(value)} VND`;
}

function toLocationPoint(stop: RouteStop): LocationPoint {
  return {
    id: stop.id,
    name: stop.address.split(",")[0],
    lat: stop.lat,
    lng: stop.lng,
    type: stop.type
  };
}

function CruiseWordmark() {
  return (
    <a
      href="#route-panel"
      className="inline-flex items-center"
      aria-label="Cruise home"
    >
      <Image
        src="/cruise-logo.png"
        alt="Cruise"
        width={1134}
        height={454}
        priority
        className="h-12 w-auto"
      />
    </a>
  );
}

function TopBar() {
  return (
    <header className="z-30 grid h-[94px] grid-cols-[260px_1fr_320px] items-center border-b border-[#dfe4ea] bg-white/96 px-10 shadow-[0_1px_0_rgba(15,23,42,0.04)] backdrop-blur-xl max-lg:grid-cols-[180px_1fr_auto] max-md:h-auto max-md:grid-cols-1 max-md:gap-3 max-md:px-5 max-md:py-4">
      <CruiseWordmark />

      <label className="mx-auto flex h-[52px] w-full max-w-[596px] items-center gap-3 rounded-xl border border-[#d7dce5] bg-[#f7f8fa] px-4 text-[#6b7280] shadow-[0_10px_26px_rgba(15,23,42,0.06)]">
        <Search className="h-5 w-5 shrink-0" aria-hidden="true" />
        <span className="sr-only">Search</span>
        <input
          className="h-full min-w-0 flex-1 bg-transparent text-[15px] text-[#111827] outline-none placeholder:text-[#6f7784]"
          placeholder="Search locations, saved routes, places..."
        />
        <span className="hidden items-center gap-1 rounded-md border border-[#d6dbe4] bg-white px-2 py-1 text-xs font-semibold text-[#6b7280] sm:inline-flex">
          <Keyboard className="h-3.5 w-3.5" aria-hidden="true" /> K
        </span>
      </label>

      <nav className="flex items-center justify-end gap-7 text-[15px] font-semibold text-black max-md:justify-between">
        <button className="inline-flex items-center gap-2 transition hover:text-[#174fca]">
          <Bookmark className="h-5 w-5" aria-hidden="true" />
          Saved
        </button>
        <button className="inline-flex items-center gap-3 transition hover:text-[#174fca]">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-black text-white">
            <CircleUserRound className="h-6 w-6" aria-hidden="true" />
          </span>
          Sign in
          <ChevronDown className="h-4 w-4" aria-hidden="true" />
        </button>
      </nav>
    </header>
  );
}

function StopIcon({ stop, index }: { stop: RouteStop; index: number }) {
  if (stop.type === "origin" || stop.type === "destination") {
    return (
      <span className="grid h-8 w-8 place-items-center rounded-full bg-[#1f56d8] text-white shadow-[0_4px_14px_rgba(31,86,216,0.26)]">
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
          <path
            d="M12 21s6-5.2 6-10.1A6 6 0 0 0 6 10.9C6 15.8 12 21 12 21Z"
            fill="currentColor"
          />
          <circle cx="12" cy="10.8" r="2.3" fill="white" />
        </svg>
      </span>
    );
  }

  return (
    <span className="grid h-8 w-8 place-items-center rounded-full bg-[#1f56d8] text-sm font-bold text-white shadow-[0_4px_14px_rgba(31,86,216,0.26)]">
      {index}
    </span>
  );
}

function RouteStopRow({
  stop,
  index,
  canRemove,
  onRemove
}: {
  stop: RouteStop;
  index: number;
  canRemove: boolean;
  onRemove: () => void;
}) {
  return (
    <div className="grid min-h-[60px] grid-cols-[52px_1fr_auto_auto] items-center border-b border-[#edf0f4] last:border-b-0">
      <div className="grid place-items-center">
        <StopIcon stop={stop} index={index} />
      </div>
      <div className="min-w-0 py-2">
        <p className="truncate text-[13px] font-medium text-[#222831]">
          {stop.name}
        </p>
        <p className="mt-0.5 truncate text-[13px] font-medium text-[#1f2937]">
          {stop.address}
        </p>
      </div>
      <button
        className="grid h-9 w-9 place-items-center rounded-md text-[#111827] transition hover:bg-[#f1f4f8]"
        aria-label={`Reorder ${stop.name}`}
      >
        <Menu className="h-4.5 w-4.5" aria-hidden="true" />
      </button>
      {canRemove ? (
        <button
          className="grid h-9 w-9 place-items-center rounded-md text-[#111827] transition hover:bg-[#f1f4f8]"
          onClick={onRemove}
          aria-label={`Remove ${stop.address}`}
        >
          <X className="h-4.5 w-4.5" aria-hidden="true" />
        </button>
      ) : (
        <span className="h-9 w-9" />
      )}
    </div>
  );
}

function RoutePanel({
  stops,
  vehicle,
  tollMode,
  onVehicleChange,
  onTollModeChange,
  onAddCheckpoint,
  onRemoveStop
}: {
  stops: RouteStop[];
  vehicle: VehicleType;
  tollMode: "VETC" | "BOT";
  onVehicleChange: (vehicle: VehicleType) => void;
  onTollModeChange: (mode: "VETC" | "BOT") => void;
  onAddCheckpoint: () => void;
  onRemoveStop: (id: string) => void;
}) {
  return (
    <aside
      id="route-panel"
      className="absolute left-5 top-5 z-20 w-[416px] rounded-2xl bg-white p-5 text-black shadow-[0_12px_35px_rgba(15,23,42,0.14)] max-lg:left-4 max-lg:w-[390px] max-md:static max-md:m-4 max-md:w-auto"
    >
      <div className="mb-5 flex items-center justify-between">
        <h1 className="text-lg font-bold tracking-[-0.02em]">Plan your route</h1>
        <button
          className="grid h-8 w-8 place-items-center rounded-md text-black transition hover:bg-[#f1f4f8]"
          aria-label="Collapse route planner"
        >
          <ChevronsLeft className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      <div className="relative pl-4">
        <div className="absolute left-0 top-5 flex h-[168px] w-2 flex-col items-center justify-between">
          <span className="flex flex-col gap-1.5">
            <i className="h-1 w-1 rounded-full bg-black" />
            <i className="h-1 w-1 rounded-full bg-black" />
            <i className="h-1 w-1 rounded-full bg-black" />
          </span>
          <i className="h-1.5 w-1.5 rounded-full bg-black" />
          <i className="h-1.5 w-1.5 rounded-full bg-black" />
        </div>

        <div className="overflow-hidden rounded-xl border border-[#dce1e8] bg-white">
          {stops.map((stop, rowIndex) => {
            const checkpointNumber =
              stop.type === "checkpoint"
                ? stops
                    .slice(0, rowIndex + 1)
                    .filter((item) => item.type === "checkpoint").length
                : 0;

            return (
              <RouteStopRow
                key={stop.id}
                stop={stop}
                index={checkpointNumber}
                canRemove={stop.type === "checkpoint"}
                onRemove={() => onRemoveStop(stop.id)}
              />
            );
          })}
        </div>
      </div>

      <button
        className="mt-3 inline-flex h-11 items-center gap-3 rounded-lg px-6 text-[15px] font-semibold text-[#1957d2] transition hover:bg-[#f4f7ff]"
        onClick={onAddCheckpoint}
      >
        <span className="grid h-8 w-8 place-items-center rounded-full border border-dashed border-[#1957d2]">
          <Plus className="h-4 w-4" aria-hidden="true" />
        </span>
        Add checkpoint
      </button>

      <div className="mt-4 h-px bg-[#edf0f4]" />

      <div className="mt-5 grid grid-cols-[1fr_1fr] gap-4">
        <label className="space-y-2">
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold">
            Fuel price <Info className="h-3.5 w-3.5 text-[#8a93a1]" />
          </span>
          <div className="flex h-9 items-center rounded-lg border border-[#d9dfe8] bg-white px-3 text-sm shadow-[0_1px_0_rgba(15,23,42,0.02)]">
            <input
              value="24,680"
              readOnly
              className="min-w-0 flex-1 bg-transparent font-medium outline-none"
              aria-label="Fuel price"
            />
            <span className="text-xs font-medium">VND/L</span>
            <ChevronDown className="ml-2 h-4 w-4" aria-hidden="true" />
          </div>
        </label>

        <div className="space-y-2">
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold">
            Toll costs <Info className="h-3.5 w-3.5 text-[#8a93a1]" />
          </span>
          <div className="grid h-9 grid-cols-2 rounded-lg border border-[#d9dfe8] bg-white p-1 text-sm font-semibold">
            {(["VETC", "BOT"] as const).map((mode) => (
              <button
                key={mode}
                className={
                  tollMode === mode
                    ? "rounded-md bg-[#174fd4] text-white shadow-[0_6px_14px_rgba(23,79,212,0.25)]"
                    : "rounded-md text-[#111827] transition hover:bg-[#f1f4f8]"
                }
                onClick={() => onTollModeChange(mode)}
              >
                {mode}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 space-y-2">
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold">
          Travel mode <Info className="h-3.5 w-3.5 text-[#8a93a1]" />
        </span>
        <div className="grid h-10 grid-cols-[1fr_1.3fr_1fr_42px] rounded-lg border border-[#d9dfe8] bg-white p-1 text-sm font-semibold">
          {vehicles.map((item) => (
            <button
              key={item.value}
              className={
                vehicle === item.value
                  ? "inline-flex items-center justify-center gap-2 rounded-md bg-[#174fd4] text-white shadow-[0_6px_14px_rgba(23,79,212,0.22)]"
                  : "inline-flex items-center justify-center gap-2 rounded-md text-[#111827] transition hover:bg-[#f1f4f8]"
              }
              onClick={() => onVehicleChange(item.value)}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
          <button className="grid place-items-center rounded-md border-l border-[#edf0f4]">
            <ChevronDown className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>

      <section className="mt-5 rounded-b-2xl border-t border-[#edf0f4] pt-4">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-bold tracking-[-0.02em]">Trip summary</h2>
          <ChevronDown className="h-5 w-5 rotate-180" aria-hidden="true" />
        </div>

        <div className="grid grid-cols-2 gap-5">
          <div>
            <p className="text-xs font-medium text-[#6b7280]">Total distance</p>
            <p className="mt-1 text-xl font-bold">{summary.distanceKm} km</p>
          </div>
          <div className="border-l border-[#dfe4ea] pl-4">
            <p className="text-xs font-medium text-[#6b7280]">ETA</p>
            <p className="mt-1 text-xl font-bold">
              {formatDuration(summary.durationSeconds)}
            </p>
          </div>
        </div>

        <div className="mt-4 h-px bg-[#edf0f4]" />

        <div className="mt-4 grid grid-cols-3 gap-3">
          <div>
            <p className="text-xs font-medium text-[#6b7280]">Est. fuel cost</p>
            <p className="mt-1 text-sm font-bold">{formatVnd(summary.fuelCost)}</p>
          </div>
          <div>
            <p className="text-xs font-medium text-[#6b7280]">Toll cost</p>
            <p className="mt-1 text-sm font-bold">{formatVnd(summary.tollCost)}</p>
          </div>
          <div>
            <p className="text-xs font-medium text-[#6b7280]">Total trip cost:</p>
            <p className="mt-1 text-sm font-bold text-[#174fd4]">
              {formatVnd(summary.totalCost)}
            </p>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-[1fr_52px_52px] gap-3">
          <button className="inline-flex h-12 items-center justify-center gap-3 rounded-lg bg-[#174fd4] text-[15px] font-bold text-white shadow-[0_12px_24px_rgba(23,79,212,0.25)] transition hover:bg-[#0f43c5]">
            <Navigation className="h-5 w-5" aria-hidden="true" />
            Start navigation
          </button>
          <button
            className="grid h-12 place-items-center rounded-lg border border-[#d9dfe8] bg-[#f7f8fa] transition hover:bg-white"
            aria-label="Share route"
          >
            <Share2 className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            className="grid h-12 place-items-center rounded-lg border border-[#d9dfe8] bg-[#f7f8fa] transition hover:bg-white"
            aria-label="More route actions"
          >
            <MoreHorizontal className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </section>
    </aside>
  );
}

export function AppShell() {
  const [stops, setStops] = useState<RouteStop[]>(initialStops);
  const [vehicle, setVehicle] = useState<VehicleType>("Sedan");
  const [tollMode, setTollMode] = useState<"VETC" | "BOT">("VETC");

  const locationPoints = useMemo(() => stops.map(toLocationPoint), [stops]);
  const routeResult = useMemo<RouteResult>(
    () => ({
      ...createFallbackRoute(locationPoints),
      distanceKm: summary.distanceKm,
      durationSeconds: summary.durationSeconds,
      isFallbackEstimate: false
    }),
    [locationPoints]
  );
  const checkpoints = locationPoints.filter((point) => point.type === "checkpoint");
  const origin = locationPoints.find((point) => point.type === "origin") ?? locationPoints[0];
  const destination =
    [...locationPoints].reverse().find((point) => point.type === "destination") ??
    locationPoints[locationPoints.length - 1];

  function addCheckpoint() {
    const nextIndex = stops.filter((stop) => stop.type === "checkpoint").length + 1;
    const destinationIndex = stops.findIndex((stop) => stop.type === "destination");
    const checkpoint: RouteStop = {
      id: `checkpoint-new-${Date.now()}`,
      name: "Checkpoint",
      address: `Checkpoint ${nextIndex}, Vietnam`,
      lat: 19.1,
      lng: 105.76,
      type: "checkpoint"
    };

    setStops((current) => {
      const next = [...current];
      next.splice(destinationIndex, 0, checkpoint);
      return next;
    });
  }

  return (
    <main className="h-screen overflow-hidden bg-[#eef4fb] text-[#111827]">
      <TopBar />
      <section className="relative h-[calc(100vh-94px)] overflow-hidden max-md:h-auto max-md:min-h-[calc(100vh-94px)]">
        <MapView
          origin={origin}
          destination={destination}
          checkpoints={checkpoints}
          tollStops={[]}
          routeResult={routeResult}
          onMarkerDrag={() => undefined}
        />

        <RoutePanel
          stops={stops}
          vehicle={vehicle}
          tollMode={tollMode}
          onVehicleChange={setVehicle}
          onTollModeChange={setTollMode}
          onAddCheckpoint={addCheckpoint}
          onRemoveStop={(id) =>
            setStops((current) => current.filter((stop) => stop.id !== id))
          }
        />
      </section>
    </main>
  );
}
