import { useEffect, useMemo, useState } from "react";
import { portfolioReelCards, portfolioSections } from "./photographyData";

const WORK_COPY: Record<
  string,
  { eyebrow: string; description: string; location: string; note: string }
> = {
  car: {
    eyebrow: "AUTOMOTIVE STUDIES",
    description:
      "Mechanical silhouettes, reflective surfaces, and disciplined light shaped like a showroom after hours.",
    location: "NIGHT DRIVE / MACHINED SURFACE / DETAIL",
    note: "Best for campaign-style hero frames and marque storytelling.",
  },
  product: {
    eyebrow: "PRODUCT STUDIES",
    description:
      "Small objects filmed and photographed with the same pressure and precision usually reserved for larger icons.",
    location: "OBJECT / SHADOW / MATERIAL",
    note: "Built for launch stills, tactile detail, and quiet luxury moments.",
  },
  furniture: {
    eyebrow: "INTERIOR OBJECTS",
    description:
      "Warm surfaces, crafted edges, and editorial composition that lets form hold the attention on its own.",
    location: "FORM / WOOD / SPATIAL RHYTHM",
    note: "Ideal for editorial spreads and spatial brand systems.",
  },
  street: {
    eyebrow: "STREET FRAMES",
    description:
      "Fast observations, ambient motion, and human texture captured without breaking the silence of the scene.",
    location: "CITY / MOVEMENT / ATMOSPHERE",
    note: "Used where the work needs urgency without losing restraint.",
  },
  wallpaper: {
    eyebrow: "WALLPAPER STUDIES",
    description:
      "Single-image mood pieces designed to hold a screen on their own, with minimal intervention from the interface.",
    location: "LANDSCAPE / TONE / MEMORY",
    note: "Made for immersive screens, covers, and atmospheric brand pauses.",
  },
};

