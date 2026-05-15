import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        cruise: {
          ink: "#090a10",
          panel: "#11131d",
          card: "#171a25",
          line: "#272b3a",
          mint: "#68f6c2",
          mintDeep: "#20c997",
          purple: "#9b7cff",
          violet: "#6f5cff",
          toll: "#ffb347",
          pink: "#ff5c9f"
        }
      },
      boxShadow: {
        shell: "0 30px 90px rgba(21, 14, 45, 0.42)",
        glow: "0 0 28px rgba(104, 246, 194, 0.32)"
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "ui-sans-serif", "system-ui"]
      }
    }
  },
  plugins: []
};

export default config;
