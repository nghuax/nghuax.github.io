# Portfolio Design Translation

This site rebuild follows the Bugatti-inspired system from the provided design brief, translated into web-safe assets and open-source font substitutes.

## Palette

- Canvas: `#000000`
- Primary text and borders: `#ffffff`
- Secondary text and hairlines: `#999999`
- No UI accent colors, gradients, glows, or drop shadows

## Font Mapping

Because the proprietary Bugatti fonts are not available locally, the implementation uses:

- `Big Shoulders Display` as the Bugatti Display substitute
- `Space Mono` as the Bugatti Monospace substitute
- `Inter` as the Bugatti Text substitute

## Component Rules

- Primary CTA: transparent background, `1px` white border, full pill radius, uppercase mono label
- Secondary CTA: transparent background, muted border, same pill silhouette
- Hairlines: `1px` muted borders only
- No cards or elevated surfaces

## Layout Rules

- Black full-bleed sections stacked vertically
- Hero and chapter sections use video or photography first, with copy layered above
- Monumental hero type reserved for the first and last sections
- Responsive behavior collapses multi-column moments to a single cinematic stack on tablet and mobile

## Local Media Used

- `assets/media/road-night.web.mp4`
- `assets/media/closeup-gaze.web.mp4`
- `assets/media/portrait-car.png`
- `assets/media/garage-monogram.png`
- `assets/media/car-study.jpg`
- `assets/media/monogram.png`
