import { useEffect } from "react";

declare global {
  interface Window {
    instgrm?: {
      Embeds?: {
        process: () => void;
      };
    };
  }
}

const INSTAGRAM_EMBED_SRC = "https://www.instagram.com/embed.js";

const withInstagramTheme = (url: string, theme: "dark" | "light") => {
  const themedUrl = new URL(url);
  themedUrl.searchParams.set("theme", theme);
  return themedUrl.toString();
};

export function InstagramProfileEmbed({
  handle,
  url,
  theme = "dark",
}: {
  handle: string;
  url: string;
  theme?: "dark" | "light";
}) {
  const themedUrl = withInstagramTheme(url, theme);

  useEffect(() => {
    const processEmbed = () => {
      window.requestAnimationFrame(() => {
        window.instgrm?.Embeds?.process();
      });
    };

    const existingScript = document.querySelector<HTMLScriptElement>(
      'script[data-instgrm-script="true"]',
    );

    if (existingScript) {
      if (existingScript.dataset.loaded === "true") {
        processEmbed();
        return;
      }

      existingScript.addEventListener("load", processEmbed, { once: true });
      return;
    }

    const script = document.createElement("script");
    script.async = true;
    script.src = INSTAGRAM_EMBED_SRC;
    script.dataset.instgrmScript = "true";
    script.addEventListener(
      "load",
      () => {
        script.dataset.loaded = "true";
        processEmbed();
      },
      { once: true },
    );
    document.body.appendChild(script);
  }, [themedUrl]);

  return (
    <div className="portfolio-instagram-embed" style={{ colorScheme: theme }}>
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={themedUrl}
        data-instgrm-version="14"
        style={{
          background: "#09090b",
          border: 0,
          borderRadius: "24px",
          margin: "0 auto",
          maxWidth: "100%",
          minWidth: "100%",
          padding: 0,
          width: "100%",
        }}
      >
        <a href={themedUrl} target="_blank" rel="noreferrer">
          View @{handle} on Instagram
        </a>
      </blockquote>
    </div>
  );
}
