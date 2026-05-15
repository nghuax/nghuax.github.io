import type { StyleSpecification } from "@vietmap/vietmap-gl-js/dist/vietmap-gl.js";

export const VIETMAP_API_KEY =
  process.env.NEXT_PUBLIC_VIETMAP_API_KEY?.trim() ?? "";

export const VIETMAP_DARK_STYLE_URL = VIETMAP_API_KEY
  ? `https://maps.vietmap.vn/maps/styles/dm/style.json?apikey=${encodeURIComponent(
      VIETMAP_API_KEY
    )}`
  : "";

export const VIETMAP_STREET_STYLE_URL = VIETMAP_API_KEY
  ? `https://maps.vietmap.vn/maps/styles/tm/style.json?apikey=${encodeURIComponent(
      VIETMAP_API_KEY
    )}`
  : "";

const emptyLightVietMapStyle: StyleSpecification = {
  version: 8,
  name: "Cruise empty light VietMap shell",
  sources: {},
  layers: [
    {
      id: "cruise-empty-background",
      type: "background",
      paint: {
        "background-color": "#eef4fb"
      }
    }
  ]
};

export function getVietMapStyle(): string | StyleSpecification {
  return VIETMAP_STREET_STYLE_URL || emptyLightVietMapStyle;
}
