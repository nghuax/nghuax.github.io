import { useEffect, useRef, useState, type SyntheticEvent } from "react";
import { useLocation } from "react-router";
import {
  brandAssets,
  portfolioReelCards,
  portfolioSections,
  type PortfolioRailImage,
} from "./portfolioData";

function WarehouseScene() {
  const sceneRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoReady, setVideoReady] = useState(false);
  const [videoInView, setVideoInView] = useState(true);

  useEffect(() => {
    const scene = sceneRef.current;

    if (!scene) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVideoInView(entry.isIntersecting && entry.intersectionRatio > 0.08);
      },
      {
        threshold: [0, 0.08, 0.2, 0.5],
      },
    );

    observer.observe(scene);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    if (!videoInView) {
      video.pause();
      return;
    }

    const playPromise = video.play();

    if (playPromise) {
      playPromise.catch(() => undefined);
    }
  }, [videoInView, videoReady]);

  return (
    <div ref={sceneRef} className="absolute inset-0 overflow-hidden">
      <img
        src={brandAssets.heroBackground}
        alt=""
        className={`portfolio-video-layer absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
          videoReady ? "opacity-0" : "opacity-100"
        }`}
        fetchpriority="high"
      />
      <video
        autoPlay
        className={`portfolio-video-layer absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
          videoReady ? "opacity-[0.78]" : "opacity-0"
        }`}
        defaultMuted
        disablePictureInPicture
        loop
        muted
        onCanPlay={() => setVideoReady(true)}
        playsInline
        poster={brandAssets.heroBackground}
        preload="auto"
        ref={videoRef}
      >
        <source src={brandAssets.heroVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,4,5,0.34)_0%,rgba(4,4,5,0.16)_20%,rgba(4,4,5,0.18)_42%,rgba(4,4,5,0.34)_62%,rgba(4,4,5,0.74)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_8%,rgba(255,255,255,0.05),transparent_24%),radial-gradient(circle_at_50%_50%,transparent_48%,rgba(0,0,0,0.14)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-[25%] bg-[linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.18)_18%,rgba(0,0,0,0.72)_100%)]" />
      <div className="absolute left-[22%] top-[18%] hidden h-[4px] w-[12%] rounded-full bg-white/90 shadow-[0_0_26px_rgba(255,255,255,0.82)] lg:block" />
      <div className="absolute right-[4%] top-[8.5%] hidden h-[4px] w-[14%] rounded-full bg-white/95 shadow-[0_0_28px_rgba(255,255,255,0.88)] lg:block" />
      <div className="absolute right-[26%] top-[34%] hidden h-[3px] w-[10%] rounded-full bg-white/40 shadow-[0_0_18px_rgba(255,255,255,0.22)] lg:block" />
    </div>
  );
}

