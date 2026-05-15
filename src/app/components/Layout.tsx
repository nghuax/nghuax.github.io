import { useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router";
import { brandAssets, portfolioSections } from "./portfolioData";

const topLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
];

export function PortfolioLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const siteRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.search]);

  useEffect(() => {
    if (location.search) {
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname, location.search]);

  useEffect(() => {
    if (!menuOpen) {
      return undefined;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  useEffect(() => {
    const site = siteRef.current;

    if (!site) {
      return;
    }

    let scrollTimer: number | null = null;

    const markScrolling = () => {
      site.classList.add("is-scrolling");

      if (scrollTimer !== null) {
        window.clearTimeout(scrollTimer);
      }

      scrollTimer = window.setTimeout(() => {
        site.classList.remove("is-scrolling");
      }, 140);
    };

    window.addEventListener("scroll", markScrolling, { passive: true });
    window.addEventListener("wheel", markScrolling, { passive: true });
    window.addEventListener("touchmove", markScrolling, { passive: true });

    return () => {
      if (scrollTimer !== null) {
        window.clearTimeout(scrollTimer);
      }

      site.classList.remove("is-scrolling");
      window.removeEventListener("scroll", markScrolling);
      window.removeEventListener("wheel", markScrolling);
      window.removeEventListener("touchmove", markScrolling);
    };
  }, []);

  const goToSection = (sectionId: string) => {
    if (location.pathname === "/") {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false);
      return;
    }

    navigate({ pathname: "/", search: `?section=${sectionId}` });
  };

  return (
    <div ref={siteRef} className="portfolio-site relative min-h-screen bg-black text-white">
      <header
        className={`pointer-events-none z-50 ${
          isHomePage ? "fixed inset-x-0 top-0" : "relative"
        }`}
      >
        <div className="pointer-events-auto mx-auto flex h-[81px] w-full max-w-[1440px] items-center justify-between px-5 sm:px-7 lg:px-[28px]">
          <Link
            to="/"
            className="portfolio-hover-interactive font-['Lato',sans-serif] text-[28px] font-[700] tracking-[-1px] text-[#f0f0f0] no-underline"
            aria-label="Go to homepage"
          >
            #
          </Link>

          <Link
            to="/"
            className="portfolio-hover-interactive absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            aria-label="JZ logo"
          >
            <img
              src={brandAssets.logoLight}
              alt=""
              className="h-[54px] w-[82px] object-contain sm:h-[58px] sm:w-[86px] lg:h-[60px] lg:w-[90px]"
            />
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            className="portfolio-hover-interactive inline-flex cursor-pointer font-['Lato',sans-serif] text-[18px] font-[400] tracking-[0.5px] text-[#d1d1d1] sm:text-[20px] lg:text-[22px]"
            aria-expanded={menuOpen}
            aria-controls="portfolio-menu"
          >
            + MENU
          </button>
        </div>
      </header>

      <div
        id="portfolio-menu"
        className={`fixed inset-0 z-40 transition-[opacity,visibility] duration-300 ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/92 backdrop-blur-md"
          onClick={() => setMenuOpen(false)}
        />

        <div className="relative mx-auto flex min-h-screen w-full max-w-[1440px] flex-col justify-between px-5 pb-10 pt-[112px] sm:px-8 lg:px-[48px]">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <p className="font-['Lato',sans-serif] text-[13px] font-[400] uppercase tracking-[3.4px] text-white/48">
                Pages
              </p>
              <div className="mt-6 flex flex-col gap-5">
                {topLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="portfolio-hover-interactive inline-flex w-fit font-['Lato',sans-serif] text-[44px] font-[700] tracking-[0.6px] text-white no-underline sm:text-[56px]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="font-['Lato',sans-serif] text-[13px] font-[400] uppercase tracking-[3.4px] text-white/48">
                Projects
              </p>
              <div className="mt-6 grid gap-3">
                {portfolioSections.map((section) => (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => goToSection(section.id)}
                    className="portfolio-hover-interactive flex cursor-pointer items-center justify-between border-b border-white/10 pb-3 text-left"
                  >
                    <span className="font-['Lato',sans-serif] text-[24px] font-[700] tracking-[0.4px] text-white sm:text-[28px]">
                      {section.title}
                    </span>
                    <span className="font-['Lato',sans-serif] text-[14px] font-[400] text-white/54">
                      {section.subtitle}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-[420px] font-['Lato',sans-serif] text-[14px] font-[400] leading-[1.5] text-white/58">
              A minimal portfolio inspired directly by the Figma composition, built as a
              responsive React site.
            </p>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="portfolio-hover-interactive inline-flex cursor-pointer self-start font-['Lato',sans-serif] text-[14px] font-[700] uppercase tracking-[2.4px] text-white"
            >
              Close
            </button>
          </div>
        </div>
      </div>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
