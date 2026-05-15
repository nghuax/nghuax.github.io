import svgPaths from "./svg-ae07nyy7nn";
import { imgVector } from "./svg-zyzs2";

function Text() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.2)] h-[18px] left-[76.8px] opacity-70 rounded-[999px] top-[8.75px] w-[27.203px]" data-name="Text">
      <p className="-translate-x-1/2 absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[16px] left-[14px] not-italic text-[11px] text-center text-white top-[0.5px] whitespace-nowrap">13</p>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#ee3224] border border-[#ee3224] border-solid h-[37.5px] left-0 rounded-[16777200px] top-0 w-[130.008px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[19.5px] left-[47.5px] not-italic text-[13px] text-center text-white top-[7px] whitespace-nowrap">Tất cả</p>
      <Text />
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.06)] h-[18px] left-[76.8px] opacity-70 rounded-[999px] top-[8.75px] w-[27.203px]" data-name="Text">
      <p className="-translate-x-1/2 absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[16px] left-[14px] not-italic text-[#080b0d] text-[11px] text-center top-[0.5px] whitespace-nowrap">11</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-white border border-[rgba(0,0,0,0.1)] border-solid h-[37.5px] left-[138.01px] rounded-[16777200px] top-0 w-[130.008px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[19.5px] left-[47.5px] not-italic text-[#080b0d] text-[13px] text-center top-[7px] whitespace-nowrap">Xe máy</p>
      <Text1 />
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.06)] h-[18px] left-[61.2px] opacity-70 rounded-[999px] top-[8.75px] w-[27.203px]" data-name="Text">
      <p className="-translate-x-1/2 absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[16px] left-[14px] not-italic text-[#080b0d] text-[11px] text-center top-[0.5px] whitespace-nowrap">11</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-white border border-[rgba(0,0,0,0.1)] border-solid h-[37.5px] left-[276.02px] rounded-[16777200px] top-0 w-[114.406px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[19.5px] left-[40px] not-italic text-[#080b0d] text-[13px] text-center top-[7px] whitespace-nowrap">Ô tô</p>
      <Text2 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[37.5px] left-[84px] top-[297px] w-[1191px]" data-name="Container">
      <Button />
      <Button1 />
      <Button2 />
    </div>
  );
}