function ProjectReel({
  activeId,
  onSelect,
}: {
  activeId: string;
  onSelect: (sectionId: string) => void;
}) {
  return (
    <div className="portfolio-surface-panel relative mx-auto w-[calc(100%-2.5rem)] max-w-[1380px] overflow-hidden rounded-[16px] border border-white/6 bg-[rgba(8,8,9,0.72)] px-5 py-3 shadow-[inset_0_4px_23px_-44px_rgba(0,0,0,0.38),0_20px_60px_rgba(0,0,0,0.28)]">
      <img
        src={brandAssets.reelSurface}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-95"
        decoding="async"
      />
      <div className="absolute inset-0 bg-black/18" />
      <div className="portfolio-no-scrollbar relative flex snap-x snap-mandatory gap-3 overflow-x-auto py-0.5 lg:gap-4">
        {portfolioReelCards.map((card) => (
          <button
            key={card.id}
            type="button"
            onClick={() => onSelect(card.id)}
            aria-pressed={activeId === card.id}
            className={`portfolio-hover-interactive group relative flex min-w-[210px] snap-start items-center gap-3 rounded-[12px] border px-2.5 py-2 text-left whitespace-nowrap transition-[background-color,border-color,opacity,transform] duration-300 lg:min-w-[214px] ${
              activeId === card.id
                ? "border-white/16 bg-white/[0.09] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
                : "border-transparent bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.06]"
            }`}
          >
            <span
              aria-hidden="true"
              className={`absolute inset-y-[8px] left-0 w-px transition-opacity duration-300 ${
                activeId === card.id ? "bg-white/80 opacity-100" : "bg-white/0 opacity-0"
              }`}
            />
            <img
              src={card.thumb}
              alt=""
              className="portfolio-hover-zoom-media h-[50px] w-[90px] shrink-0 rounded-[3px] object-cover"
              decoding="async"
              loading="lazy"
            />
            <div className="min-w-0 flex-1 pt-[1px]">
              <p className="font-['Lato',sans-serif] text-[12px] font-[700] tracking-[0.6px] text-[#f0f0f0]">
                {card.title}
              </p>
              <p className="mt-[2px] font-['Lato',sans-serif] text-[11px] font-[400] leading-[14px] text-[rgba(209,209,209,0.82)]">
                {card.subtitle}
              </p>
            </div>
            <span
              aria-hidden="true"
              className={`font-['Lato',sans-serif] text-[11px] font-[700] uppercase tracking-[1.8px] transition-[transform,opacity] duration-300 ${
                activeId === card.id
                  ? "translate-x-0 text-white/82 opacity-100"
                  : "translate-x-[-2px] text-white/36 opacity-70 group-hover:translate-x-0 group-hover:opacity-100"
              }`}
            >
              View
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

const thumbnailScribbleVariants = [
  [
    "M15 17C29 8 72 9 85 18C92 34 91 95 84 109C68 119 32 119 17 109C9 94 8 34 15 17Z",
    "M10 22C23 7 78 8 91 20C96 39 95 91 87 106C74 121 24 121 10 107C4 88 4 38 10 22Z",
    "M11 26C13 18 17 14 26 11",
  ],
  [
    "M18 14C37 8 73 10 84 21C89 37 89 94 81 107C66 118 31 117 18 108C11 92 11 31 18 14Z",
    "M12 18C24 5 77 7 90 18C97 34 95 93 86 108C72 122 26 121 12 110C5 93 4 34 12 18Z",
    "M76 12C84 13 90 15 94 20",
  ],
  [
    "M16 19C28 10 70 8 83 16C92 29 92 95 83 110C69 118 31 120 16 111C8 97 8 34 16 19Z",
    "M9 20C21 9 79 6 91 18C97 36 96 91 87 107C74 123 23 122 10 108C4 89 4 38 9 20Z",
    "M83 108C88 102 92 96 93 88",
  ],
] as const;

function ThumbnailScribble({
  active,
  variant,
}: {
  active: boolean;
  variant: number;
}) {
  const [primaryPath, secondaryPath, accentPath] =
    thumbnailScribbleVariants[variant % thumbnailScribbleVariants.length];

  return (
    <svg
      viewBox="0 0 100 126"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={`portfolio-selection-scribble-svg pointer-events-none absolute inset-0 z-10 h-full w-full ${
        active ? "portfolio-selection-scribble-svg--active" : ""
      }`}
    >
      <path
        className="portfolio-selection-scribble-path"
        d={primaryPath}
      />
      <path
        className="portfolio-selection-scribble-path portfolio-selection-scribble-path--alt"
        d={secondaryPath}
      />
      <path
        className="portfolio-selection-scribble-path portfolio-selection-scribble-path--accent"
        d={accentPath}
      />
    </svg>
  );
}

function PortfolioSection({
  title,
  subtitle,
  heroImage,
  railImages,
  id,
}: {
  title: string;
  subtitle: string;
  heroImage: string;
  railImages: readonly PortfolioRailImage[];
  id: string;
}) {
  const [activeImage, setActiveImage] = useState(heroImage);
  const [activeImageIsLandscape, setActiveImageIsLandscape] = useState<boolean | null>(null);

  useEffect(() => {
    setActiveImageIsLandscape(null);
  }, [activeImage]);

  const handleHeroImageLoad = (event: SyntheticEvent<HTMLImageElement>) => {
    const { naturalWidth, naturalHeight } = event.currentTarget;
    setActiveImageIsLandscape(naturalWidth > naturalHeight);
  };

  return (
    <section
      id={id}
      className="portfolio-section-block relative scroll-mt-0 overflow-hidden bg-black px-5 py-14 sm:px-8 lg:min-h-[900px] lg:px-[34px] lg:py-[26px]"
    >
      <div className="mx-auto flex w-full max-w-[1290px] flex-col gap-8 lg:grid lg:grid-cols-[897px_305px] lg:gap-[88px]">
        <div className="relative lg:min-h-[813px]">
          <div className="mb-5 lg:absolute lg:left-[34px] lg:top-1/2 lg:z-10 lg:mb-0 lg:-translate-y-1/2">
            <h2 className="font-['Lato',sans-serif] text-[38px] font-[700] tracking-[0.6px] text-[#f0f0f0] sm:text-[44px] lg:text-[48px]">
              {title}
            </h2>
            <p className="font-['Lato',sans-serif] text-[14px] font-[400] leading-[14px] text-[rgba(209,209,209,0.82)]">
              {subtitle}
            </p>
          </div>

          <div
            className="portfolio-hero-frame portfolio-hover-object relative mx-auto aspect-[650/813] w-full max-w-[650px] overflow-hidden bg-[#090b10] shadow-[0_30px_120px_rgba(0,0,0,0.38)] lg:absolute lg:right-0 lg:top-0 lg:mx-0 lg:h-[813px] lg:w-[897px] lg:max-w-none"
          >
            <div
              key={activeImage}
              className={`portfolio-hero-stage absolute inset-y-0 right-0 ${
                activeImageIsLandscape ? "left-0" : "left-0 lg:w-[650px]"
              }`}
            >
              <img
                src={activeImage}
                alt={title}
                onLoad={handleHeroImageLoad}
                className={`portfolio-hover-zoom-media h-full w-full transition-[transform,opacity] duration-500 ${
                  activeImageIsLandscape ? "object-contain object-right" : "object-cover"
                }`}
                decoding="async"
              />
            </div>
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02)_0%,rgba(0,0,0,0.12)_100%)]" />
          </div>
        </div>

        <div className="portfolio-scroll-rail flex gap-4 overflow-x-auto lg:h-[813px] lg:-translate-y-[66px] lg:flex-col lg:gap-[14px] lg:overflow-x-hidden lg:overflow-y-auto lg:pr-2">
          {railImages.map((image, index) => (
            <button
              key={`${id}-${index}`}
              type="button"
              onClick={() => setActiveImage(image.full)}
              aria-pressed={activeImage === image.full}
              className={`portfolio-thumbnail portfolio-hover-object group relative aspect-[305/382] min-w-[180px] cursor-pointer overflow-hidden bg-[#090b10] shadow-[inset_0_4px_18.3px_rgba(0,0,0,0.67)] transition-[opacity,transform] duration-300 lg:h-[calc((813px-28px)/3)] lg:min-h-[calc((813px-28px)/3)] lg:w-[305px] lg:min-w-0 ${
                activeImage === image.full
                  ? "opacity-100 shadow-[0_20px_44px_rgba(0,0,0,0.42),inset_0_4px_18.3px_rgba(0,0,0,0.67)]"
                  : "opacity-80 hover:opacity-100"
              }`}
              aria-label={`Show ${title} image ${index + 1} in hero view`}
            >
              <img
                src={image.thumb}
                alt=""
                className="portfolio-hover-zoom-media h-full w-full object-cover"
                decoding="async"
                loading="lazy"
              />
              <ThumbnailScribble
                active={activeImage === image.full}
                variant={index}
              />
              <div className="absolute inset-0 shadow-[inset_0_4px_18.3px_rgba(0,0,0,0.67)]" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  const location = useLocation();
  const [activeReelId, setActiveReelId] = useState(portfolioSections[0]?.id ?? "");

  useEffect(() => {
    const visibleSections = new Map<string, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visibleSections.set(
            (entry.target as HTMLElement).id,
            entry.isIntersecting ? entry.intersectionRatio : 0,
          );
        }

        const mostVisible = portfolioSections
          .map((section) => ({
            id: section.id,
            ratio: visibleSections.get(section.id) ?? 0,
          }))
          .sort((left, right) => right.ratio - left.ratio)[0];

        if (mostVisible && mostVisible.ratio > 0.1) {
          setActiveReelId((current) =>
            current === mostVisible.id ? current : mostVisible.id,
          );
        }
      },
      {
        threshold: [0.1, 0.2, 0.35, 0.5, 0.7],
        rootMargin: "-18% 0px -34% 0px",
      },
    );

    for (const section of portfolioSections) {
      const element = document.getElementById(section.id);

      if (element) {
        visibleSections.set(section.id, 0);
        observer.observe(element);
      }
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sectionId = new URLSearchParams(location.search).get("section");

    if (!sectionId) {
      return;
    }

    const timer = window.setTimeout(() => {
      setActiveReelId(sectionId);
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 140);

    return () => window.clearTimeout(timer);
  }, [location.search]);

  const handleReelSelect = (sectionId: string) => {
    setActiveReelId(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="bg-black pb-[128px] text-white lg:pb-[152px]">
      <section className="relative min-h-[760px] overflow-hidden pt-[108px] lg:h-[911px] lg:min-h-[911px]">
        <WarehouseScene />

        <div className="absolute left-1/2 top-[108px] z-10 -translate-x-1/2 text-center">
          <p className="font-['Lato',sans-serif] text-[18px] font-[400] leading-[28px] text-[#d1d1d1]">
            JZ&apos;s
          </p>
          <p className="mt-2 font-['Lato',sans-serif] text-[16px] font-[700] tracking-[2.2px] text-[#f0f0f0]">
            COLLECTION
          </p>
        </div>

        <div className="absolute inset-x-0 top-[713px] hidden h-px bg-[rgba(82,82,87,0.75)] lg:block" />
        <div className="absolute inset-x-0 top-[812px] hidden h-px bg-[rgba(82,82,87,0.75)] lg:block" />

      </section>

      <div className="pointer-events-none fixed inset-x-0 bottom-4 z-40 px-4 sm:bottom-5 sm:px-6 lg:bottom-6 lg:px-0">
        <div className="pointer-events-auto mx-auto w-full max-w-[1440px]">
          <ProjectReel activeId={activeReelId} onSelect={handleReelSelect} />
        </div>
      </div>

      {portfolioSections.map((section) => (
        <PortfolioSection key={section.id} {...section} />
      ))}
    </div>
  );
}
