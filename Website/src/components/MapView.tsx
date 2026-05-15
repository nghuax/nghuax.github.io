"use client";

import * as vietmapgl from "@vietmap/vietmap-gl-js/dist/vietmap-gl.js";
import { Layers, Minus, Plus } from "lucide-react";
import { useEffect, useRef } from "react";
import { getVietMapStyle, VIETMAP_API_KEY } from "@/lib/vietmap/map";
import type { LocationPoint, RouteResult, TollStop } from "@/types/route";

interface MapViewProps {
  origin: LocationPoint;
  destination: LocationPoint;
  checkpoints: LocationPoint[];
  tollStops: TollStop[];
  routeResult: RouteResult | null;
  onMarkerDrag: (
    id: string,
    type: LocationPoint["type"],
    lat: number,
    lng: number
  ) => void;
}

const ROUTE_PATH =
  "M580 88 C594 132 596 178 592 226 C590 251 606 274 602 306 C599 338 575 350 577 381 C580 416 555 444 556 482 C557 529 533 562 527 608 C523 647 514 681 505 718";

function RoadShield({ className, children }: { className: string; children: string }) {
  return (
    <span
      className={`absolute rounded border border-[#7da8ff] bg-white/82 px-1.5 py-0.5 text-[11px] font-semibold text-[#3978f2] shadow-sm ${className}`}
    >
      {children}
    </span>
  );
}

function CityLabel({ className, children }: { className: string; children: string }) {
  return (
    <span
      className={`absolute text-[15px] font-medium text-[#2e3440] drop-shadow-[0_1px_0_rgba(255,255,255,0.85)] ${className}`}
    >
      {children}
    </span>
  );
}

function CheckpointMarker({
  className,
  number,
  label
}: {
  className: string;
  number: number;
  label: string;
}) {
  return (
    <div className={`absolute flex items-center gap-2 ${className}`}>
      <span className="grid h-8 w-8 place-items-center rounded-full border-2 border-[#2d67df] bg-white text-sm font-semibold text-[#174fd4] shadow-[0_4px_12px_rgba(23,79,212,0.22)]">
        {number}
      </span>
      <span className="rounded-md bg-white/75 px-1.5 py-0.5 text-[13px] font-medium text-[#2f3642]">
        {label}
      </span>
    </div>
  );
}

function PinMarker({
  className,
  label,
  variant = "blue"
}: {
  className: string;
  label: string;
  variant?: "blue" | "black";
}) {
  return (
    <div className={`absolute ${className}`}>
      <span
        className={
          variant === "black"
            ? "grid h-9 w-9 place-items-center rounded-full bg-white shadow-[0_4px_18px_rgba(15,23,42,0.26)]"
            : "grid h-11 w-11 place-items-center rounded-full bg-[#1f56d8] text-white shadow-[0_8px_20px_rgba(31,86,216,0.28)]"
        }
      >
        {variant === "black" ? (
          <span className="h-5 w-5 rounded-full border-[5px] border-black bg-white" />
        ) : (
          <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
            <path
              d="M12 21s6-5.2 6-10.1A6 6 0 0 0 6 10.9C6 15.8 12 21 12 21Z"
              fill="currentColor"
            />
            <circle cx="12" cy="10.8" r="2.3" fill="white" />
          </svg>
        )}
      </span>
      <span className="absolute left-1/2 top-full -translate-x-1/2 text-[19px] font-bold text-[#111827] drop-shadow-[0_1px_0_white]">
        {label}
      </span>
    </div>
  );
}