function Section() {
  return (
    <div className="absolute h-[334.5px] left-0 top-0 w-[1359px]" data-name="Section">
      <Container />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.pace200} id="Vector" stroke="var(--stroke-0, #EE3224)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p3d96f400} id="Vector_2" stroke="var(--stroke-0, #EE3224)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function SvgIcon() {
  return (
    <div className="absolute bg-[rgba(238,50,36,0.1)] content-stretch flex items-center justify-center left-[24px] px-[12px] rounded-[10px] size-[48px] top-[24px]" data-name="SvgIcon">
      <Icon />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[24px] left-[24px] top-[88px] w-[331px]" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[24px] left-0 not-italic text-[#080b0d] text-[16px] top-[0.5px] whitespace-nowrap">Vá lốp / Thay lốp</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[42.25px] left-[24px] top-[120px] w-[312px]" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[21.125px] left-0 not-italic text-[#4a5565] text-[13px] top-0 w-[312px]">Xử lý nhanh lốp xe bị thủng, xẹp hoặc hư hỏng trên đường.</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[21px] relative shrink-0 w-[84px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#ee3224] text-[14px] top-[-1px] whitespace-nowrap">Từ 50.000đ</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex h-[22.5px] items-center justify-between left-[24px] pr-[247px] top-[182.25px] w-[331px]" data-name="Container">
      <Paragraph2 />
    </div>
  );
}

function Text3() {
  return (
    <div className="bg-[rgba(238,50,36,0.08)] flex-[1_0_0] h-[20px] min-h-px min-w-px relative rounded-[999px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[16px] left-[8px] not-italic text-[#ee3224] text-[10px] top-[1.5px] whitespace-nowrap">Xe máy</p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="bg-[rgba(4,38,153,0.06)] h-[20px] relative rounded-[999px] shrink-0 w-[40px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[16px] left-[8px] not-italic text-[#3b5998] text-[10px] top-[1.5px] whitespace-nowrap">Ô tô</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[20px] items-start left-[267px] top-[16px] w-[96px]" data-name="Container">
      <Text3 />
      <Text4 />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute bg-white border border-[rgba(0,0,0,0.05)] border-solid h-[230.75px] left-0 rounded-[14px] top-0 w-[381px]" data-name="Container">
      <SvgIcon />
      <Paragraph />
      <Paragraph1 />
      <Container2 />
      <Container3 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p384200b2} id="Vector" stroke="var(--stroke-0, #EE3224)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M22 11V13" id="Vector_2" stroke="var(--stroke-0, #EE3224)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function SvgIcon1() {
  return (
    <div className="absolute bg-[rgba(238,50,36,0.1)] content-stretch flex items-center justify-center left-[24px] px-[12px] rounded-[10px] size-[48px] top-[24px]" data-name="SvgIcon">
      <Icon1 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[24px] left-[24px] top-[88px] w-[331px]" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[24px] left-0 not-italic text-[#080b0d] text-[16px] top-[0.5px] whitespace-nowrap">Kích bình / Thay ắc quy</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[42.25px] left-[24px] top-[120px] w-[312px]" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[21.125px] left-0 not-italic text-[#4a5565] text-[13px] top-0 w-[289px]">Kích nổ hoặc thay ắc quy mới ngay tại chỗ.</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[21px] relative shrink-0 w-[92.406px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#ee3224] text-[14px] top-[-1px] whitespace-nowrap">Từ 100.000đ</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex h-[22.5px] items-center justify-between left-[24px] pr-[238.594px] top-[182.25px] w-[331px]" data-name="Container">
      <Paragraph5 />
    </div>
  );
}

function Text5() {
  return (
    <div className="bg-[rgba(238,50,36,0.08)] flex-[1_0_0] h-[20px] min-h-px min-w-px relative rounded-[999px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[16px] left-[8px] not-italic text-[#ee3224] text-[10px] top-[1.5px] whitespace-nowrap">Xe máy</p>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="bg-[rgba(4,38,153,0.06)] h-[20px] relative rounded-[999px] shrink-0 w-[40px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[16px] left-[8px] not-italic text-[#3b5998] text-[10px] top-[1.5px] whitespace-nowrap">Ô tô</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[20px] items-start left-[267px] top-[16px] w-[96px]" data-name="Container">
      <Text5 />
      <Text6 />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute bg-white border border-[rgba(0,0,0,0.05)] border-solid h-[230.75px] left-[405px] rounded-[14px] top-0 w-[381px]" data-name="Container">
      <SvgIcon1 />
      <Paragraph3 />
      <Paragraph4 />
      <Container5 />
      <Container6 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M3 22H15" id="Vector" stroke="var(--stroke-0, #EE3224)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M4 9H14" id="Vector_2" stroke="var(--stroke-0, #EE3224)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p32de3500} id="Vector_3" stroke="var(--stroke-0, #EE3224)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.pe729480} id="Vector_4" stroke="var(--stroke-0, #EE3224)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function SvgIcon2() {
  return (
    <div className="absolute bg-[rgba(238,50,36,0.1)] content-stretch flex items-center justify-center left-[24px] px-[12px] rounded-[10px] size-[48px] top-[24px]" data-name="SvgIcon">
      <Icon2 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="absolute h-[24px] left-[24px] top-[88px] w-[331px]" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[24px] left-0 not-italic text-[#080b0d] text-[16px] top-[0.5px] whitespace-nowrap">Tiếp nhiên liệu (Xăng/Dầu)</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="absolute h-[42.25px] left-[24px] top-[120px] w-[312px]" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[21.125px] left-0 not-italic text-[#4a5565] text-[13px] top-0 w-[312px]">Giao xăng hoặc dầu diesel đến vị trí của bạn.</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[21px] relative shrink-0 w-[84px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#ee3224] text-[14px] top-[-1px] whitespace-nowrap">Từ 80.000đ</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex h-[22.5px] items-center justify-between left-[24px] pr-[247px] top-[182.25px] w-[331px]" data-name="Container">
      <Paragraph8 />
    </div>
  );
}

function Text7() {
  return (
    <div className="bg-[rgba(238,50,36,0.08)] flex-[1_0_0] h-[20px] min-h-px min-w-px relative rounded-[999px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[16px] left-[8px] not-italic text-[#ee3224] text-[10px] top-[1.5px] whitespace-nowrap">Xe máy</p>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="bg-[rgba(4,38,153,0.06)] h-[20px] relative rounded-[999px] shrink-0 w-[40px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[16px] left-[8px] not-italic text-[#3b5998] text-[10px] top-[1.5px] whitespace-nowrap">Ô tô</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[20px] items-start left-[267px] top-[16px] w-[96px]" data-name="Container">
      <Text7 />
      <Text8 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute bg-white border border-[rgba(0,0,0,0.05)] border-solid h-[230.75px] left-[810px] rounded-[14px] top-0 w-[381px]" data-name="Container">
      <SvgIcon2 />
      <Paragraph6 />
      <Paragraph7 />
      <Container8 />
      <Container9 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p38ffec00} id="Vector" stroke="var(--stroke-0, #EE3224)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p3cccb600} id="Vector_2" stroke="var(--stroke-0, #EE3224)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function SvgIcon3() {
  return (
    <div className="absolute bg-[rgba(238,50,36,0.1)] content-stretch flex items-center justify-center left-[24px] px-[12px] rounded-[10px] size-[48px] top-[24px]" data-name="SvgIcon">
      <Icon3 />
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="absolute h-[24px] left-[24px] top-[88px] w-[331px]" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[24px] left-0 not-italic text-[#080b0d] text-[16px] top-[0.5px] whitespace-nowrap">Sự cố động cơ</p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="absolute h-[42.25px] left-[24px] top-[120px] w-[312px]" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[21.125px] left-0 not-italic text-[#4a5565] text-[13px] top-0 w-[305px]">Kiểm tra và xử lý các sự cố động cơ tại hiện trường.</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[21px] relative shrink-0 w-[92.406px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#ee3224] text-[14px] top-[-1px] whitespace-nowrap">Từ 200.000đ</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex h-[22.5px] items-center justify-between left-[24px] pr-[238.594px] top-[182.25px] w-[331px]" data-name="Container">
      <Paragraph11 />
    </div>
  );
}

function Text9() {
  return (
    <div className="bg-[rgba(238,50,36,0.08)] flex-[1_0_0] h-[20px] min-h-px min-w-px relative rounded-[999px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[16px] left-[8px] not-italic text-[#ee3224] text-[10px] top-[1.5px] whitespace-nowrap">Xe máy</p>
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="bg-[rgba(4,38,153,0.06)] h-[20px] relative rounded-[999px] shrink-0 w-[40px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[16px] left-[8px] not-italic text-[#3b5998] text-[10px] top-[1.5px] whitespace-nowrap">Ô tô</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[20px] items-start left-[267px] top-[16px] w-[96px]" data-name="Container">
      <Text9 />
      <Text10 />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute bg-white border border-[rgba(0,0,0,0.05)] border-solid h-[230.75px] left-0 rounded-[14px] top-[254.75px] w-[381px]" data-name="Container">
      <SvgIcon3 />
      <Paragraph9 />
      <Paragraph10 />
      <Container11 />
      <Container12 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p1b8b3180} id="Vector" stroke="var(--stroke-0, #EE3224)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function SvgIcon4() {
  return (
    <div className="absolute bg-[rgba(238,50,36,0.1)] content-stretch flex items-center justify-center left-[24px] px-[12px] rounded-[10px] size-[48px] top-[24px]" data-name="SvgIcon">
      <Icon4 />
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="absolute h-[24px] left-[24px] top-[88px] w-[331px]" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[24px] left-0 not-italic text-[#080b0d] text-[16px] top-[0.5px] whitespace-nowrap">Sự cố điện</p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="absolute h-[42.25px] left-[24px] top-[120px] w-[312px]" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[21.125px] left-0 not-italic text-[#4a5565] text-[13px] top-0 w-[289px]">Khắc phục lỗi hệ thống điện, đèn, còi xe.</p>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[21px] relative shrink-0 w-[92.406px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#ee3224] text-[14px] top-[-1px] whitespace-nowrap">Từ 150.000đ</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute content-stretch flex h-[22.5px] items-center justify-between left-[24px] pr-[238.594px] top-[182.25px] w-[331px]" data-name="Container">
      <Paragraph14 />
    </div>
  );
}

function Text11() {
  return (
    <div className="bg-[rgba(238,50,36,0.08)] flex-[1_0_0] h-[20px] min-h-px min-w-px relative rounded-[999px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[16px] left-[8px] not-italic text-[#ee3224] text-[10px] top-[1.5px] whitespace-nowrap">Xe máy</p>
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="bg-[rgba(4,38,153,0.06)] h-[20px] relative rounded-[999px] shrink-0 w-[40px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[16px] left-[8px] not-italic text-[#3b5998] text-[10px] top-[1.5px] whitespace-nowrap">Ô tô</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[20px] items-start left-[267px] top-[16px] w-[96px]" data-name="Container">
      <Text11 />
      <Text12 />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute bg-white border border-[rgba(0,0,0,0.05)] border-solid h-[230.75px] left-[405px] rounded-[14px] top-[254.75px] w-[381px]" data-name="Container">
      <SvgIcon4 />
      <Paragraph12 />
      <Paragraph13 />
      <Container14 />
      <Container15 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.pdf34300} id="Vector" stroke="var(--stroke-0, #EE3224)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function SvgIcon5() {
  return (
    <div className="absolute bg-[rgba(238,50,36,0.1)] content-stretch flex items-center justify-center left-[24px] px-[12px] rounded-[10px] size-[48px] top-[24px]" data-name="SvgIcon">
      <Icon5 />
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="absolute h-[24px] left-[24px] top-[88px] w-[331px]" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[24px] left-0 not-italic text-[#080b0d] text-[16px] top-[0.5px] whitespace-nowrap">Phanh / Thắng</p>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="absolute h-[21.125px] left-[24px] top-[120px] w-[312px]" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[21.125px] left-0 not-italic text-[#4a5565] text-[13px] top-0 whitespace-nowrap">Kiểm tra và sửa chữa hệ thống phanh.</p>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="h-[21px] relative shrink-0 w-[92.406px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#ee3224] text-[14px] top-[-1px] whitespace-nowrap">Từ 120.000đ</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex h-[22.5px] items-center justify-between left-[24px] pr-[238.594px] top-[161.13px] w-[331px]" data-name="Container">
      <Paragraph17 />
    </div>
  );
}

function Text13() {
  return (
    <div className="bg-[rgba(238,50,36,0.08)] flex-[1_0_0] h-[20px] min-h-px min-w-px relative rounded-[999px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[16px] left-[8px] not-italic text-[#ee3224] text-[10px] top-[1.5px] whitespace-nowrap">Xe máy</p>
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="bg-[rgba(4,38,153,0.06)] h-[20px] relative rounded-[999px] shrink-0 w-[40px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[16px] left-[8px] not-italic text-[#3b5998] text-[10px] top-[1.5px] whitespace-nowrap">Ô tô</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[20px] items-start left-[267px] top-[16px] w-[96px]" data-name="Container">
      <Text13 />
      <Text14 />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute bg-white border border-[rgba(0,0,0,0.05)] border-solid h-[230.75px] left-[810px] rounded-[14px] top-[254.75px] w-[381px]" data-name="Container">
      <SvgIcon5 />
      <Paragraph15 />
      <Paragraph16 />
      <Container17 />
      <Container18 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p1d3f6c80} id="Vector" stroke="var(--stroke-0, #EE3224)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p37cfb400} id="Vector_2" stroke="var(--stroke-0, #EE3224)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function SvgIcon6() {
  return (
    <div className="absolute bg-[rgba(238,50,36,0.1)] content-stretch flex items-center justify-center left-[24px] px-[12px] rounded-[10px] size-[48px] top-[24px]" data-name="SvgIcon">
      <Icon6 />
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="absolute h-[24px] left-[24px] top-[88px] w-[331px]" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[24px] left-0 not-italic text-[#080b0d] text-[16px] top-[0.5px] whitespace-nowrap">Thay dầu</p>
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="absolute h-[42.25px] left-[24px] top-[120px] w-[312px]" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[21.125px] left-0 not-italic text-[#4a5565] text-[13px] top-0 w-[297px]">Dịch vụ thay dầu nhớt tại nhà hoặc tại chỗ.</p>
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="h-[21px] relative shrink-0 w-[92.406px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#ee3224] text-[14px] top-[-1px] whitespace-nowrap">Từ 100.000đ</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute content-stretch flex h-[22.5px] items-center justify-between left-[24px] pr-[238.594px] top-[182.25px] w-[331px]" data-name="Container">
      <Paragraph20 />
    </div>
  );
}

function Text15() {
  return (
    <div className="bg-[rgba(238,50,36,0.08)] flex-[1_0_0] h-[20px] min-h-px min-w-px relative rounded-[999px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[16px] left-[8px] not-italic text-[#ee3224] text-[10px] top-[1.5px] whitespace-nowrap">Xe máy</p>
      </div>
    </div>
  );
}

function Text16() {
  return (
    <div className="bg-[rgba(4,38,153,0.06)] h-[20px] relative rounded-[999px] shrink-0 w-[40px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[16px] left-[8px] not-italic text-[#3b5998] text-[10px] top-[1.5px] whitespace-nowrap">Ô tô</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[20px] items-start left-[267px] top-[16px] w-[96px]" data-name="Container">
      <Text15 />
      <Text16 />
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute bg-white border border-[rgba(0,0,0,0.05)] border-solid h-[230.75px] left-0 rounded-[14px] top-[509.5px] w-[381px]" data-name="Container">
      <SvgIcon6 />
      <Paragraph18 />
      <Paragraph19 />
      <Container20 />
      <Container21 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p67fd620} id="Vector" stroke="var(--stroke-0, #EE3224)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M15 18H9" id="Vector_2" stroke="var(--stroke-0, #EE3224)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2beec100} id="Vector_3" stroke="var(--stroke-0, #EE3224)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p13934880} id="Vector_4" stroke="var(--stroke-0, #EE3224)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p1ff3c700} id="Vector_5" stroke="var(--stroke-0, #EE3224)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function SvgIcon7() {
  return (
    <div className="absolute bg-[rgba(238,50,36,0.1)] content-stretch flex items-center justify-center left-[24px] px-[12px] rounded-[10px] size-[48px] top-[24px]" data-name="SvgIcon">
      <Icon7 />
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="absolute h-[24px] left-[24px] top-[88px] w-[331px]" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[24px] left-0 not-italic text-[#080b0d] text-[16px] top-[0.5px] whitespace-nowrap">Cứu hộ / Kéo xe</p>
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="absolute h-[21.125px] left-[24px] top-[120px] w-[312px]" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[21.125px] left-0 not-italic text-[#4a5565] text-[13px] top-0 whitespace-nowrap">Xe cứu hộ đến kéo xe về garage an toàn.</p>
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="h-[21px] relative shrink-0 w-[92.406px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#ee3224] text-[14px] top-[-1px] whitespace-nowrap">Từ 300.000đ</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute content-stretch flex h-[22.5px] items-center justify-between left-[24px] pr-[238.594px] top-[161.13px] w-[331px]" data-name="Container">
      <Paragraph23 />
    </div>
  );
}

function Text17() {
  return (
    <div className="bg-[rgba(238,50,36,0.08)] flex-[1_0_0] h-[20px] min-h-px min-w-px relative rounded-[999px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[16px] left-[8px] not-italic text-[#ee3224] text-[10px] top-[1.5px] whitespace-nowrap">Xe máy</p>
      </div>
    </div>
  );
}

function Text18() {
  return (
    <div className="bg-[rgba(4,38,153,0.06)] h-[20px] relative rounded-[999px] shrink-0 w-[40px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[16px] left-[8px] not-italic text-[#3b5998] text-[10px] top-[1.5px] whitespace-nowrap">Ô tô</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[20px] items-start left-[267px] top-[16px] w-[96px]" data-name="Container">
      <Text17 />
      <Text18 />
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute bg-white border border-[rgba(0,0,0,0.05)] border-solid h-[230.75px] left-[405px] rounded-[14px] top-[509.5px] w-[381px]" data-name="Container">
      <SvgIcon7 />
      <Paragraph21 />
      <Paragraph22 />
      <Container23 />
      <Container24 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.pdf34300} id="Vector" stroke="var(--stroke-0, #EE3224)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function SvgIcon8() {
  return (
    <div className="absolute bg-[rgba(238,50,36,0.1)] content-stretch flex items-center justify-center left-[24px] px-[12px] rounded-[10px] size-[48px] top-[24px]" data-name="SvgIcon">
      <Icon8 />
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="absolute h-[24px] left-[24px] top-[88px] w-[331px]" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[24px] left-0 not-italic text-[#080b0d] text-[16px] top-[0.5px] whitespace-nowrap">Thay bugi</p>
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="absolute h-[42.25px] left-[24px] top-[120px] w-[312px]" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[21.125px] left-0 not-italic text-[#4a5565] text-[13px] top-0 w-[281px]">Kiểm tra và thay bugi cho xe máy tại chỗ.</p>
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="h-[21px] relative shrink-0 w-[84px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#ee3224] text-[14px] top-[-1px] whitespace-nowrap">Từ 40.000đ</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute content-stretch flex h-[22.5px] items-center justify-between left-[24px] pr-[247px] top-[182.25px] w-[331px]" data-name="Container">
      <Paragraph26 />
    </div>
  );
}

function Text19() {
  return (
    <div className="bg-[rgba(238,50,36,0.08)] flex-[1_0_0] h-[20px] min-h-px min-w-px relative rounded-[999px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[16px] left-[8px] not-italic text-[#ee3224] text-[10px] top-[1.5px] whitespace-nowrap">Xe máy</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[311px] top-[16px] w-[52px]" data-name="Container">
      <Text19 />
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute bg-white border border-[rgba(0,0,0,0.05)] border-solid h-[230.75px] left-[810px] rounded-[14px] top-[509.5px] w-[381px]" data-name="Container">
      <SvgIcon8 />
      <Paragraph24 />
      <Paragraph25 />
      <Container26 />
      <Container27 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p38ffec00} id="Vector" stroke="var(--stroke-0, #EE3224)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p3cccb600} id="Vector_2" stroke="var(--stroke-0, #EE3224)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function SvgIcon9() {
  return (
    <div className="absolute bg-[rgba(238,50,36,0.1)] content-stretch flex items-center justify-center left-[24px] px-[12px] rounded-[10px] size-[48px] top-[24px]" data-name="SvgIcon">
      <Icon9 />
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="absolute h-[24px] left-[24px] top-[88px] w-[331px]" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[24px] left-0 not-italic text-[#080b0d] text-[16px] top-[0.5px] whitespace-nowrap">Thay nhông sên dĩa</p>
    </div>
  );
}

function Paragraph28() {
  return (
    <div className="absolute h-[42.25px] left-[24px] top-[120px] w-[312px]" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[21.125px] left-0 not-italic text-[#4a5565] text-[13px] top-0 w-[281px]">Thay bộ nhông sên dĩa cho xe máy tận nơi.</p>
    </div>
  );
}

function Paragraph29() {
  return (
    <div className="h-[21px] relative shrink-0 w-[92.406px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#ee3224] text-[14px] top-[-1px] whitespace-nowrap">Từ 250.000đ</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex h-[22.5px] items-center justify-between left-[24px] pr-[238.594px] top-[182.25px] w-[331px]" data-name="Container">
      <Paragraph29 />
    </div>
  );
}

function Text20() {
  return (
    <div className="bg-[rgba(238,50,36,0.08)] flex-[1_0_0] h-[20px] min-h-px min-w-px relative rounded-[999px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[16px] left-[8px] not-italic text-[#ee3224] text-[10px] top-[1.5px] whitespace-nowrap">Xe máy</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[311px] top-[16px] w-[52px]" data-name="Container">
      <Text20 />
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute bg-white border border-[rgba(0,0,0,0.05)] border-solid h-[230.75px] left-0 rounded-[14px] top-[764.25px] w-[381px]" data-name="Container">
      <SvgIcon9 />
      <Paragraph27 />
      <Paragraph28 />
      <Container29 />
      <Container30 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p1d3f6c80} id="Vector" stroke="var(--stroke-0, #EE3224)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p37cfb400} id="Vector_2" stroke="var(--stroke-0, #EE3224)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function SvgIcon10() {
  return (
    <div className="absolute bg-[rgba(238,50,36,0.1)] content-stretch flex items-center justify-center left-[24px] px-[12px] rounded-[10px] size-[48px] top-[24px]" data-name="SvgIcon">
      <Icon10 />
    </div>
  );
}

function Paragraph30() {
  return (
    <div className="absolute h-[24px] left-[24px] top-[88px] w-[331px]" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[24px] left-0 not-italic text-[#080b0d] text-[16px] top-[0.5px] whitespace-nowrap">Điều hòa / Máy lạnh ô tô</p>
    </div>
  );
}

function Paragraph31() {
  return (
    <div className="absolute h-[42.25px] left-[24px] top-[120px] w-[312px]" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[21.125px] left-0 not-italic text-[#4a5565] text-[13px] top-0 w-[297px]">Kiểm tra, bơm gas và sửa chữa hệ thống điều hòa.</p>
    </div>
  );
}

function Paragraph32() {
  return (
    <div className="h-[21px] relative shrink-0 w-[92.406px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#ee3224] text-[14px] top-[-1px] whitespace-nowrap">Từ 300.000đ</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute content-stretch flex h-[22.5px] items-center justify-between left-[24px] pr-[238.594px] top-[182.25px] w-[331px]" data-name="Container">
      <Paragraph32 />
    </div>
  );
}

function Text21() {
  return (
    <div className="bg-[rgba(4,38,153,0.06)] flex-[1_0_0] h-[20px] min-h-px min-w-px relative rounded-[999px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[16px] left-[8px] not-italic text-[#3b5998] text-[10px] top-[1.5px] whitespace-nowrap">Ô tô</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[323px] top-[16px] w-[40px]" data-name="Container">
      <Text21 />
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute bg-white border border-[rgba(0,0,0,0.05)] border-solid h-[230.75px] left-[405px] rounded-[14px] top-[764.25px] w-[381px]" data-name="Container">
      <SvgIcon10 />
      <Paragraph30 />
      <Paragraph31 />
      <Container32 />
      <Container33 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.pace200} id="Vector" stroke="var(--stroke-0, #EE3224)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.pbc79d00} id="Vector_2" stroke="var(--stroke-0, #EE3224)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12 17H12.01" id="Vector_3" stroke="var(--stroke-0, #EE3224)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function SvgIcon11() {
  return (
    <div className="absolute bg-[rgba(238,50,36,0.1)] content-stretch flex items-center justify-center left-[24px] px-[12px] rounded-[10px] size-[48px] top-[24px]" data-name="SvgIcon">
      <Icon11 />
    </div>
  );
}

function Paragraph33() {
  return (
    <div className="absolute h-[24px] left-[24px] top-[88px] w-[331px]" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[24px] left-0 not-italic text-[#080b0d] text-[16px] top-[0.5px] whitespace-nowrap">Mở khóa ô tô</p>
    </div>
  );
}

function Paragraph34() {
  return (
    <div className="absolute h-[42.25px] left-[24px] top-[120px] w-[312px]" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[21.125px] left-0 not-italic text-[#4a5565] text-[13px] top-0 w-[289px]">Mở khóa xe khi bị nhốt chìa bên trong hoặc mất chìa.</p>
    </div>
  );
}

function Paragraph35() {
  return (
    <div className="h-[21px] relative shrink-0 w-[92.406px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#ee3224] text-[14px] top-[-1px] whitespace-nowrap">Từ 400.000đ</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute content-stretch flex h-[22.5px] items-center justify-between left-[24px] pr-[238.594px] top-[182.25px] w-[331px]" data-name="Container">
      <Paragraph35 />
    </div>
  );
}

function Text22() {
  return (
    <div className="bg-[rgba(4,38,153,0.06)] flex-[1_0_0] h-[20px] min-h-px min-w-px relative rounded-[999px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[16px] left-[8px] not-italic text-[#3b5998] text-[10px] top-[1.5px] whitespace-nowrap">Ô tô</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[323px] top-[16px] w-[40px]" data-name="Container">
      <Text22 />
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute bg-white border border-[rgba(0,0,0,0.05)] border-solid h-[230.75px] left-[810px] rounded-[14px] top-[764.25px] w-[381px]" data-name="Container">
      <SvgIcon11 />
      <Paragraph33 />
      <Paragraph34 />
      <Container35 />
      <Container36 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.pace200} id="Vector" stroke="var(--stroke-0, #EE3224)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.pbc79d00} id="Vector_2" stroke="var(--stroke-0, #EE3224)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12 17H12.01" id="Vector_3" stroke="var(--stroke-0, #EE3224)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function SvgIcon12() {
  return (
    <div className="absolute bg-[rgba(238,50,36,0.1)] content-stretch flex items-center justify-center left-[24px] px-[12px] rounded-[10px] size-[48px] top-[24px]" data-name="SvgIcon">
      <Icon12 />
    </div>
  );
}

function Paragraph36() {
  return (
    <div className="absolute h-[24px] left-[24px] top-[88px] w-[331px]" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[24px] left-0 not-italic text-[#080b0d] text-[16px] top-[0.5px] whitespace-nowrap">Hỗ trợ chung</p>
    </div>
  );
}

function Paragraph37() {
  return (
    <div className="absolute h-[21.125px] left-[24px] top-[120px] w-[312px]" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[21.125px] left-0 not-italic text-[#4a5565] text-[13px] top-0 whitespace-nowrap">Bất kỳ sự cố nào khác trên đường.</p>
    </div>
  );
}

function Paragraph38() {
  return (
    <div className="h-[21px] relative shrink-0 w-[58.805px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#ee3224] text-[14px] top-[-1px] whitespace-nowrap">Liên hệ</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute content-stretch flex h-[22.5px] items-center justify-between left-[24px] pr-[272.195px] top-[161.13px] w-[331px]" data-name="Container">
      <Paragraph38 />
    </div>
  );
}

function Text23() {
  return (
    <div className="bg-[rgba(238,50,36,0.08)] flex-[1_0_0] h-[20px] min-h-px min-w-px relative rounded-[999px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[16px] left-[8px] not-italic text-[#ee3224] text-[10px] top-[1.5px] whitespace-nowrap">Xe máy</p>
      </div>
    </div>
  );
}

function Text24() {
  return (
    <div className="bg-[rgba(4,38,153,0.06)] h-[20px] relative rounded-[999px] shrink-0 w-[40px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[16px] left-[8px] not-italic text-[#3b5998] text-[10px] top-[1.5px] whitespace-nowrap">Ô tô</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[20px] items-start left-[267px] top-[16px] w-[96px]" data-name="Container">
      <Text23 />
      <Text24 />
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute bg-white border border-[rgba(0,0,0,0.05)] border-solid h-[228px] left-0 rounded-[14px] top-[1019px] w-[381px]" data-name="Container">
      <SvgIcon12 />
      <Paragraph36 />
      <Paragraph37 />
      <Container38 />
      <Container39 />
    </div>
  );
}

function Section1() {
  return (
    <div className="absolute h-[1247px] left-[84px] top-[374.5px] w-[1191px]" data-name="Section">
      <Container1 />
      <Container4 />
      <Container7 />
      <Container10 />
      <Container13 />
      <Container16 />
      <Container19 />
      <Container22 />
      <Container25 />
      <Container28 />
      <Container31 />
      <Container34 />
      <Container37 />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[77px] left-[362px] top-0 w-[635px]" data-name="Heading 2">
      <p className="-translate-x-1/2 absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[77px] left-[317.59px] not-italic text-[#080b0d] text-[48px] text-center top-[-0.5px] whitespace-nowrap">Cần hỗ trợ ngay?</p>
    </div>
  );
}

function Link() {
  return (
    <div className="absolute bg-[#ee3224] h-[76px] left-[566.05px] rounded-[10px] top-[101px] w-[226.883px]" data-name="Link">
      <p className="-translate-x-1/2 absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[16px] left-[113.5px] not-italic text-[24px] text-center text-white top-[30.5px] tracking-[1.92px] whitespace-nowrap">1900 1234</p>
    </div>
  );
}

function Section2() {
  return (
    <div className="absolute h-[257px] left-0 top-[1701.5px] w-[1359px]" data-name="Section">
      <Heading />
      <Link />
    </div>
  );
}

function ServicesPage() {
  return (
    <div className="h-[1958.5px] relative shrink-0 w-[1359px]" data-name="ServicesPage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Section />
        <Section1 />
        <Section2 />
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[-0.02%_-0.02%_-0.01%_0]" data-name="Group">
      <div className="absolute inset-[-0.02%_11.66%_10.66%_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0.01px] mask-size-[44px_49px]" data-name="Vector" style={{ maskImage: `url('${imgVector}')` }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.8714 43.7873">
          <path d={svgPaths.p21f51580} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[-0.01%_11.64%_10.66%_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0.002px] mask-size-[44px_49px]" data-name="Vector" style={{ maskImage: `url('${imgVector}')` }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.8785 43.7802">
          <path d={svgPaths.p32f8e4c0} fill="var(--fill-0, #EE3224)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[27.35%_47.17%_61.24%_40.02%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-17.607px_-13.403px] mask-size-[44px_49px]" data-name="Vector" style={{ maskImage: `url('${imgVector}')` }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.63879 5.58853">
          <path d={svgPaths.p2882b380} fill="var(--fill-0, #EE3224)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[5.44%_74.09%_9.66%_11.65%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5.128px_-2.668px] mask-size-[44px_49px]" data-name="Vector" style={{ maskImage: `url('${imgVector}')` }}>
        <div className="absolute inset-[-0.18%_-7.88%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.26031 41.7458">
            <path d={svgPaths.p2f657780} id="Vector" stroke="var(--stroke-0, white)" strokeMiterlimit="10" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[63.32%_-0.02%_-0.01%_62.84%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-27.65px_-31.025px] mask-size-[44px_49px]" data-name="Vector" style={{ maskImage: `url('${imgVector}')` }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.3573 17.9813">
          <path d={svgPaths.p2bd76f00} fill="var(--fill-0, #F8F8F9)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group />
    </div>
  );
}

function Icon13() {
  return (
    <div className="h-[49px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <ClipPathGroup />
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[49px] relative shrink-0 w-[44px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon13 />
      </div>
    </div>
  );
}

function Text25() {
  return (
    <div className="h-[32px] relative shrink-0 w-[94.984px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Syne:ExtraBold',sans-serif] font-extrabold leading-[32px] left-0 text-[#ee3224] text-[30px] top-0 whitespace-nowrap">esQ</p>
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div className="content-stretch flex h-[49px] items-center relative shrink-0 w-full" data-name="Logo">
      <Container42 />
      <Text25 />
    </div>
  );
}

function Paragraph39() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[20px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.5)] top-[-0.5px] w-[258px]">Dịch vụ cứu hộ xe và sửa chữa tận nơi hàng đầu Việt Nam.</p>
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] h-[139px] items-start left-0 top-0 w-[267.75px]" data-name="Container">
      <Logo />
      <Paragraph39 />
    </div>
  );
}

function Paragraph40() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[21px] left-0 not-italic text-[14px] text-white top-[-1px] whitespace-nowrap">Dịch vụ</p>
    </div>
  );
}

function Paragraph41() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.5)] top-[-1px] whitespace-nowrap">Cứu hộ đường dài</p>
    </div>
  );
}

function Paragraph42() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.5)] top-[-1px] whitespace-nowrap">Sửa xe tận nơi</p>
    </div>
  );
}

function Paragraph43() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.5)] top-[-1px] whitespace-nowrap">Giao xăng tận nhà</p>
    </div>
  );
}

function Paragraph44() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.5)] top-[-1px] whitespace-nowrap">Thay ắc quy</p>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[102px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph41 />
      <Paragraph42 />
      <Paragraph43 />
      <Paragraph44 />
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[139px] items-start left-[307.75px] top-0 w-[267.75px]" data-name="Container">
      <Paragraph40 />
      <Container44 />
    </div>
  );
}

function Paragraph45() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[21px] left-0 not-italic text-[14px] text-white top-[-1px] whitespace-nowrap">Hỗ trợ</p>
    </div>
  );
}

function Paragraph46() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.5)] top-[-1px] whitespace-nowrap">Câu hỏi thường gặp</p>
    </div>
  );
}

function Paragraph47() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.5)] top-[-1px] whitespace-nowrap">Liên hệ</p>
    </div>
  );
}

function Paragraph48() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.5)] top-[-1px] whitespace-nowrap">Điều khoản dịch vụ</p>
    </div>
  );
}