function withBase(path: string) {
  const base = import.meta.env.BASE_URL;
  const normalized = path.replace(/^\.\//, "").replace(/^\/+/, "");
  return `${base}${normalized}`;
}

type WebsiteEntry = {
  id: string;
  title: string;
  href: string;
};

type WebsiteLoadState = "loading" | "ready" | "empty" | "error";

const WEBSITE_MANIFEST_URL = withBase("/website-manifest.json");

function parseWebsiteEntries(data: unknown): WebsiteEntry[] {
  if (!data || typeof data !== "object" || !("entries" in data)) {
    return [];
  }

  const entries = (data as { entries?: unknown }).entries;

  if (!Array.isArray(entries)) {
    return [];
  }

  return entries.filter((entry): entry is WebsiteEntry => {
    if (!entry || typeof entry !== "object") {
      return false;
    }

    const candidate = entry as Record<string, unknown>;
    return (
      typeof candidate.id === "string" &&
      typeof candidate.title === "string" &&
      typeof candidate.href === "string"
    );
  });
}

function addPreloadLink(href: string, as: "image" | "video", type?: string) {
  const selector = `link[rel="preload"][href="${href}"]`;
  const existing = document.head.querySelector<HTMLLinkElement>(selector);

  if (existing) {
    return () => undefined;
  }

  const link = document.createElement("link");
  link.rel = "preload";
  link.as = as;
  link.href = href;

  if (type) {
    link.type = type;
  }

  document.head.appendChild(link);

  return () => {
    link.remove();
  };
}

function warmImage(src: string) {
  const image = new Image();
  image.decoding = "async";
  image.src = src;
  return image;
}

function warmVideo(src: string) {
  const video = document.createElement("video");
  video.preload = "auto";
  video.muted = true;
  video.playsInline = true;
  video.src = src;
  video.load();
  return video;
}

const CINEMA_MEDIA = {
  heroVideo: withBase("/cinema-media/road-night.web.mp4"),
  heroPoster: withBase("/cinema-media/road-night-poster.png"),
  monogram: withBase("/cinema-media/monogram.png"),
  portrait: withBase("/cinema-media/portrait-car.png"),
  garage: withBase("/cinema-media/garage-monogram.png"),
  closeupVideo: withBase("/cinema-media/closeup-gaze.web.mp4"),
  closeupPoster: withBase("/cinema-media/closeup-gaze-poster.png"),
} as const;

export function CinemaPortfolioPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [websiteEntries, setWebsiteEntries] = useState<WebsiteEntry[]>([]);
  const [activeWebsiteId, setActiveWebsiteId] = useState("");
  const [websiteLoadState, setWebsiteLoadState] =
    useState<WebsiteLoadState>("loading");
  const works = useMemo(
    () =>
      portfolioSections.map((section, index) => {
        const reelCard =
          portfolioReelCards.find((card) => card.id === section.id) ??
          portfolioReelCards[index];
        const copy = WORK_COPY[section.id] ?? WORK_COPY.car;

        return {
          id: section.id,
          title: section.title,
          subtitle: section.subtitle,
          count: section.railImages.length,
          heroImage: withBase(section.heroImage),
          previewThumb: withBase(reelCard.thumb),
          railThumbs: section.railImages
            .slice(0, 3)
            .map((image) => withBase(image.thumb)),
          ...copy,
        };
      }),
    [],
  );
  const [activeWorkId, setActiveWorkId] = useState(works[0]?.id ?? "car");

  const activeWork =
    works.find((work) => work.id === activeWorkId) ?? works[0];
  const activeWebsite =
    websiteEntries.find((entry) => entry.id === activeWebsiteId) ??
    websiteEntries[0];
  const activeWebsiteSrc = activeWebsite
    ? withBase(activeWebsite.href)
    : undefined;

  useEffect(() => {
    document.documentElement.style.backgroundColor = "#000000";
    document.body.style.backgroundColor = "#000000";
    document.documentElement.style.overflow = menuOpen ? "hidden" : "";
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const controller = new AbortController();

    setWebsiteLoadState("loading");

    fetch(WEBSITE_MANIFEST_URL, {
      cache: "no-store",
      signal: controller.signal,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Unable to load website manifest.");
        }

        return response.json();
      })
      .then((data) => {
        const entries = parseWebsiteEntries(data);

        setWebsiteEntries(entries);
        setActiveWebsiteId((currentId) =>
          entries.some((entry) => entry.id === currentId)
            ? currentId
            : entries[0]?.id ?? "",
        );
        setWebsiteLoadState(entries.length > 0 ? "ready" : "empty");
      })
      .catch((error: unknown) => {
        if (error instanceof DOMException && error.name === "AbortError") {
          return;
        }

        setWebsiteEntries([]);
        setActiveWebsiteId("");
        setWebsiteLoadState("error");
      });

    return () => controller.abort();
  }, []);

  useEffect(() => {
    const revealTargets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    if (!("IntersectionObserver" in window)) {
      revealTargets.forEach((target) => target.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    revealTargets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const cleanup = [
      addPreloadLink(CINEMA_MEDIA.heroPoster, "image"),
      addPreloadLink(CINEMA_MEDIA.heroVideo, "video", "video/mp4"),
      addPreloadLink(CINEMA_MEDIA.portrait, "image"),
      addPreloadLink(CINEMA_MEDIA.closeupPoster, "image"),
      addPreloadLink(CINEMA_MEDIA.closeupVideo, "video", "video/mp4"),
      addPreloadLink(CINEMA_MEDIA.monogram, "image"),
    ];

    const warmedImages = [
      warmImage(CINEMA_MEDIA.heroPoster),
      warmImage(CINEMA_MEDIA.portrait),
      warmImage(CINEMA_MEDIA.closeupPoster),
      warmImage(CINEMA_MEDIA.monogram),
      ...works.flatMap((work) => [
        warmImage(work.heroImage),
        warmImage(work.previewThumb),
        ...work.railThumbs.map((thumb) => warmImage(thumb)),
      ]),
    ];

    const warmedVideos = [
      warmVideo(CINEMA_MEDIA.heroVideo),
      warmVideo(CINEMA_MEDIA.closeupVideo),
    ];

    return () => {
      cleanup.forEach((dispose) => dispose());
      warmedImages.forEach((image) => {
        image.src = "";
      });
      warmedVideos.forEach((video) => {
        video.pause();
        video.removeAttribute("src");
        video.load();
      });
    };
  }, [works]);

  return (
    <div className="portfolio-site">
      <header className="portfolio-header">
        <button
          type="button"
          className="portfolio-nav-link portfolio-nav-button"
          aria-expanded={menuOpen}
          aria-controls="portfolio-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          MENU
        </button>
        <a href="#hero" className="portfolio-brand-link" aria-label="Back to hero">
          <img
            src={CINEMA_MEDIA.monogram}
            alt="JZ monogram"
            className="portfolio-brand-mark"
          />
        </a>
        <a href="#contact" className="portfolio-nav-link">
          CONTACT
        </a>
      </header>

      <div
        className={`portfolio-menu-overlay ${menuOpen ? "is-open" : ""}`}
        id="portfolio-menu"
        hidden={!menuOpen}
      >
        <div className="portfolio-shell portfolio-menu-shell">
          <div className="portfolio-menu-topline">
            <span className="portfolio-eyebrow">(NAVIGATION)</span>
            <button
              type="button"
              className="portfolio-nav-link portfolio-nav-button"
              onClick={() => setMenuOpen(false)}
            >
              CLOSE
            </button>
          </div>
          <nav className="portfolio-menu-nav" aria-label="Primary">
            {[
              ["HOME", "#hero"],
              ["MANIFESTO", "#manifesto"],
              ["SELECTED WORK", "#work"],
              ["WEBSITE", "#website"],
              ["CONTACT", "#contact"],
            ].map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <main>
        <section className="portfolio-panel portfolio-hero" id="hero">
          <video
            className="portfolio-media"
            src={CINEMA_MEDIA.heroVideo}
            poster={CINEMA_MEDIA.heroPoster}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
          <div className="portfolio-vignette" />
          <div className="portfolio-shell portfolio-hero-copy">
            <p className="portfolio-eyebrow" data-reveal>
              PORTFOLIO 2026 / DIRECTION / DESIGN
            </p>
            <h1 className="portfolio-hero-title" data-reveal>
              JZ
            </h1>
            <p className="portfolio-lead" data-reveal>
              Motion-led frames, brand systems, and cinematic web experiences
              built with a quieter kind of force.
            </p>
            <div className="portfolio-action-row" data-reveal>
              <a href="#work" className="portfolio-pill-button">
                VIEW SELECTED WORK
              </a>
              <a
                href="#website"
                className="portfolio-pill-button portfolio-pill-button-muted"
              >
                VIEW WEBSITES
              </a>
            </div>
          </div>
          <div className="portfolio-shell portfolio-hero-rail" data-reveal>
            <div className="portfolio-rail-item">
              <span className="portfolio-rail-label">LOCATION</span>
              <span className="portfolio-rail-value">
                HO CHI MINH CITY / VIETNAM
              </span>
            </div>
            <div className="portfolio-rail-item">
              <span className="portfolio-rail-label">FOCUS</span>
              <span className="portfolio-rail-value">
                FILM / IDENTITY / INTERACTIVE BUILDS
              </span>
            </div>
            <div className="portfolio-rail-item">
              <span className="portfolio-rail-label">STATUS</span>
              <span className="portfolio-rail-value">
                AVAILABLE FOR SELECTED COLLABORATIONS
              </span>
            </div>
          </div>
        </section>

        <section className="portfolio-panel portfolio-statement" id="manifesto">
          <img
            className="portfolio-media"
            src={CINEMA_MEDIA.portrait}
            alt="Portrait beside a car at dusk"
            loading="eager"
            decoding="async"
            fetchpriority="high"
          />
          <div className="portfolio-vignette" />
          <div className="portfolio-shell portfolio-panel-copy">
            <p className="portfolio-eyebrow" data-reveal>
              (MANIFESTO)
            </p>
            <h2 className="portfolio-display-title" data-reveal>
              I BUILD QUIET SYSTEMS FOR LOUD FRAMES.
            </h2>
            <p className="portfolio-lead portfolio-lead-wide" data-reveal>
              The work moves between direction, visual identity, motion design,
              and interface builds. Every project starts in atmosphere first,
              then gets engineered until it feels inevitable.
            </p>
          </div>
        </section>

        <section className="portfolio-panel portfolio-work-section" id="work">
          <div className="portfolio-work-backgrounds" aria-hidden="true">
            {works.map((work) => (
              <img
                key={work.id}
                src={work.heroImage}
                alt=""
                className={`portfolio-work-background ${
                  work.id === activeWork.id ? "is-active" : ""
                }`}
                loading={work.id === activeWork.id ? "eager" : "lazy"}
                decoding="async"
                fetchpriority={work.id === activeWork.id ? "high" : "low"}
              />
            ))}
            <div className="portfolio-vignette portfolio-vignette-strong" />
          </div>

          <div className="portfolio-shell portfolio-work-shell">
            <div className="portfolio-work-copy" data-reveal>
              <p className="portfolio-eyebrow">(SELECTED WORK)</p>
              <p className="portfolio-work-kicker">{activeWork.eyebrow}</p>
              <h2 className="portfolio-display-title portfolio-display-title-work">
                {activeWork.title}
              </h2>
              <p className="portfolio-lead portfolio-work-description">
                {activeWork.description}
              </p>
              <div className="portfolio-work-meta">
                <span>{activeWork.count} FRAMES</span>
                <span>{activeWork.location}</span>
                <span>{activeWork.note}</span>
              </div>
            </div>

            <div className="portfolio-work-scroll-wrap" data-reveal>
              <div className="portfolio-work-scroll" role="list" aria-label="Photography works">
                {works.map((work) => (
                  <button
                    key={work.id}
                    type="button"
                    role="listitem"
                    className={`portfolio-work-card ${
                      work.id === activeWork.id ? "is-active" : ""
                    }`}
                    aria-pressed={work.id === activeWork.id}
                    onMouseEnter={() => setActiveWorkId(work.id)}
                    onFocus={() => setActiveWorkId(work.id)}
                    onClick={() => setActiveWorkId(work.id)}
                  >
                    <div className="portfolio-work-card-thumb">
                      <img
                        src={work.previewThumb}
                        alt=""
                        loading="eager"
                        decoding="async"
                        fetchpriority={work.id === activeWork.id ? "high" : "auto"}
                      />
                    </div>
                    <div className="portfolio-work-card-body">
                      <span className="portfolio-work-card-index">
                        {(works.indexOf(work) + 1).toString().padStart(2, "0")}
                      </span>
                      <div>
                        <p className="portfolio-work-card-title">{work.title}</p>
                        <p className="portfolio-work-card-subtitle">
                          {work.subtitle} / {work.count} IMAGES
                        </p>
                      </div>
                    </div>
                    <div className="portfolio-work-card-rail">
                      {work.railThumbs.map((thumb) => (
                        <img
                          key={thumb}
                          src={thumb}
                          alt=""
                          loading="lazy"
                          decoding="async"
                        />
                      ))}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="portfolio-panel portfolio-chapter">
          <video
            className="portfolio-media"
            src={CINEMA_MEDIA.closeupVideo}
            poster={CINEMA_MEDIA.closeupPoster}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
          <div className="portfolio-vignette" />
          <div className="portfolio-shell portfolio-panel-copy portfolio-panel-copy-right">
            <p className="portfolio-eyebrow" data-reveal>
              (FILM STUDY)
            </p>
            <h2 className="portfolio-section-title" data-reveal>
              CLOSE RANGE / HUMAN CURRENT
            </h2>
            <p className="portfolio-lead portfolio-lead-wide" data-reveal>
              Slow camera language, restrained light, and intimate framing for
              stories that need pressure without spectacle.
            </p>
          </div>
        </section>

        <section className="portfolio-panel portfolio-website" id="website">
          <span id="studio" className="portfolio-anchor-legacy" aria-hidden="true" />
          <div className="portfolio-shell portfolio-website-layout">
            <div className="portfolio-website-frame" data-reveal>
              {activeWebsite && activeWebsiteSrc ? (
                <iframe
                  key={activeWebsite.id}
                  src={activeWebsiteSrc}
                  title={`${activeWebsite.title} website preview`}
                  loading="eager"
                  sandbox="allow-forms allow-modals allow-pointer-lock allow-popups allow-presentation allow-same-origin allow-scripts"
                />
              ) : (
                <div className="portfolio-website-empty">
                  <span>
                    {websiteLoadState === "loading"
                      ? "SCANNING WEBSITE FOLDER"
                      : websiteLoadState === "error"
                        ? "WEBSITE PREVIEW UNAVAILABLE"
                        : "NO WEBSITE BUILDS FOUND"}
                  </span>
                </div>
              )}
            </div>
            <div className="portfolio-website-copy">
              <p className="portfolio-eyebrow" data-reveal>
                (WEBSITE)
              </p>
              <h2 className="portfolio-display-title portfolio-display-title-compact" data-reveal>
                INTERACTIVE BUILDS / LIVE IN FRAME.
              </h2>
              <p className="portfolio-lead portfolio-lead-wide" data-reveal>
                Websites dropped into the project become embedded previews
                here, keeping the portfolio ready for experiments, launches,
                and client-facing interactive work.
              </p>
              <div className="portfolio-spec-list" data-reveal>
                <div className="portfolio-spec-row">
                  <span className="portfolio-spec-label">SOURCE</span>
                  <span className="portfolio-spec-value">
                    /Website
                  </span>
                </div>
                <div className="portfolio-spec-row">
                  <span className="portfolio-spec-label">FORMAT</span>
                  <span className="portfolio-spec-value">
                    FOLDER WITH INDEX.HTML
                  </span>
                </div>
                <div className="portfolio-spec-row">
                  <span className="portfolio-spec-label">STATUS</span>
                  <span className="portfolio-spec-value">
                    {websiteLoadState === "ready" && activeWebsite
                      ? activeWebsite.title
                      : websiteLoadState === "loading"
                        ? "SCANNING LOCAL BUILDS"
                        : websiteLoadState === "error"
                          ? "MANIFEST NOT FOUND"
                          : "WAITING FOR FIRST WEBSITE"}
                  </span>
                </div>
              </div>
              {websiteEntries.length > 1 ? (
                <div className="portfolio-website-switcher" data-reveal>
                  {websiteEntries.map((entry, index) => (
                    <button
                      key={entry.id}
                      type="button"
                      className={`portfolio-website-tab ${
                        entry.id === activeWebsite?.id ? "is-active" : ""
                      }`}
                      aria-pressed={entry.id === activeWebsite?.id}
                      onClick={() => setActiveWebsiteId(entry.id)}
                    >
                      <span>{(index + 1).toString().padStart(2, "0")}</span>
                      {entry.title}
                    </button>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </section>

        <section className="portfolio-panel portfolio-contact" id="contact">
          <div className="portfolio-contact-mark" aria-hidden="true">
            <img
              src={CINEMA_MEDIA.monogram}
              alt=""
              loading="eager"
              decoding="async"
            />
          </div>
          <div className="portfolio-shell portfolio-panel-copy portfolio-contact-copy">
            <p className="portfolio-eyebrow" data-reveal>
              (CONTACT)
            </p>
            <h2 className="portfolio-display-title portfolio-display-title-contact" data-reveal>
              LET&apos;S BUILD
            </h2>
            <p className="portfolio-lead portfolio-lead-wide" data-reveal>
              For selected collaborations in film, identity, and interactive
              presentation systems.
            </p>
            <div className="portfolio-action-row" data-reveal>
              <a
                href="mailto:hello@jz-portfolio.com"
                className="portfolio-pill-button"
              >
                EMAIL JZ
              </a>
              <a
                href="#hero"
                className="portfolio-pill-button portfolio-pill-button-muted"
              >
                RETURN TO START
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="portfolio-footer portfolio-shell">
        <span className="portfolio-nav-link">
          JZ PORTFOLIO / {new Date().getFullYear()}
        </span>
        <div className="portfolio-footer-links">
          <a href="#manifesto" className="portfolio-nav-link">
            MANIFESTO
          </a>
          <a href="#work" className="portfolio-nav-link">
            WORK
          </a>
          <a href="#website" className="portfolio-nav-link">
            WEBSITE
          </a>
          <a href="#contact" className="portfolio-nav-link">
            CONTACT
          </a>
        </div>
      </footer>
    </div>
  );
}
