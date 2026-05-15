import svgPaths from "./svg-qk30io05s4";
import imgImage1 from "./ca90735eb1f499791a041f380b71418fb718b513.png";
import imgImage2 from "./1c8fd63b5680b388cf5417bfa7f9c8d740713c82.png";

function Layer() {
  return (
    <div className="absolute h-[49px] left-[84px] top-[19px] w-[44px]" data-name="Layer_1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 49">
        <g clipPath="url(#clip0_1_8684)" id="Layer_1">
          <path d={svgPaths.p2a278200} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p34022a00} fill="var(--fill-0, #EE3224)" id="Vector_2" />
          <path d={svgPaths.p29152900} fill="var(--fill-0, #EE3224)" id="Vector_3" />
          <path d={svgPaths.p3d87be00} id="Vector_4" stroke="var(--stroke-0, white)" strokeMiterlimit="10" />
          <path d={svgPaths.p16ffe600} fill="var(--fill-0, #F8F8F9)" id="Vector_5" />
        </g>
        <defs>
          <clipPath id="clip0_1_8684">
            <rect fill="white" height="49" width="44" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Logo() {
  return (
    <div className="absolute contents left-[83px] top-[18px]" data-name="Logo">
      <Layer />
      <p className="absolute font-['Syne:ExtraBold',sans-serif] font-extrabold leading-[32px] left-[118px] text-[#ee3224] text-[30px] top-[35px] whitespace-nowrap">esQ</p>
    </div>
  );
}

function PillHotline247Live() {
  return (
    <div className="absolute bg-[#ee3224] h-[34px] left-[561px] overflow-clip rounded-[10px] top-[430px] w-[281px]" data-name="Pill/Hotline 24/7 / Live">
      <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[16px] left-[calc(50%-16.5px)] not-italic text-[#f0f0f1] text-[11px] top-[8px] tracking-[0.88px] whitespace-nowrap">Tiếp tục</p>
    </div>
  );
}

function PillHotline247Live1() {
  return (
    <div className="absolute bg-white border border-black border-solid h-[34px] left-[561px] overflow-clip rounded-[10px] top-[384px] w-[281px]" data-name="Pill/Hotline 24/7 / Live">
      <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[18px] left-[18px] not-italic text-[#a4a4a4] text-[12px] top-[7px] whitespace-nowrap">Nhập số điện thoại hoặc email</p>
    </div>
  );
}

function PillHotline247Live2() {
  return (
    <div className="absolute bg-[#e8e8e8] border border-black border-solid h-[34px] left-[561px] overflow-clip rounded-[10px] top-[521px] w-[281px]" data-name="Pill/Hotline 24/7 / Live">
      <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[18px] left-[85px] not-italic text-[12px] text-black top-[7px] whitespace-nowrap">Tiếp tục với Google</p>
    </div>
  );
}

function PillHotline247Live3() {
  return (
    <div className="absolute bg-[#e8e8e8] border border-black border-solid h-[34px] left-[561px] overflow-clip rounded-[10px] top-[563px] w-[281px]" data-name="Pill/Hotline 24/7 / Live">
      <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[18px] left-[85px] not-italic text-[12px] text-black top-[7px] whitespace-nowrap">Tiếp tục với Apple</p>
    </div>
  );
}

export default function SignIn() {
  return (
    <div className="bg-white relative size-full" data-name="sign in">
      <div className="absolute bg-[rgba(255,255,255,0.92)] border border-[rgba(4,38,153,0.08)] border-solid h-[88px] left-[-1px] top-0 w-[1440px]" data-name="ResQ/Top Nav">
        <Logo />
      </div>
      <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[18px] left-[691px] not-italic text-[#080b0d] text-[14px] top-[484px] whitespace-nowrap">hoặc</p>
      <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] h-[32px] leading-[20px] left-[473px] not-italic text-[#080b0d] text-[20px] top-[301px] w-[494px]">Số điện thoại hoặc email của bạn là gì?</p>
      <PillHotline247Live />
      <PillHotline247Live1 />
      <PillHotline247Live2 />
      <PillHotline247Live3 />
      <div className="absolute left-[616px] size-[17px] top-[529px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
      <div className="absolute left-[614px] size-[23px] top-[568px]" data-name="image 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
      </div>
    </div>
  );
}