# ResQ Website

ResQ Website is a Vite + React frontend for the ResQ roadside assistance experience.

## Tracking module

The live tracking experience is built as a client-only Leaflet module with simulated
vehicle movement for development.

### Relevant structure

```text
src/
  app/
    components/
      TrackingPage.tsx
      tracking/
        TrackingLiveMap.tsx
        tracking-utils.ts
  styles/
    index.css
    theme.css
```

### What it does

- Uses browser geolocation for the user marker, with a Ho Chi Minh City fallback.
- Requests a development route from the OSRM demo API.
- Falls back to a straight line if the route request fails.
- Simulates a rescue box van moving toward the user in real time.
- Updates distance, ETA, and status on a bottom-sheet style info card.
- Uses fully custom Leaflet div icons instead of default marker assets.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## GitHub Pages deployment

This repository is configured to deploy automatically to GitHub Pages from the `main` branch through GitHub Actions.

Expected site URL:

`https://nghuax.github.io/resqwebsite/`

## Connecting real driver GPS later

To replace the frontend simulation with live backend data:

1. Keep `TrackingLiveMap.tsx` as the rendering layer and move the simulated interval
   into a dedicated data hook.
2. Stream driver coordinates from the backend with WebSocket, SSE, or polling.
3. Update the vehicle marker directly from backend coordinates instead of
   `travelledDistanceRef`.
4. Recompute route geometry when the driver or user location changes materially.
5. Use backend ETA if available, and keep the current frontend ETA calculation as a
   fallback.
6. If you add authentication or trip IDs, fetch route/session state before mounting
   the map and pass it into the tracking component as typed props.
