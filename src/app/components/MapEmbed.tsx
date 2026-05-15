import { useEffect, useRef, useState } from "react";
import type { Circle, CircleMarker, Map as LeafletMap } from "leaflet";

type MapEmbedProps = {
  className?: string;
  lat?: number;
  lng?: number;
  zoom?: number;
  label?: string;
  description?: string;
};

export function MapEmbed({
  className = "",
  lat = 10.7769,
  lng = 106.7009,
  zoom = 13,
  label = "ResQ đang hỗ trợ khu vực này",
  description = "Đội cứu hộ có thể tiếp cận trong khoảng 15-30 phút.",
}: MapEmbedProps) {
  const mapElementRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<LeafletMap | null>(null);
  const markerRef = useRef<CircleMarker | null>(null);
  const coverageRef = useRef<Circle | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!mapElementRef.current || mapRef.current) {
      return;
    }

    let cancelled = false;
    let resizeObserver: ResizeObserver | null = null;

    const initialize = async () => {
      const L = await import("leaflet");

      if (!mapElementRef.current || mapRef.current || cancelled) {
        return;
      }

      const map = L.map(mapElementRef.current, {
        zoomControl: false,
        scrollWheelZoom: false,
        attributionControl: true,
      }).setView([lat, lng], zoom);

      L.control.zoom({ position: "bottomright" }).addTo(map);

      L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
        subdomains: "abcd",
        maxZoom: 20,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; CARTO',
      }).addTo(map);

      const coverage = L.circle([lat, lng], {
        radius: 850,
        color: "#ee3224",
        weight: 1,
        fillColor: "#ee3224",
        fillOpacity: 0.12,
        interactive: false,
      }).addTo(map);

      const supportPoints: [number, number][] = [
        [lat + 0.011, lng - 0.018],
        [lat - 0.008, lng + 0.014],
        [lat + 0.004, lng + 0.02],
      ];

      L.polyline(
        [
          supportPoints[0],
          [lat, lng],
          supportPoints[1],
          [lat, lng],
          supportPoints[2],
        ],
        {
          color: "#080b0d",
          weight: 2,
          opacity: 0.28,
          dashArray: "6 8",
          lineCap: "round",
          lineJoin: "round",
          interactive: false,
        },
      ).addTo(map);

      supportPoints.forEach((point) => {
        L.circleMarker(point, {
          radius: 6,
          color: "#ffffff",
          weight: 3,
          fillColor: "#080b0d",
          fillOpacity: 1,
          interactive: false,
        }).addTo(map);
      });

      const marker = L.circleMarker([lat, lng], {
        radius: 10,
        color: "#ffffff",
        weight: 4,
        fillColor: "#ee3224",
        fillOpacity: 1,
      }).addTo(map);

      mapRef.current = map;
      markerRef.current = marker;
      coverageRef.current = coverage;
      setIsReady(true);
      map.fitBounds(
        [
          [lat, lng],
          ...supportPoints,
        ],
        {
          padding: [38, 38],
          maxZoom: zoom,
        },
      );

      if (typeof ResizeObserver !== "undefined") {
        resizeObserver = new ResizeObserver(() => {
          map.invalidateSize();
        });
        resizeObserver.observe(mapElementRef.current);
      }

      window.requestAnimationFrame(() => {
        map.invalidateSize();
      });
    };

    initialize();

    return () => {
      cancelled = true;
      resizeObserver?.disconnect();
      mapRef.current?.remove();
      mapRef.current = null;
      markerRef.current = null;
      coverageRef.current = null;
    };
  }, []);

  useEffect(() => {
    const map = mapRef.current;
    const marker = markerRef.current;
    const coverage = coverageRef.current;

    if (!map || !marker || !coverage) {
      return;
    }

    const nextLatLng: [number, number] = [lat, lng];
    map.setView(nextLatLng, zoom, { animate: false });
    marker.setLatLng(nextLatLng);
    coverage.setLatLng(nextLatLng);
  }, [lat, lng, zoom]);

  return (
    <div
      className={`resq-card-lift resq-map-float relative overflow-hidden rounded-[20px] border border-[rgba(4,38,153,0.08)] bg-[#f3f4f6] shadow-[0_20px_70px_rgba(8,11,13,0.08)] ${className}`}
    >
      <div ref={mapElementRef} className="absolute inset-0" />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.5),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.12),transparent_28%,transparent_72%,rgba(8,11,13,0.08)_100%)]" />

      <div className="pointer-events-none absolute left-4 top-4 max-w-[min(280px,calc(100%-2rem))] rounded-[18px] border border-white/75 bg-white/88 px-4 py-3 shadow-[0_14px_36px_rgba(8,11,13,0.08)] backdrop-blur-[14px] sm:left-5 sm:top-5">
        <p className="font-['IBM_Plex_Mono',monospace] text-[11px] uppercase tracking-[0.18em] text-[#99a1af]">
          Bản đồ ResQ
        </p>
        <p className="mt-1 font-['IBM_Plex_Mono',monospace] text-[14px] font-[700] leading-[1.5] text-[#080b0d]">
          {label}
        </p>
        <p className="mt-1 font-['IBM_Plex_Mono',monospace] text-[12px] leading-[1.7] text-[#4a5565]">
          {description}
        </p>
      </div>

      <div className="pointer-events-none absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 sm:bottom-5 sm:left-5 sm:right-auto">
        <span className="font-['IBM_Plex_Mono',monospace] rounded-full border border-white/75 bg-white/90 px-3 py-1.5 text-[11px] uppercase tracking-[0.16em] text-[#080b0d] shadow-[0_10px_24px_rgba(8,11,13,0.08)] backdrop-blur-[14px]">
          Phủ sóng 24/7
        </span>
        <span className="font-['IBM_Plex_Mono',monospace] rounded-full border border-white/75 bg-white/90 px-3 py-1.5 text-[11px] uppercase tracking-[0.16em] text-[#4a5565] shadow-[0_10px_24px_rgba(8,11,13,0.08)] backdrop-blur-[14px]">
          Điều phối gần nhất
        </span>
      </div>

      {!isReady && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/55 backdrop-blur-[2px]">
          <div className="rounded-full border border-[rgba(4,38,153,0.08)] bg-white/90 px-4 py-2 font-['IBM_Plex_Mono',monospace] text-[11px] uppercase tracking-[0.18em] text-[#4a5565] shadow-[0_10px_24px_rgba(8,11,13,0.08)]">
            Đang tải bản đồ
          </div>
        </div>
      )}
    </div>
  );
}
