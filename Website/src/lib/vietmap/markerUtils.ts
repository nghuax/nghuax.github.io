import { formatVND } from "@/lib/formatters";
import type { LocationPoint, TollStop } from "@/types/route";

export type MarkerPoint = LocationPoint & {
  cost?: number;
  note?: string;
  address?: string;
  tollType?: string;
  source?: "api" | "manual";
};

export function createMarkerElement(
  type: LocationPoint["type"],
  label: string
): HTMLElement {
  const element = document.createElement("button");
  element.type = "button";
  element.className = `cruise-marker cruise-marker-${type}`;
  element.title = label;
  element.setAttribute("aria-label", label);
  return element;
}

function createTextElement(
  tagName: "p" | "span" | "div",
  className: string,
  text: string
): HTMLElement {
  const element = document.createElement(tagName);
  element.className = className;
  element.textContent = text;
  return element;
}

export function createPopupContent(point: MarkerPoint): HTMLElement {
  const labels: Record<LocationPoint["type"], string> = {
    origin: "Start point",
    checkpoint: "Check point",
    toll: point.source === "api" ? "VietMap toll station" : "Manual toll station",
    destination: "Destination"
  };
  const root = document.createElement("div");
  root.className = "cruise-map-popup";

  root.appendChild(
    createTextElement("p", "cruise-map-popup-title", point.name || labels[point.type])
  );
  root.appendChild(
    createTextElement("p", "cruise-map-popup-type", labels[point.type])
  );
  root.appendChild(
    createTextElement(
      "p",
      "cruise-map-popup-coords",
      `${point.lat.toFixed(5)}, ${point.lng.toFixed(5)}`
    )
  );

  if (point.type === "toll" && point.cost !== undefined) {
    const toll = document.createElement("div");
    toll.className = "cruise-map-popup-toll";
    toll.appendChild(
      createTextElement("span", "", `Toll cost: ${formatVND(point.cost)}`)
    );

    if (point.tollType) {
      toll.appendChild(createTextElement("p", "", `Type: ${point.tollType}`));
    }

    if (point.address || point.note) {
      toll.appendChild(createTextElement("p", "", point.address || point.note || ""));
    }

    root.appendChild(toll);
  }

  return root;
}

export function tollStopToMarkerPoint(toll: TollStop): MarkerPoint {
  return {
    ...toll,
    type: "toll"
  };
}
