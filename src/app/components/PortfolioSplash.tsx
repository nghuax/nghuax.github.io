import { useEffect, useRef, type SyntheticEvent } from "react";
import { brandAssets } from "./portfolioData";

export function PortfolioSplash({
  visible,
  onFinish,
}: {
  visible: boolean;
  onFinish: () => void;
}) {
  const finishedRef = useRef(false);
  const timeoutRef = useRef<number | null>(null);

  const clearFinishTimer = () => {
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const scheduleFinish = (delayMs: number) => {
    clearFinishTimer();
    timeoutRef.current = window.setTimeout(() => {
      if (!finishedRef.current) {
        finishedRef.current = true;
        onFinish();
      }
    }, delayMs);
  };

  useEffect(() => {
    if (!visible) {
      finishedRef.current = false;
      clearFinishTimer();
      return;
    }

    scheduleFinish(5200);

    return clearFinishTimer;
  }, [onFinish, visible]);

  const finish = () => {
    clearFinishTimer();

    if (finishedRef.current) {
      return;
    }

    finishedRef.current = true;
    onFinish();
  };

  const handleLoadedMetadata = (event: SyntheticEvent<HTMLVideoElement>) => {
    const duration = event.currentTarget.duration;

    if (Number.isFinite(duration) && duration > 0) {
      scheduleFinish(Math.round(duration * 1000) + 180);
    }
  };

  return (
    <div
      className={`fixed inset-0 z-[80] overflow-hidden bg-black transition-opacity duration-700 ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      aria-hidden={!visible}
    >
      <video
        autoPlay
        className="portfolio-video-layer absolute inset-0 h-full w-full object-cover"
        defaultMuted
        muted
        onEnded={finish}
        onLoadedMetadata={handleLoadedMetadata}
        playsInline
        preload="auto"
      >
        <source src={brandAssets.loadingVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.14)_45%,rgba(0,0,0,0.52)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-[18%] bg-[linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.82)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[16%] bg-[linear-gradient(180deg,rgba(0,0,0,0.72)_0%,transparent_100%)]" />
      <div className="absolute inset-x-0 bottom-[7.5%] flex flex-col items-center gap-3 text-center">
        <p
          className={`font-['Lato',sans-serif] text-[13px] font-[400] uppercase tracking-[4.6px] text-white/62 transition-[opacity,transform] duration-700 ${
            visible ? "portfolio-splash-mark" : "translate-y-2 opacity-0"
          }`}
        >
          JZ Portfolio
        </p>
        <img
          src={brandAssets.logoLight}
          alt=""
          className={`h-[44px] w-[66px] object-contain transition-[opacity,transform] duration-700 ${
            visible ? "portfolio-splash-mark" : "translate-y-2 opacity-0"
          }`}
        />
      </div>
    </div>
  );
}
