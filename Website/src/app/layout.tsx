import type { Metadata } from "next";
import "@vietmap/vietmap-gl-js/dist/vietmap-gl.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cruise | Cruise the roads",
  description:
    "Cruise the roads with a Vietnam-focused route planning and trip cost calculator."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