export default function MapView({
  checkpoints
}: MapViewProps) {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<vietmapgl.Map | null>(null);

  useEffect(() => {
    if (!VIETMAP_API_KEY || !mapContainerRef.current || mapRef.current) {
      return;
    }

    const map = new vietmapgl.Map({
      container: mapContainerRef.current,
      style: getVietMapStyle(),
      center: [105.93, 19.9],
      zoom: 7,
      minZoom: 4,
      maxZoom: 17,
      attributionControl: false,
      interactive: true,
      dragRotate: false,
      touchPitch: false,
      renderWorldCopies: false
    });

    mapRef.current = map;

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  const firstCheckpoint = checkpoints[0]?.name ?? "Ninh Binh";
  const secondCheckpoint = checkpoints[1]?.name ?? "Thanh Hóa";

  return (
    <div className="relative h-full min-h-[720px] w-full overflow-hidden bg-[#edf4fb]">
      <div ref={mapContainerRef} className="absolute inset-0 opacity-25" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_64%_48%,rgba(255,255,255,0.72),transparent_28%),linear-gradient(90deg,#f8fafc_0%,#f3f7fb_58%,#dcefff_72%,#cfe7fb_100%)]" />
      <div className="absolute right-0 top-0 h-full w-[43%] bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.55),transparent_26%),linear-gradient(135deg,#deefff,#c9e4fb_58%,#c0def6)]" />
      <div className="absolute inset-y-0 left-[25%] w-[42%] opacity-60 [background-image:repeating-linear-gradient(25deg,transparent_0_34px,rgba(148,163,184,0.14)_35px,transparent_37px),repeating-linear-gradient(115deg,transparent_0_46px,rgba(148,163,184,0.12)_47px,transparent_49px)]" />
      <div className="absolute inset-0 bg-white/25" />

      <RoadShield className="left-[35.6%] top-[11.8%]">QL.32</RoadShield>
      <RoadShield className="left-[53.2%] top-[25.8%]">CT.01</RoadShield>
      <RoadShield className="left-[42.7%] top-[35.6%]">QL.10</RoadShield>
      <RoadShield className="left-[42.8%] top-[51.5%]">QL.12</RoadShield>
      <RoadShield className="left-[46.4%] top-[78.2%]">QL.7A</RoadShield>
      <RoadShield className="left-[55.4%] top-[61.5%]">QL.1A</RoadShield>

      <CityLabel className="left-[56.7%] top-[7.8%]">Bắc Ninh</CityLabel>
      <CityLabel className="left-[56.4%] top-[12.8%] text-[21px] font-bold">Hanoi</CityLabel>
      <CityLabel className="left-[64%] top-[16.6%]">Hải Dương</CityLabel>
      <CityLabel className="left-[72.6%] top-[19.8%] text-[19px] font-bold">Hải Phòng</CityLabel>
      <CityLabel className="left-[82.2%] top-[15%]">Hạ Long</CityLabel>
      <CityLabel className="left-[46.5%] top-[22.5%]">Hòa Bình</CityLabel>
      <CityLabel className="left-[51.7%] top-[53.5%]">Thanh Hóa</CityLabel>
      <span className="absolute right-[9.5%] top-[46.5%] text-center font-serif text-lg italic tracking-[0.24em] text-[#315aa0]/80">
        Gulf of
        <br />
        Tonkin
      </span>

      <svg
        viewBox="0 0 1000 760"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <path
          d={ROUTE_PATH}
          fill="none"
          stroke="rgba(45,103,223,0.18)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="18"
        />
        <path
          d={ROUTE_PATH}
          fill="none"
          stroke="#3777ea"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="7"
        />
      </svg>

      <PinMarker className="left-[57.4%] top-[13.3%]" label="Hanoi" variant="black" />
      <CheckpointMarker
        className="left-[58.9%] top-[31.5%]"
        number={1}
        label={firstCheckpoint}
      />
      <CheckpointMarker
        className="left-[55.6%] top-[52.5%]"
        number={2}
        label={secondCheckpoint}
      />
      <PinMarker className="left-[52.5%] top-[80.2%]" label="Vinh" />

      <div className="absolute left-[49.5%] top-[28.8%] flex items-center gap-3 rounded-lg bg-white px-4 py-3 shadow-[0_8px_22px_rgba(15,23,42,0.18)]">
        <span className="text-[#174fd4]">
          <CarGlyph />
        </span>
        <div>
          <p className="text-[16px] font-bold text-black">6 h 12 m</p>
          <p className="mt-0.5 text-xs font-semibold text-[#4b5563]">338 km</p>
        </div>
      </div>

      <div className="absolute right-5 top-8 grid h-12 w-12 place-items-center rounded-full bg-white text-center text-xs font-black leading-none shadow-[0_8px_20px_rgba(15,23,42,0.16)]">
        <span className="text-red-600">A</span>
        <span>N</span>
      </div>

      <div className="absolute right-5 top-[92px] overflow-hidden rounded-lg bg-white shadow-[0_8px_20px_rgba(15,23,42,0.16)]">
        <button className="grid h-12 w-12 place-items-center border-b border-[#edf0f4]" aria-label="Zoom in">
          <Plus className="h-5 w-5" aria-hidden="true" />
        </button>
        <button className="grid h-12 w-12 place-items-center" aria-label="Zoom out">
          <Minus className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      <button
        className="absolute right-5 top-[200px] grid h-12 w-12 place-items-center rounded-lg bg-white shadow-[0_8px_20px_rgba(15,23,42,0.16)]"
        aria-label="Map layers"
      >
        <Layers className="h-5 w-5" aria-hidden="true" />
      </button>

      <div className="absolute bottom-2 left-4 rounded-full bg-white/70 px-2 py-0.5 text-[13px] font-semibold text-[#9aa3af] shadow-sm">
        © VietMap
      </div>
      <div className="absolute bottom-2 right-3 rounded-md bg-white/80 px-2 py-1 text-xs font-medium text-[#4b5563] shadow-sm">
        © VietMap <span className="font-bold text-[#111827]">Improve this map</span>
      </div>
    </div>
  );
}

function CarGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path
        d="M4 11.5 5.8 7c.4-1 1.2-1.5 2.3-1.5h7.8c1.1 0 1.9.5 2.3 1.5l1.8 4.5v5.2h-2.4v-2H6.4v2H4v-5.2Z"
        fill="currentColor"
      />
      <circle cx="7.5" cy="12.8" r="1.4" fill="white" />
      <circle cx="16.5" cy="12.8" r="1.4" fill="white" />
    </svg>
  );
}
