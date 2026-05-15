import { useEffect, useRef, useState } from "react";
import type {
  Circle as LeafletCircle,
  Map as LeafletMap,
  Marker as LeafletMarker,
} from "leaflet";
import { Crosshair, LoaderCircle, MapPin } from "lucide-react";
import {
  HO_CHI_MINH_CITY_FALLBACK,
  getUserLocation,
  measureDistanceMeters,
  type GeoPoint,
  type LocationSource,
} from "../tracking/tracking-utils";

export type ServiceLocationSource = LocationSource | "manual";

export type ServiceLocationValue = {
  point: GeoPoint;
  source: ServiceLocationSource;
  address: string;
};

type ServiceLocationPickerProps = {
  className?: string;
  onChange: (location: ServiceLocationValue) => void;
};

type ReverseGeocodeResponse = {
  display_name?: string;
  address?: {
    road?: string;
    suburb?: string;
    quarter?: string;
    city?: string;
    town?: string;
    state?: string;
  };
};

const mono = "font-['IBM_Plex_Mono',monospace]";

export function ServiceLocationPicker({
  className = "",
  onChange,
}: ServiceLocationPickerProps) {
  const mapElementRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<LeafletMap | null>(null);
  const markerRef = useRef<LeafletMarker | null>(null);
  const coverageRef = useRef<LeafletCircle | null>(null);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);
  const geolocationWatchRef = useRef<number | null>(null);
  const reverseGeocodeAbortRef = useRef<AbortController | null>(null);
  const onChangeRef = useRef(onChange);
  const locationRef = useRef<ServiceLocationValue>({
    point: HO_CHI_MINH_CITY_FALLBACK,
    source: "fallback",
    address: formatCoordinates(HO_CHI_MINH_CITY_FALLBACK),
  });
  const manualOverrideRef = useRef(false);

  const [isLocating, setIsLocating] = useState(true);
  const [isResolvingAddress, setIsResolvingAddress] = useState(false);
  const [hasMapReady, setHasMapReady] = useState(false);
  const [location, setLocation] = useState<ServiceLocationValue>({
    point: HO_CHI_MINH_CITY_FALLBACK,
    source: "fallback",
    address: formatCoordinates(HO_CHI_MINH_CITY_FALLBACK),
  });

  useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  useEffect(() => {
    locationRef.current = location;
  }, [location]);

  useEffect(() => {
    if (!mapElementRef.current) {
      return;
    }

    let cancelled = false;

    const initialize = async () => {
      const L = await import("leaflet");

      if (!mapElementRef.current || cancelled) {
        return;
      }

      const map = L.map(mapElementRef.current, {
        zoomControl: false,
        attributionControl: true,
        preferCanvas: true,
      }).setView([HO_CHI_MINH_CITY_FALLBACK.lat, HO_CHI_MINH_CITY_FALLBACK.lng], 14);

      mapRef.current = map;

      L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
        subdomains: "abcd",
        maxZoom: 20,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; CARTO',
      }).addTo(map);

      markerRef.current = L.marker(
        [HO_CHI_MINH_CITY_FALLBACK.lat, HO_CHI_MINH_CITY_FALLBACK.lng],
        {
          draggable: true,
          icon: L.divIcon({
            className: "",
            iconSize: [36, 48],
            iconAnchor: [18, 42],
            html: `
              <div class="resq-location-pin">
                <span class="resq-location-pin__halo"></span>
                <span class="resq-location-pin__core">
                  <span class="resq-location-pin__dot"></span>
                </span>
              </div>
            `,
          }),
        },
      ).addTo(map);

      coverageRef.current = L.circle(
        [HO_CHI_MINH_CITY_FALLBACK.lat, HO_CHI_MINH_CITY_FALLBACK.lng],
        {
          radius: 140,
          color: "#ee3224",
          weight: 1,
          fillColor: "#ee3224",
          fillOpacity: 0.1,
          interactive: false,
        },
      ).addTo(map);

      markerRef.current.on("dragend", () => {
        const nextLatLng = markerRef.current?.getLatLng();

        if (!nextLatLng) {
          return;
        }

        void applyLocation(
          { lat: nextLatLng.lat, lng: nextLatLng.lng },
          "manual",
          true,
        );
      });

      map.on("click", (event) => {
        void applyLocation(
          { lat: event.latlng.lat, lng: event.latlng.lng },
          "manual",
          true,
        );
      });

      if (typeof ResizeObserver !== "undefined") {
        resizeObserverRef.current = new ResizeObserver(() => {
          map.invalidateSize();
        });
        resizeObserverRef.current.observe(mapElementRef.current);
      }

      window.requestAnimationFrame(() => {
        map.invalidateSize();
      });

      setHasMapReady(true);
      await locateUser(false);

      if (
        typeof navigator !== "undefined" &&
        "geolocation" in navigator &&
        geolocationWatchRef.current === null
      ) {
        geolocationWatchRef.current = navigator.geolocation.watchPosition(
          (position) => {
            if (cancelled || manualOverrideRef.current) {
              return;
            }

            const nextPoint = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };
            const lastPoint = locationRef.current.point;

            if (measureDistanceMeters(lastPoint, nextPoint) < 12) {
              return;
            }

            void applyLocation(nextPoint, "browser", false, {
              resolveAddress: measureDistanceMeters(lastPoint, nextPoint) > 80,
            });
          },
          () => {
            geolocationWatchRef.current = null;
          },
          {
            enableHighAccuracy: true,
            timeout: 10_000,
            maximumAge: 10_000,
          },
        );
      }
    };

    const locateUser = async (shouldFly: boolean) => {
      setIsLocating(true);

      try {
        const { point, source } = await getUserLocation();

        if (cancelled) {
          return;
        }

        await applyLocation(point, source, shouldFly);
      } finally {
        if (!cancelled) {
          setIsLocating(false);
        }
      }
    };

    const applyLocation = async (
      point: GeoPoint,
      source: ServiceLocationSource,
      shouldFly: boolean,
      options: {
        resolveAddress?: boolean;
      } = {},
    ) => {
      const map = mapRef.current;

      if (!map) {
        return;
      }

      if (source === "manual") {
        manualOverrideRef.current = true;
      } else if (source === "browser") {
        manualOverrideRef.current = false;
      }

      markerRef.current?.setLatLng([point.lat, point.lng]);
      coverageRef.current?.setLatLng([point.lat, point.lng]);

      if (shouldFly) {
        map.flyTo([point.lat, point.lng], 16, {
          animate: true,
          duration: 1.1,
        });
      } else {
        map.setView([point.lat, point.lng], 16, { animate: false });
      }

      const optimisticLocation: ServiceLocationValue = {
        point,
        source,
        address:
          options.resolveAddress === false
            ? locationRef.current.address
            : formatCoordinates(point),
      };

      setLocation(optimisticLocation);
      onChangeRef.current(optimisticLocation);

      if (options.resolveAddress === false) {
        return;
      }

      reverseGeocodeAbortRef.current?.abort();
      const reverseGeocodeAbortController = new AbortController();
      reverseGeocodeAbortRef.current = reverseGeocodeAbortController;

      setIsResolvingAddress(true);

      try {
        const resolvedAddress = await reverseGeocodePoint(
          point,
          reverseGeocodeAbortController.signal,
        );

        if (cancelled || reverseGeocodeAbortController.signal.aborted) {
          return;
        }

        const resolvedLocation: ServiceLocationValue = {
          point,
          source,
          address: resolvedAddress,
        };

        setLocation(resolvedLocation);
        onChangeRef.current(resolvedLocation);
      } finally {
        if (
          !cancelled &&
          reverseGeocodeAbortRef.current === reverseGeocodeAbortController
        ) {
          setIsResolvingAddress(false);
        }
      }
    };

    void initialize();

    return () => {
      cancelled = true;
      if (geolocationWatchRef.current !== null) {
        navigator.geolocation.clearWatch(geolocationWatchRef.current);
        geolocationWatchRef.current = null;
      }
      reverseGeocodeAbortRef.current?.abort();
      resizeObserverRef.current?.disconnect();
      resizeObserverRef.current = null;
      coverageRef.current?.remove();
      coverageRef.current = null;
      markerRef.current?.remove();
      markerRef.current = null;
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, []);

  const handleLocateMe = async () => {
    if (!mapRef.current) {
      return;
    }

    setIsLocating(true);
    manualOverrideRef.current = false;

    try {
      const { point, source } = await getUserLocation();
      const map = mapRef.current;

      if (!map) {
        return;
      }

      markerRef.current?.setLatLng([point.lat, point.lng]);
      coverageRef.current?.setLatLng([point.lat, point.lng]);
      map.flyTo([point.lat, point.lng], 16, {
        animate: true,
        duration: 1.1,
      });

      const optimisticLocation: ServiceLocationValue = {
        point,
        source,
        address: formatCoordinates(point),
      };

      setLocation(optimisticLocation);
      onChangeRef.current(optimisticLocation);

      reverseGeocodeAbortRef.current?.abort();
      const reverseGeocodeAbortController = new AbortController();
      reverseGeocodeAbortRef.current = reverseGeocodeAbortController;

      setIsResolvingAddress(true);

      try {
        const resolvedAddress = await reverseGeocodePoint(
          point,
          reverseGeocodeAbortController.signal,
        );

        if (reverseGeocodeAbortController.signal.aborted) {
          return;
        }

        const resolvedLocation: ServiceLocationValue = {
          point,
          source,
          address: resolvedAddress,
        };

        setLocation(resolvedLocation);
        onChangeRef.current(resolvedLocation);
      } finally {
        if (reverseGeocodeAbortRef.current === reverseGeocodeAbortController) {
          setIsResolvingAddress(false);
        }
      }
    } finally {
      setIsLocating(false);
    }
  };

  return (
    <div
      className={`relative overflow-hidden rounded-[18px] border border-[rgba(4,38,153,0.08)] bg-[#eef2f6] shadow-[0_18px_40px_rgba(8,11,13,0.06)] ${className}`}
    >
      <div ref={mapElementRef} className="absolute inset-0" />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.56),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.12),transparent_26%,transparent_72%,rgba(8,11,13,0.08)_100%)]" />

      <div className="pointer-events-none absolute left-3 top-3 max-w-[calc(100%-72px)] rounded-[16px] border border-white/75 bg-white/92 px-4 py-3 shadow-[0_14px_28px_rgba(8,11,13,0.08)] backdrop-blur-[14px] sm:left-4 sm:top-4">
        <p className={`${mono} text-[11px] uppercase tracking-[0.18em] text-[#99a1af]`}>
          Vị trí hỗ trợ
        </p>
        <p className={`${mono} mt-1 text-[14px] font-[700] leading-[1.5] text-[#080b0d]`}>
          {location.address}
        </p>
        <p className={`${mono} mt-1 text-[11px] uppercase tracking-[0.16em] text-[#4a5565]`}>
          {getSourceLabel(location.source)}
        </p>
      </div>

      <div className="pointer-events-none absolute right-3 top-3 sm:right-4 sm:top-4">
        <button
          type="button"
          onClick={() => {
            void handleLocateMe();
          }}
          className="pointer-events-auto flex size-[42px] items-center justify-center rounded-full border border-white/75 bg-white/92 text-[#080b0d] shadow-[0_14px_28px_rgba(8,11,13,0.08)] backdrop-blur-[14px] transition-transform hover:-translate-y-[1px]"
          aria-label="Dùng vị trí hiện tại"
        >
          <Crosshair size={18} />
        </button>
      </div>

      <div className="pointer-events-none absolute inset-x-3 bottom-3 sm:inset-x-4 sm:bottom-4">
        <div className="rounded-[16px] border border-white/70 bg-white/90 px-4 py-3 shadow-[0_14px_28px_rgba(8,11,13,0.08)] backdrop-blur-[14px]">
          <div className="flex items-start gap-3">
            <MapPin size={16} className="mt-[2px] shrink-0 text-[#ee3224]" />
            <div className="min-w-0">
              <p className={`${mono} text-[12px] font-[500] text-[#080b0d]`}>
                Chạm vào bản đồ hoặc kéo ghim để chỉnh lại vị trí
              </p>
              <p className={`${mono} mt-1 text-[11px] leading-[18px] text-[#4a5565]`}>
                Tọa độ hiện tại: {formatCoordinates(location.point)}
              </p>
            </div>
          </div>
        </div>
      </div>

      {(isLocating || !hasMapReady) && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/62 backdrop-blur-[3px]">
          <div className="rounded-full border border-[rgba(4,38,153,0.08)] bg-white/94 px-4 py-2 shadow-[0_10px_24px_rgba(8,11,13,0.08)]">
            <div className="flex items-center gap-2">
              <LoaderCircle size={16} className="animate-spin text-[#ee3224]" />
              <span className={`${mono} text-[11px] uppercase tracking-[0.16em] text-[#4a5565]`}>
                Đang xác định vị trí
              </span>
            </div>
          </div>
        </div>
      )}

      {isResolvingAddress && !isLocating && (
        <div className="pointer-events-none absolute bottom-[84px] left-1/2 -translate-x-1/2">
          <div className="rounded-full border border-white/75 bg-white/92 px-3 py-1.5 shadow-[0_10px_24px_rgba(8,11,13,0.08)] backdrop-blur-[14px]">
            <span className={`${mono} text-[10px] uppercase tracking-[0.16em] text-[#4a5565]`}>
              Đang cập nhật địa chỉ
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

async function reverseGeocodePoint(
  point: GeoPoint,
  signal: AbortSignal,
): Promise<string> {
  try {
    const response = await fetch(
      "https://nominatim.openstreetmap.org/reverse" +
        `?format=jsonv2&lat=${point.lat}&lon=${point.lng}&zoom=18&addressdetails=1`,
      {
        method: "GET",
        signal,
        headers: {
          "Accept-Language": "vi,en;q=0.8",
        },
      },
    );

    if (!response.ok) {
      throw new Error(`Reverse geocode failed: ${response.status}`);
    }

    const payload = (await response.json()) as ReverseGeocodeResponse;
    const compactAddress = [
      payload.address?.road,
      payload.address?.suburb ?? payload.address?.quarter,
      payload.address?.city ?? payload.address?.town ?? payload.address?.state,
    ]
      .filter(Boolean)
      .join(", ");

    return compactAddress || payload.display_name || formatCoordinates(point);
  } catch {
    return formatCoordinates(point);
  }
}

function getSourceLabel(source: ServiceLocationSource): string {
  if (source === "browser") {
    return "GPS trực tiếp";
  }

  if (source === "manual") {
    return "Bạn đã chỉnh lại vị trí";
  }

  return "Vị trí mặc định TP.HCM";
}

function formatCoordinates(point: GeoPoint): string {
  return `${point.lat.toFixed(5)}, ${point.lng.toFixed(5)}`;
}