function Paragraph49() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.5)] top-[-1px] whitespace-nowrap">Chính sách bảo mật</p>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[102px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph46 />
      <Paragraph47 />
      <Paragraph48 />
      <Paragraph49 />
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[139px] items-start left-[615.5px] top-0 w-[267.75px]" data-name="Container">
      <Paragraph45 />
      <Container46 />
    </div>
  );
}

function Paragraph50() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[21px] left-0 not-italic text-[14px] text-white top-[-1px] whitespace-nowrap">Liên hệ</p>
    </div>
  );
}

function Paragraph51() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.5)] top-[-1px] whitespace-nowrap">Hotline: 1900 1234</p>
    </div>
  );
}

function Paragraph52() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.5)] top-[-1px] whitespace-nowrap">Email: support@resq.vn</p>
    </div>
  );
}

function Paragraph53() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.5)] top-[-1px] whitespace-nowrap">TP. Hồ Chí Minh, Việt Nam</p>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[74.5px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph51 />
      <Paragraph52 />
      <Paragraph53 />
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[139px] items-start left-[923.25px] top-0 w-[267.75px]" data-name="Container">
      <Paragraph50 />
      <Container48 />
    </div>
  );
}

function Container40() {
  return (
    <div className="h-[139px] relative shrink-0 w-full" data-name="Container">
      <Container41 />
      <Container43 />
      <Container45 />
      <Container47 />
    </div>
  );
}

