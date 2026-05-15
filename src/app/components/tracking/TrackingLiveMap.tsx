"use client";

import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import type { Map as LeafletMap, Marker as LeafletMarker, Polyline as LeafletPolyline } from "leaflet";
import {
  Crosshair,
  LocateFixed,
  LoaderCircle,
  Navigation,
} from "lucide-react";
import {
  buildCumulativeDistances,
  createVehicleOrigin,
  fetchRouteData,
  getBearingAlongRoute,
  getPointAlongRoute,
  getSegmentIndexAtDistance,
  getSimulationSpeedMetersPerSecond,
  getTrackingStatus,
  getUserLocation,
  type GeoPoint,
  type RouteData,
} from "./tracking-utils";

type RuntimeRoute = RouteData & {
  cumulativeDistances: number[];
};

const MAP_TICK_MS = 120;
const DEFAULT_ZOOM = 14;
const MAP_TOP_PADDING = 72;
const MAP_EDGE_PADDING = 72;

const mono = "font-['IBM_Plex_Mono',monospace]";

export function TrackingLiveMap({
  destinationPoint,
}: {
  destinationPoint?: GeoPoint | null;
}) {
  const mapElementRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<LeafletMap | null>(null);
  const userMarkerRef = useRef<LeafletMarker | null>(null);
  const vehicleMarkerRef = useRef<LeafletMarker | null>(null);
  const routeShadowRef = useRef<LeafletPolyline | null>(null);
  const activeRouteRef = useRef<LeafletPolyline | null>(null);
  const travelledRouteRef = useRef<LeafletPolyline | null>(null);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);
  const movementIntervalRef = useRef<number | null>(null);
  const travelledDistanceRef = useRef(0);
  const simulationSpeedRef = useRef(0);
  const routeRef = useRef<RuntimeRoute | null>(null);
  const followVehicleRef = useRef(true);
  const lastFollowPanAtRef = useRef(0);

  const [hasMounted, setHasMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [followVehicle, setFollowVehicle] = useState(true);
  const [userPosition, setUserPosition] = useState<GeoPoint | null>(null);
  const [vehiclePosition, setVehiclePosition] = useState<GeoPoint | null>(null);
  const [remainingDistanceMeters, setRemainingDistanceMeters] = useState(0);

  const trackingStatus = useMemo(
    () => getTrackingStatus(remainingDistanceMeters),
    [remainingDistanceMeters],
  );

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    followVehicleRef.current = followVehicle;
  }, [followVehicle]);

  useEffect(() => {
    if (!hasMounted || !mapElementRef.current) {
      return;
    }

    let cancelled = false;
    const routeAbortController = new AbortController();

    const teardownMovement = () => {
      if (movementIntervalRef.current !== null) {
        window.clearInterval(movementIntervalRef.current);
        movementIntervalRef.current = null;
      }
    };

    const teardownLayers = () => {
      routeShadowRef.current?.remove();
      activeRouteRef.current?.remove();
      travelledRouteRef.current?.remove();
      userMarkerRef.current?.remove();
      vehicleMarkerRef.current?.remove();

      routeShadowRef.current = null;
      activeRouteRef.current = null;
      travelledRouteRef.current = null;
      userMarkerRef.current = null;
      vehicleMarkerRef.current = null;
    };

    const initialize = async () => {
      const L = await import("leaflet");

      if (cancelled || !mapElementRef.current) {
        return;
      }

      const map = L.map(mapElementRef.current, {
        zoomControl: false,
        attributionControl: true,
        preferCanvas: true,
      }).setView([10.776889, 106.700806], DEFAULT_ZOOM);

      mapRef.current = map;

      L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
        subdomains: "abcd",
        maxZoom: 20,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; CARTO',
      }).addTo(map);

      if (typeof ResizeObserver !== "undefined") {
        resizeObserverRef.current = new ResizeObserver(() => {
          map.invalidateSize();
        });
        resizeObserverRef.current.observe(mapElementRef.current);
      }
      window.requestAnimationFrame(() => map.invalidateSize());

      const userPoint = destinationPoint ?? (await getUserLocation()).point;

      if (cancelled) {
        return;
      }

      setUserPosition(userPoint);

      const vehicleOrigin = createVehicleOrigin(userPoint);
      const route = await fetchRouteData(
        vehicleOrigin,
        userPoint,
        routeAbortController.signal,
      );

      if (cancelled) {
        return;
      }

      const runtimeRoute: RuntimeRoute = {
        ...route,
        cumulativeDistances: buildCumulativeDistances(route.points),
      };

      routeRef.current = runtimeRoute;
      travelledDistanceRef.current = 0;
      simulationSpeedRef.current = getSimulationSpeedMetersPerSecond(
        runtimeRoute.totalDistanceMeters,
      );

      setVehiclePosition(vehicleOrigin);
      setRemainingDistanceMeters(runtimeRoute.totalDistanceMeters);

      const routeLatLngs = runtimeRoute.points.map(toLeafletPoint);
      const bounds = L.latLngBounds(routeLatLngs);

      routeShadowRef.current = L.polyline(routeLatLngs, {
        color: "#f7d6d2",
        weight: 12,
        opacity: 0.9,
        lineCap: "round",
        lineJoin: "round",
      }).addTo(map);

      activeRouteRef.current = L.polyline(routeLatLngs, {
        color: "#ee3224",
        weight: 4,
        opacity: 0.92,
        lineCap: "round",
        lineJoin: "round",
      }).addTo(map);

      travelledRouteRef.current = L.polyline([toLeafletPoint(vehicleOrigin)], {
        color: "#080b0d",
        weight: 5,
        opacity: 0.72,
        lineCap: "round",
        lineJoin: "round",
      }).addTo(map);

      userMarkerRef.current = L.marker(toLeafletPoint(userPoint), {
        icon: L.divIcon({
          className: "",
          iconSize: [28, 28],
          iconAnchor: [14, 14],
          html: `
            <div class="resq-user-marker">
              <span class="resq-user-marker__pulse"></span>
              <span class="resq-user-marker__core"></span>
            </div>
          `,
        }),
      }).addTo(map);

      vehicleMarkerRef.current = L.marker(toLeafletPoint(vehicleOrigin), {
        icon: L.divIcon({
          className: "",
          iconSize: [68, 44],
          iconAnchor: [34, 22],
          html: `
            <div class="resq-vehicle-marker" style="--vehicle-bearing: 0deg;">
              <div class="resq-vehicle-marker__bubble">
                <svg viewBox="0 0 80 52" aria-hidden="true">
                  <rect x="8" y="15" width="34" height="22" rx="8"></rect>
                  <path d="M42 20.5C42 17.4624 44.4624 15 47.5 15H56.7C58.1783 15 59.5866 15.6284 60.5736 16.7288L67.8736 24.8667C68.7766 25.8735 69.2766 27.1779 69.2766 28.5302V37C69.2766 40.3137 66.5903 43 63.2766 43H60.5C60.5 38.8579 57.1421 35.5 53 35.5C48.8579 35.5 45.5 38.8579 45.5 43H34.5C34.5 38.8579 31.1421 35.5 27 35.5C22.8579 35.5 19.5 38.8579 19.5 43H16.5C13.1863 43 10.5 40.3137 10.5 37V20.5H42Z"></path>
                  <rect x="47" y="19" width="10" height="8" rx="3"></rect>
                  <circle cx="27" cy="43" r="5.5"></circle>
                  <circle cx="53" cy="43" r="5.5"></circle>
                </svg>
              </div>
            </div>
          `,
        }),
      }).addTo(map);

      map.fitBounds(bounds, {
        paddingTopLeft: [MAP_EDGE_PADDING, MAP_TOP_PADDING],
        paddingBottomRight: [MAP_EDGE_PADDING, MAP_EDGE_PADDING],
        maxZoom: 15,
      });

      setIsLoading(false);

      movementIntervalRef.current = window.setInterval(() => {
        const currentRoute = routeRef.current;
        const currentMap = mapRef.current;

        if (!currentRoute || !currentMap) {
          return;
        }

        const nextTravelledDistance = Math.min(
          travelledDistanceRef.current +
            simulationSpeedRef.current * (MAP_TICK_MS / 1000),
          currentRoute.totalDistanceMeters,
        );

        travelledDistanceRef.current = nextTravelledDistance;

        const nextVehiclePoint = getPointAlongRoute(
          currentRoute.points,
          currentRoute.cumulativeDistances,
          nextTravelledDistance,
        );
        const remainingDistance = Math.max(
          currentRoute.totalDistanceMeters - nextTravelledDistance,
          0,
        );
        const segmentIndex = getSegmentIndexAtDistance(
          currentRoute.cumulativeDistances,
          nextTravelledDistance,
        );
        const heading = getBearingAlongRoute(
          currentRoute.points,
          currentRoute.cumulativeDistances,
          nextTravelledDistance,
        );

        vehicleMarkerRef.current?.setLatLng(toLeafletPoint(nextVehiclePoint));
        vehicleMarkerRef.current
          ?.getElement()
          ?.style.setProperty("--vehicle-bearing", `${heading}deg`);

        const travelledPoints = [
          ...currentRoute.points.slice(0, segmentIndex + 1),
          nextVehiclePoint,
        ].map(toLeafletPoint);
        const remainingPoints = [
          nextVehiclePoint,
          ...currentRoute.points.slice(segmentIndex + 1),
        ].map(toLeafletPoint);

        travelledRouteRef.current?.setLatLngs(travelledPoints);
        activeRouteRef.current?.setLatLngs(remainingPoints);

        if (
          followVehicleRef.current &&
          Date.now() - lastFollowPanAtRef.current > 850
        ) {
          lastFollowPanAtRef.current = Date.now();
          currentMap.panTo(toLeafletPoint(nextVehiclePoint), {
            animate: true,
            duration: 0.9,
          });
        }

        setVehiclePosition(nextVehiclePoint);
        setRemainingDistanceMeters(remainingDistance);

        if (remainingDistance <= 0) {
          teardownMovement();
        }
      }, MAP_TICK_MS);
    };

    initialize().catch(() => {
      if (!cancelled) {
        setIsLoading(false);
      }
    });

    return () => {
      cancelled = true;
      routeAbortController.abort();
      teardownMovement();
      resizeObserverRef.current?.disconnect();
      resizeObserverRef.current = null;
      teardownLayers();
      mapRef.current?.remove();
      mapRef.current = null;
      routeRef.current = null;
    };
  }, [destinationPoint, hasMounted]);

  const handleLocateMe = () => {
    if (!mapRef.current || !userPosition) {
      return;
    }

    setFollowVehicle(false);
    mapRef.current.flyTo(toLeafletPoint(userPosition), 16, {
      animate: true,
      duration: 1.1,
    });
  };

  const handleRecenter = () => {
    const currentMap = mapRef.current;
    const currentUser = userPosition;
    const currentVehicle = vehiclePosition;

    if (!currentMap || !currentUser || !currentVehicle) {
      return;
    }

    setFollowVehicle(false);

    currentMap.flyToBounds(
      [toLeafletPoint(currentUser), toLeafletPoint(currentVehicle)],
      {
        paddingTopLeft: [MAP_EDGE_PADDING, MAP_TOP_PADDING],
        paddingBottomRight: [MAP_EDGE_PADDING, MAP_EDGE_PADDING],
        maxZoom: 15,
        duration: 1.1,
      },
    );
  };

  const handleToggleFollow = () => {
    setFollowVehicle((currentValue) => {
      const nextValue = !currentValue;

      if (nextValue && mapRef.current && vehiclePosition) {
        mapRef.current.flyTo(toLeafletPoint(vehiclePosition), 15, {
          animate: true,
          duration: 1.1,
        });
      }

      return nextValue;
    });
  };

  return (
    <div className="relative isolate overflow-hidden rounded-[20px] border border-[rgba(4,38,153,0.08)] bg-white shadow-[0_18px_50px_rgba(8,11,13,0.08)]">
      <div
        ref={mapElementRef}
        className="h-[500px] w-full max-w-full bg-[#e9edf1] sm:h-[580px] lg:h-[640px]"
      />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.54),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.24),transparent_24%,transparent_70%,rgba(8,11,13,0.12)_100%)]" />

      <div className="pointer-events-none absolute left-3 top-3 sm:left-6 sm:top-6">
        <span className={`${mono} inline-flex items-center rounded-full border border-white/70 bg-white/92 px-3 py-2 text-[11px] uppercase tracking-[0.16em] text-[#4a5565] shadow-[0_14px_30px_rgba(8,11,13,0.08)] backdrop-blur-[14px]`}>
          {trackingStatus.label}
        </span>
      </div>

      <div className="pointer-events-none absolute right-3 top-14 flex flex-col gap-3 sm:right-6 sm:top-6">
        <MapActionButton
          active={false}
          icon={<LocateFixed size={16} />}
          label="Vị trí tôi"
          onClick={handleLocateMe}
        />
        <MapActionButton
          active={false}
          icon={<Crosshair size={16} />}
          label="Căn giữa"
          onClick={handleRecenter}
        />
        <MapActionButton
          active={followVehicle}
          icon={<Navigation size={16} />}
          label="Theo xe"
          onClick={handleToggleFollow}
        />
      </div>

      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/65 backdrop-blur-[4px]">
          <div className="rounded-[20px] border border-[rgba(4,38,153,0.08)] bg-white px-5 py-4 shadow-[0_18px_50px_rgba(8,11,13,0.12)]">
            <div className="flex items-center gap-3">
              <LoaderCircle className="animate-spin text-[#ee3224]" size={18} />
              <div>
                <p className={`${mono} text-[11px] uppercase tracking-[0.22em] text-[#99a1af]`}>
                  Đang chuẩn bị bản đồ
                </p>
                <p className={`${mono} text-[15px] font-[500] text-[#080b0d]`}>
                  Đang xác định vị trí và tuyến đường...
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function MapActionButton({
  active,
  icon,
  label,
  onClick,
}: {
  active: boolean;
  icon: ReactNode;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`pointer-events-auto flex items-center gap-2 rounded-full border px-3 py-3 shadow-[0_18px_30px_rgba(8,11,13,0.14)] transition-all hover:-translate-y-[1px] ${
        active
          ? "border-[#ee3224] bg-[#ee3224] text-white"
          : "border-[rgba(4,38,153,0.08)] bg-white text-[#080b0d]"
      }`}
      aria-pressed={active}
    >
      <span className="grid size-4 place-items-center">{icon}</span>
      <span className={`${mono} hidden text-[11px] uppercase tracking-[0.16em] sm:inline`}>
        {label}
      </span>
    </button>
  );
}

function toLeafletPoint(point: GeoPoint): [number, number] {
  return [point.lat, point.lng];
}
