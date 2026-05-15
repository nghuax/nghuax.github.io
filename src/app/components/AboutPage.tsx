import { InstagramProfileEmbed } from "./InstagramProfileEmbed";
import { brandAssets } from "./portfolioData";

export default function AboutPage() {
  return (
    <section className="relative -mt-[81px] min-h-screen overflow-hidden bg-black text-white">
      <img
        src={brandAssets.aboutBackground}
        alt=""
        className="absolute inset-0 h-full w-full object-cover scale-[1.02]"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_18%,rgba(255,255,255,0.12),transparent_28%),linear-gradient(180deg,rgba(0,0,0,0.26)_0%,rgba(0,0,0,0.44)_52%,rgba(0,0,0,0.7)_100%)]" />

      <div className="relative flex min-h-screen flex-col px-5 pb-5 pt-[116px] sm:px-8 lg:px-0 lg:pb-[18px] lg:pt-[122px]">
        <div className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col">
          <p className="text-center font-['Lato',sans-serif] text-[12px] font-[400] uppercase tracking-[5px] text-white/58">
            Photographer / Designer
          </p>
          <h1 className="mt-3 text-center font-['Lato',sans-serif] text-[54px] font-[900] tracking-[0.5px] text-white sm:text-[64px] lg:text-[58px]">
            ABOUT ME
          </h1>

          <div className="mt-10 grid flex-1 items-start gap-8 lg:mt-[86px] lg:grid-cols-[minmax(240px,300px)_minmax(0,980px)] lg:gap-10">
            <div className="flex flex-col gap-5 self-start lg:pl-[74px]">
              <div className="max-w-[280px] rounded-[26px] border border-white/10 bg-[rgba(255,255,255,0.05)] px-6 py-5 shadow-[0_20px_55px_rgba(0,0,0,0.22)] backdrop-blur-md">
                <p className="font-['Lato',sans-serif] text-[12px] font-[400] uppercase tracking-[4px] text-white/54">
                  Focus
                </p>
                <p className="mt-3 font-['Lato',sans-serif] text-[22px] font-[700] leading-[1.15] tracking-[0.3px] text-white">
                  Cinematic cars, clean objects, and crafted digital experiences.
                </p>
              </div>

              <div className="max-w-[280px] rounded-[26px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.03)_100%)] px-6 py-5 shadow-[0_20px_55px_rgba(0,0,0,0.22)] backdrop-blur-md">
                <p className="font-['Lato',sans-serif] text-[12px] font-[400] uppercase tracking-[4px] text-white/54">
                  Visual Diary
                </p>
                <p className="mt-3 font-['Lato',sans-serif] text-[16px] font-[400] leading-[1.55] tracking-[0.2px] text-white/88">
                  A closer look at behind-the-scenes frames, experiments, and everyday
                  visuals that shape the work.
                </p>
              </div>
            </div>

            <div className="w-full justify-self-center lg:justify-self-start lg:pr-[74px]">
              <div className="rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.03)_100%)] px-6 py-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:px-8 sm:py-8 lg:px-9 lg:py-9">
                <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_minmax(380px,460px)] xl:items-start">
                  <div>
                    <p className="font-['Lato',sans-serif] text-[12px] font-[400] uppercase tracking-[4px] text-white/58">
                      Personal Note
                    </p>
                    <p className="mt-5 max-w-[620px] text-left font-['Lato',sans-serif] text-[16px] font-[400] leading-[1.58] tracking-[0.25px] text-white/92 sm:text-[17px] lg:text-[16px]">
                      I&apos;m passionate about photography, cars, and web design. I
                      especially love Mercedes-Benz for its style and character. I also
                      enjoy making websites and creating clean, engaging digital
                      experiences.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2.5">
                      <span className="rounded-full border border-white/12 bg-white/6 px-4 py-2 font-['Lato',sans-serif] text-[12px] font-[700] uppercase tracking-[2px] text-white/82">
                        Photography
                      </span>
                      <span className="rounded-full border border-white/12 bg-white/6 px-4 py-2 font-['Lato',sans-serif] text-[12px] font-[700] uppercase tracking-[2px] text-white/82">
                        Cars
                      </span>
                      <span className="rounded-full border border-white/12 bg-white/6 px-4 py-2 font-['Lato',sans-serif] text-[12px] font-[700] uppercase tracking-[2px] text-white/82">
                        Web Design
                      </span>
                    </div>

                    <div className="mt-7 flex flex-col gap-4 rounded-[28px] border border-white/10 bg-[rgba(6,6,8,0.32)] px-5 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:px-6 lg:max-w-[620px]">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#ffcf70_0%,#f56040_32%,#c13584_66%,#5851db_100%)] shadow-[0_12px_24px_rgba(193,53,132,0.28)]">
                          <svg
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            className="h-5 w-5 fill-none stroke-white"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                            <circle cx="12" cy="12" r="4" />
                            <circle cx="17.4" cy="6.6" r="0.8" fill="white" stroke="none" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-['Lato',sans-serif] text-[12px] font-[400] uppercase tracking-[3.8px] text-white/48">
                            Instagram
                          </p>
                          <p className="mt-1 font-['Lato',sans-serif] text-[22px] font-[700] tracking-[0.2px] text-white">
                            @nghuax
                          </p>
                        </div>
                      </div>

                      <p className="max-w-[410px] font-['Lato',sans-serif] text-[14px] font-[400] leading-[1.6] tracking-[0.18px] text-white/72">
                        Embedded directly into the page as a live profile touchpoint, so
                        visitors can move from the portfolio into the wider visual world.
                      </p>

                      <a
                        href="https://www.instagram.com/nghuax/"
                        target="_blank"
                        rel="noreferrer"
                        className="portfolio-hover-interactive inline-flex w-fit items-center gap-2 rounded-full border border-white/12 bg-white/6 px-5 py-3 font-['Lato',sans-serif] text-[12px] font-[700] uppercase tracking-[2.4px] text-white no-underline"
                      >
                        Visit Instagram
                        <span aria-hidden="true" className="text-[14px]">
                          /
                        </span>
                        nghuax
                      </a>
                    </div>
                  </div>

                  <div className="portfolio-instagram-panel overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(7,7,9,0.94)_0%,rgba(12,12,14,0.82)_100%)] p-3 shadow-[0_24px_80px_rgba(0,0,0,0.3)]">
                    <div className="mb-3 flex items-center justify-between gap-4 rounded-[20px] border border-white/8 bg-white/[0.03] px-4 py-3">
                      <div>
                        <p className="font-['Lato',sans-serif] text-[11px] font-[400] uppercase tracking-[3.4px] text-white/46">
                          Dark Embed
                        </p>
                        <p className="mt-1 font-['Lato',sans-serif] text-[16px] font-[700] tracking-[0.2px] text-white">
                          Instagram Profile
                        </p>
                      </div>

                      <a
                        href="https://www.instagram.com/nghuax/"
                        target="_blank"
                        rel="noreferrer"
                        className="portfolio-hover-interactive inline-flex shrink-0 items-center rounded-full border border-white/10 px-3 py-2 font-['Lato',sans-serif] text-[11px] font-[700] uppercase tracking-[2.2px] text-white/82 no-underline"
                      >
                        Open
                      </a>
                    </div>

                    <InstagramProfileEmbed
                      handle="nghuax"
                      url="https://www.instagram.com/nghuax/"
                      theme="dark"
                    />

                    <p className="mt-3 px-1 font-['Lato',sans-serif] text-[12px] font-[400] leading-[1.5] tracking-[0.18px] text-white/48">
                      If Instagram blocks the preview on your browser, the direct profile
                      link above still takes visitors to the account.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-auto text-center font-['Lato',sans-serif] text-[14px] font-[400] tracking-[0.5px] text-white/82">
            Jz N, 2026
          </p>
        </div>
      </div>
    </section>
  );
}
