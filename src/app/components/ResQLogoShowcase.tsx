import svgPaths from "../../imports/TrangChủ/svg-t7f5kuudxj";

const mono = "font-['IBM_Plex_Mono',monospace]";

const brandStats = [
  { label: "Phản hồi", value: "15-30 phút" },
  { label: "Hỗ trợ", value: "24/7" },
  { label: "Phạm vi", value: "Toàn quốc" },
];

export function ResQLogoShowcase({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative overflow-hidden rounded-[20px] border border-[rgba(4,38,153,0.08)] bg-[#f7f7f8] shadow-[0_20px_70px_rgba(8,11,13,0.08)] ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(238,50,36,0.16),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(8,11,13,0.08),transparent_38%)]" />

      <div className="relative flex h-full flex-col justify-between gap-6 p-6 sm:p-8 lg:p-10">
        <div className="inline-flex w-fit items-center rounded-full border border-[rgba(238,50,36,0.12)] bg-white/80 px-3 py-1.5 shadow-[0_10px_20px_rgba(8,11,13,0.04)] backdrop-blur-[12px]">
          <span className={`${mono} text-[11px] uppercase tracking-[0.18em] text-[#ee3224]`}>
            Nhận diện ResQ
          </span>
        </div>

        <div className="flex flex-1 flex-col justify-center gap-6 sm:flex-row sm:items-center sm:gap-8">
          <div className="flex size-[120px] shrink-0 items-center justify-center rounded-[30px] bg-white shadow-[0_18px_40px_rgba(8,11,13,0.08)]">
            <svg width="74" height="82" viewBox="0 0 44 49" fill="none" aria-hidden="true">
              <g clipPath="url(#clip_logo_showcase)">
                <path d={svgPaths.p2a278200} fill="#ffffff" />
                <path d={svgPaths.p34022a00} fill="#EE3224" />
                <path d={svgPaths.p29152900} fill="#EE3224" />
                <path d={svgPaths.p3d87be00} stroke="#ffffff" strokeMiterlimit="10" />
                <path d={svgPaths.p16ffe600} fill="#F8F8F9" />
              </g>
              <defs>
                <clipPath id="clip_logo_showcase">
                  <rect width="44" height="49" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>

          <div className="min-w-0">
            <p className="font-['Syne',sans-serif] text-[44px] leading-none font-[800] text-[#ee3224] sm:text-[56px]">
              ResQ
            </p>
            <p className={`${mono} mt-3 max-w-[360px] text-[13px] leading-[22px] text-[#4a5565] sm:text-[14px] sm:leading-[24px]`}>
              Xe của bạn, việc của chúng tôi. Hệ thống cứu hộ được thiết kế để
              phản hồi nhanh, rõ ràng và đáng tin cậy trên mọi hành trình.
            </p>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {brandStats.map((item) => (
            <div
              key={item.label}
              className="rounded-[16px] border border-white/70 bg-white/82 px-4 py-4 shadow-[0_10px_24px_rgba(8,11,13,0.04)] backdrop-blur-[12px]"
            >
              <p className={`${mono} text-[11px] uppercase tracking-[0.18em] text-[#99a1af]`}>
                {item.label}
              </p>
              <p className={`${mono} mt-2 text-[16px] font-[700] text-[#080b0d]`}>
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
