import { defineConfig } from "vite";
import fs from "node:fs";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

const WEBSITE_DIR_NAME = "Website";
const WEBSITE_MANIFEST_PATH = "/website-manifest.json";

type WebsiteManifestEntry = {
  id: string;
  title: string;
  href: string;
};

function toUrlPath(filePath: string) {
  return filePath
    .split(path.sep)
    .map((segment) => encodeURIComponent(segment))
    .join("/");
}

function toFileName(filePath: string) {
  return filePath.split(path.sep).join("/");
}

function titleFromIndex(filePath: string, fallback: string) {
  try {
    const html = fs.readFileSync(filePath, "utf8").slice(0, 20000);
    const titleMatch = html.match(/<title[^>]*>(.*?)<\/title>/is);
    const title = titleMatch?.[1]
      ?.replace(/\s+/g, " ")
      .replace(/&amp;/g, "&")
      .trim();

    return title || fallback;
  } catch {
    return fallback;
  }
}

function formatFolderTitle(folderName: string) {
  return folderName
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (character) => character.toUpperCase());
}

function discoverWebsiteEntries(rootDir: string): WebsiteManifestEntry[] {
  const websiteDir = path.resolve(rootDir, WEBSITE_DIR_NAME);

  if (!fs.existsSync(websiteDir)) {
    return [];
  }

  const entries: WebsiteManifestEntry[] = [];
  const rootIndexPath = path.join(websiteDir, "index.html");

  if (fs.existsSync(rootIndexPath)) {
    entries.push({
      id: "website-root",
      title: titleFromIndex(rootIndexPath, "Website"),
      href: toUrlPath(path.join(WEBSITE_DIR_NAME, "index.html")),
    });
  }

  const children = fs
    .readdirSync(websiteDir, { withFileTypes: true })
    .filter((child) => child.isDirectory() && !child.name.startsWith("."))
    .sort((a, b) => a.name.localeCompare(b.name));

  for (const child of children) {
    const indexPath = path.join(websiteDir, child.name, "index.html");

    if (!fs.existsSync(indexPath)) {
      continue;
    }

    entries.push({
      id: child.name,
      title: titleFromIndex(indexPath, formatFolderTitle(child.name)),
      href: toUrlPath(path.join(WEBSITE_DIR_NAME, child.name, "index.html")),
    });
  }

  return entries;
}

function collectWebsiteFiles(directory: string): string[] {
  if (!fs.existsSync(directory)) {
    return [];
  }

  const files: string[] = [];

  for (const child of fs.readdirSync(directory, { withFileTypes: true })) {
    if (child.name.startsWith(".")) {
      continue;
    }

    const childPath = path.join(directory, child.name);

    if (child.isDirectory()) {
      files.push(...collectWebsiteFiles(childPath));
      continue;
    }

    if (child.isFile()) {
      files.push(childPath);
    }
  }

  return files;
}

const mimeTypes: Record<string, string> = {
  ".avif": "image/avif",
  ".css": "text/css; charset=utf-8",
  ".gif": "image/gif",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".mp4": "video/mp4",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webm": "video/webm",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

function websiteFolderPlugin() {
  let rootDir = "";

  return {
    name: "portfolio-website-folder",
    configResolved(config) {
      rootDir = config.root;
    },
    configureServer(server) {
      server.middlewares.use((request, response, next) => {
        const rawUrl = request.url?.split("?")[0] ?? "";

        if (rawUrl === WEBSITE_MANIFEST_PATH) {
          response.statusCode = 200;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.end(
            JSON.stringify(
              { entries: discoverWebsiteEntries(rootDir) },
              null,
              2,
            ),
          );
          return;
        }

        if (!rawUrl.startsWith(`/${WEBSITE_DIR_NAME}/`)) {
          next();
          return;
        }

        const websiteDir = path.resolve(rootDir, WEBSITE_DIR_NAME);
        const decodedPath = decodeURIComponent(rawUrl.slice(1));
        const filePath = path.resolve(rootDir, decodedPath);
        const isInsideWebsiteDir =
          filePath === websiteDir || filePath.startsWith(`${websiteDir}${path.sep}`);

        if (!isInsideWebsiteDir) {
          response.statusCode = 403;
          response.end("Forbidden");
          return;
        }

        if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
          next();
          return;
        }

        response.statusCode = 200;
        response.setHeader(
          "Content-Type",
          mimeTypes[path.extname(filePath).toLowerCase()] ??
            "application/octet-stream",
        );
        fs.createReadStream(filePath).pipe(response);
      });
    },
    generateBundle() {
      const websiteDir = path.resolve(rootDir, WEBSITE_DIR_NAME);

      this.emitFile({
        type: "asset",
        fileName: "website-manifest.json",
        source: JSON.stringify(
          { entries: discoverWebsiteEntries(rootDir) },
          null,
          2,
        ),
      });

      for (const filePath of collectWebsiteFiles(websiteDir)) {
        const relativePath = path.relative(websiteDir, filePath);

        this.emitFile({
          type: "asset",
          fileName: `${WEBSITE_DIR_NAME}/${toFileName(relativePath)}`,
          source: fs.readFileSync(filePath),
        });
      }
    },
  };
}

export default defineConfig(({ command }) => ({
  base: command === "serve" ? "/" : "./",
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    websiteFolderPlugin(),
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ["**/*.svg", "**/*.csv"],
}));