function Container49() {
  return (
    <div className="h-[43px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <p className="-translate-x-1/2 absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[18px] left-[595.59px] not-italic text-[12px] text-[rgba(255,255,255,0.3)] text-center top-[25px] whitespace-nowrap">© 2026 ResQ. Tất cả quyền được bảo lưu.</p>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#080b0d] h-[358px] relative shrink-0 w-[1359px]" data-name="Footer">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[48px] items-start pt-[64px] px-[84px] relative size-full">
        <Container40 />
        <Container49 />
      </div>
    </div>
  );
}

function Layout() {
  return (
    <div className="absolute content-stretch flex flex-col h-[2405.5px] items-start left-0 pt-[89px] top-0 w-[1359px]" data-name="Layout">
      <ServicesPage />
      <Footer />
    </div>
  );
}

function Icon14() {
  return (
    <div className="absolute left-[100px] size-[119px] top-[196px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 119 119">
        <g id="Icon">
          <path d={svgPaths.p36653280} id="Vector" stroke="var(--stroke-0, #EE3224)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p39819000} id="Vector_2" stroke="var(--stroke-0, #EE3224)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph54() {
  return (
    <div className="absolute h-[16px] left-[238px] top-[256px] w-[1191px]" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[16px] left-0 not-italic text-[14px] text-black top-[-0.5px] tracking-[1.12px] whitespace-nowrap">Hỗ trợ 24/7 từ xe máy đến ô tô</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[100px] top-[196px]">
      <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[16px] left-[236px] not-italic text-[32px] text-black top-[221px] tracking-[2.56px] whitespace-nowrap">Danh mục dịch vụ cứu hộ của ResQ</p>
      <Icon14 />
      <Paragraph54 />
    </div>
  );
}

function PillHotline247Live() {
  return (
    <div className="absolute bg-[#ee3224] h-[34px] left-[1287px] overflow-clip rounded-[999px] top-[27px] w-[122px]" data-name="Pill/Hotline 24/7 / Live">
      <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[16px] left-[calc(50%-33px)] not-italic text-[#f0f0f1] text-[14px] top-[calc(50%-8px)] tracking-[1.12px] whitespace-nowrap">Đăng ký</p>
    </div>
  );
}

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

function Logo1() {
  return (
    <div className="absolute contents left-[84px] top-[19px]" data-name="Logo">
      <Layer />
      <p className="absolute font-['Syne:ExtraBold',sans-serif] font-extrabold leading-[32px] left-[118px] text-[#ee3224] text-[30px] top-[35px] whitespace-nowrap">esQ</p>
    </div>
  );
}

function Navbar() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.92)] content-stretch flex flex-col h-[89px] items-start left-0 pb-px top-0 w-[1359px]" data-name="Navbar">
      <div aria-hidden="true" className="absolute border-[rgba(4,38,153,0.08)] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-[rgba(255,255,255,0.92)] h-[88px] relative shrink-0 w-[1440px]" data-name="ResQ/Top Nav">
        <div aria-hidden="true" className="absolute border border-[rgba(4,38,153,0.08)] border-solid inset-0 pointer-events-none" />
        <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[18px] left-[454px] not-italic text-[#080b0d] text-[14px] top-[36px] whitespace-nowrap">Trang chủ</p>
        <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[18px] left-[570px] not-italic text-[#080b0d] text-[14px] top-[36px] whitespace-nowrap">Dịch vụ</p>
        <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[18px] left-[777px] not-italic text-[#080b0d] text-[14px] top-[36px] whitespace-nowrap">Trợ giúp</p>
        <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[18px] left-[669px] not-italic text-[#080b0d] text-[14px] top-[36px] whitespace-nowrap">Theo Dõi</p>
        <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[18px] left-[885px] not-italic text-[#080b0d] text-[14px] top-[36px] whitespace-nowrap">Về chúng tôi</p>
        <PillHotline247Live />
        <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[16px] left-[calc(50%+457px)] not-italic text-[14px] text-black top-[35px] tracking-[1.12px] whitespace-nowrap">Đăng nhập</p>
        <Logo1 />
      </div>
    </div>
  );
}

function Icon15() {
  return (
    <div className="h-full overflow-clip relative w-[62.008px]" data-name="Icon">
      <div className="absolute inset-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-4.3%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50.5059 50.5059">
            <path d={svgPaths.p23d2b500} id="Vector" stroke="var(--stroke-0, #EE3224)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute content-stretch flex flex-col h-[48px] items-start left-[48px] pt-[-7.004px] px-[180.996px] top-[48px] w-[424px]" data-name="Container">
      <div className="flex h-[80.103px] items-center justify-center relative shrink-0 w-full" style={{ containerType: "size", "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none h-[100cqw] rotate-[110.99deg]">
          <Icon15 />
        </div>
      </div>
    </div>
  );
}

function Paragraph55() {
  return (
    <div className="absolute h-[24px] left-[48px] top-[120px] w-[424px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[24px] left-[212.3px] not-italic text-[#080b0d] text-[16px] text-center top-[0.5px] whitespace-nowrap">Đang gửi yêu cầu...</p>
    </div>
  );
}

function Paragraph56() {
  return (
    <div className="absolute h-[19.5px] left-[48px] top-[152px] w-[424px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[19.5px] left-[212.2px] not-italic text-[#a4a4a4] text-[13px] text-center top-[-1px] whitespace-nowrap">Đang tìm Fixer gần bạn nhất</p>
    </div>
  );
}

function Container50() {
  return (
    <div className="bg-white h-[219.5px] relative rounded-[16px] shrink-0 w-[520px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Container51 />
        <Paragraph55 />
        <Paragraph56 />
      </div>
    </div>
  );
}

function ServiceModal() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.5)] content-stretch flex h-[997px] items-center justify-center left-0 px-[419.5px] top-0 w-[1440px]" data-name="ServiceModal">
      <Container50 />
    </div>
  );
}

function Body() {
  return (
    <div className="absolute h-[997px] left-0 overflow-clip top-0 w-[1440px]" data-name="Body">
      <Layout />
      <Group1 />
      <Navbar />
      <ServiceModal />
    </div>
  );
}

export default function ServicesCurrentlySendingARequest() {
  return (
    <div className="bg-white relative size-full" data-name="services ( currently sending a request)">
      <Body />
    </div>
  );
}