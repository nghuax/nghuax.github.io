import svgPaths from "./svg-p492qzalmb";
import { imgVector } from "./svg-9nui3";

function Icon() {
  return (
    <div className="absolute left-0 size-[16px] top-[1.75px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M10 12L6 8L10 4" id="Vector" stroke="var(--stroke-0, #A4A4A4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute h-[19.5px] left-[84px] top-[40px] w-[82.406px]" data-name="Button">
      <Icon />
      <p className="-translate-x-1/2 absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[19.5px] left-[51.5px] not-italic text-[#a4a4a4] text-[13px] text-center top-[-1px] whitespace-nowrap">{` Quay lại`}</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[67px] left-[84px] top-[83.5px] w-[1191px]" data-name="Heading 1">
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[67px] left-0 not-italic text-[#080b0d] text-[48px] top-[-0.5px] whitespace-nowrap">Tài khoản</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[20px] left-[84px] top-[162.5px] w-[1191px]" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Light',sans-serif] leading-[20px] left-0 not-italic text-[#080b0d] text-[13px] top-[-0.5px] tracking-[-0.78px] whitespace-nowrap">Quản lý thông tin cá nhân và xe của bạn</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Icon">
          <path d={svgPaths.p843c990} id="Vector" stroke="var(--stroke-0, #EE3224)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
          <path d={svgPaths.p1848f500} id="Vector_2" stroke="var(--stroke-0, #EE3224)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[rgba(238,50,36,0.1)] relative rounded-[24px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[13px] relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[21px] left-0 not-italic text-[#080b0d] text-[14px] top-[-1px] whitespace-nowrap">Nguyễn Văn An</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[18px] left-0 not-italic text-[#a4a4a4] text-[12px] top-0 whitespace-nowrap">0901 234 567</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[39px] relative shrink-0 w-[109.203px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph1 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[12px] h-[48px] items-center relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <Container4 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[18px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[62.5%_20.83%_12.5%_20.83%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 6">
            <path d={svgPaths.p1aa9a240} id="Vector" stroke="var(--stroke-0, #A4A4A4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_33.33%_54.17%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5 7.5">
            <path d={svgPaths.p16c95800} id="Vector" stroke="var(--stroke-0, #A4A4A4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[16px] size-[18px] top-[12.75px]" data-name="Text">
      <Icon2 />
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute h-[43.5px] left-0 rounded-[10px] top-0 w-[240px]" data-name="Button">
      <Text />
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[19.5px] left-[46px] not-italic text-[#080b0d] text-[13px] top-[11px] whitespace-nowrap">Thông tin cá nhân</p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[18px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[29.17%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-10%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 9">
            <path d={svgPaths.p1fd39b80} id="Vector" stroke="var(--stroke-0, #A4A4A4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[62.5%_62.5%_20.83%_20.83%]" data-name="Vector">
        <div className="absolute inset-[-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 4.5">
            <path d={svgPaths.p2c328e80} id="Vector" stroke="var(--stroke-0, #A4A4A4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[70.83%_37.5%_29.17%_37.5%]" data-name="Vector">
        <div className="absolute inset-[-0.75px_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1.5">
            <path d="M0.75 0.75H5.25" id="Vector" stroke="var(--stroke-0, #A4A4A4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[62.5%_20.83%_20.83%_62.5%]" data-name="Vector">
        <div className="absolute inset-[-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 4.5">
            <path d={svgPaths.p2c328e80} id="Vector" stroke="var(--stroke-0, #A4A4A4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[16px] size-[18px] top-[12.75px]" data-name="Text">
      <Icon3 />
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute h-[43.5px] left-0 rounded-[10px] top-[47.5px] w-[240px]" data-name="Button">
      <Text1 />
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[19.5px] left-[46px] not-italic text-[#080b0d] text-[13px] top-[11px] whitespace-nowrap">Xe của tôi</p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[18px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[87.5%_42.78%_8.33%_42.78%]" data-name="Vector">
        <div className="absolute inset-[-100.03%_-28.87%_-100.01%_-28.87%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.09825 2.25006">
            <path d={svgPaths.p39ea380} id="Vector" stroke="var(--stroke-0, #EE3224)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_12.5%_29.17%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-6.67%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.9997 12.75">
            <path d={svgPaths.p32261800} id="Vector" stroke="var(--stroke-0, #EE3224)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[16px] size-[18px] top-[12.75px]" data-name="Text">
      <Icon4 />
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-[rgba(238,50,36,0.06)] h-[43.5px] left-0 rounded-[10px] top-[95px] w-[240px]" data-name="Button">
      <Text2 />
      <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[19.5px] left-[46px] not-italic text-[#ee3224] text-[13px] top-[11px] whitespace-nowrap">Thông báo</p>
    </div>
  );
}

function Icon5() {
  return (
    <div className="h-[18px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_16.67%_8.32%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-5%_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 16.5025">
            <path d={svgPaths.p15617df0} id="Vector" stroke="var(--stroke-0, #A4A4A4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[16px] size-[18px] top-[12.75px]" data-name="Text">
      <Icon5 />
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute h-[43.5px] left-0 rounded-[10px] top-[142.5px] w-[240px]" data-name="Button">
      <Text3 />
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[19.5px] left-[46px] not-italic text-[#080b0d] text-[13px] top-[11px] whitespace-nowrap">Bảo mật</p>
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-[16px] size-[18px] top-[12.75px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p3d8d0000} id="Vector" stroke="var(--stroke-0, #EE3224)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M12 12.75L15.75 9L12 5.25" id="Vector_2" stroke="var(--stroke-0, #EE3224)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M15.75 9H6.75" id="Vector_3" stroke="var(--stroke-0, #EE3224)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute h-[43.5px] left-0 rounded-[10px] top-[202px] w-[240px]" data-name="Button">
      <Icon6 />
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[19.5px] left-[46px] not-italic text-[#ee3224] text-[13px] top-[11px] whitespace-nowrap">{` Đăng xuất`}</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[245.5px] relative shrink-0 w-full" data-name="Container">
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
      <Button5 />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[426px] relative shrink-0 w-[240px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start relative size-full">
        <Container2 />
        <Container5 />
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[24px] left-[25px] top-[25px] w-[869px]" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#080b0d] text-[16px] top-[0.5px] whitespace-nowrap">Cài đặt thông báo</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[18px] left-[25px] top-[53px] w-[869px]" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[18px] left-0 not-italic text-[#a4a4a4] text-[12px] top-0 whitespace-nowrap">Chọn cách bạn muốn nhận thông báo</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[19.5px] left-0 not-italic text-[#080b0d] text-[13px] top-[-1px] whitespace-nowrap">Thông báo đẩy</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[18px] left-0 not-italic text-[#a4a4a4] text-[12px] top-0 whitespace-nowrap">Nhận thông báo trên điện thoại</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[39.5px] items-start left-0 top-[12px] w-[216px]" data-name="Container">
      <Paragraph5 />
      <Paragraph6 />
    </div>
  );
}

function Container10() {
  return <div className="bg-white h-[18px] rounded-[9px] shrink-0 w-full" data-name="Container" />;
}

function Button6() {
  return (
    <div className="absolute bg-[#ee3224] content-stretch flex flex-col h-[24px] items-start left-[825px] pl-[23px] pr-[3px] pt-[3px] rounded-[999px] top-[19.75px] w-[44px]" data-name="Button">
      <Container10 />
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[64.5px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(4,38,153,0.08)] border-b border-solid inset-0 pointer-events-none" />
      <Container9 />
      <Button6 />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[19.5px] left-0 not-italic text-[#080b0d] text-[13px] top-[-1px] whitespace-nowrap">Tin nhắn SMS</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[18px] left-0 not-italic text-[#a4a4a4] text-[12px] top-0 whitespace-nowrap">Nhận tin nhắn qua số điện thoại</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[39.5px] items-start left-0 top-[12px] w-[223.203px]" data-name="Container">
      <Paragraph7 />
      <Paragraph8 />
    </div>
  );
}

function Container13() {
  return <div className="bg-white h-[18px] rounded-[9px] shrink-0 w-full" data-name="Container" />;
}

function Button7() {
  return (
    <div className="absolute bg-[#ee3224] content-stretch flex flex-col h-[24px] items-start left-[825px] pl-[23px] pr-[3px] pt-[3px] rounded-[999px] top-[19.75px] w-[44px]" data-name="Button">
      <Container13 />
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[64.5px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(4,38,153,0.08)] border-b border-solid inset-0 pointer-events-none" />
      <Container12 />
      <Button7 />
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[19.5px] left-0 not-italic text-[#080b0d] text-[13px] top-[-1px] whitespace-nowrap">Email</p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[18px] left-0 not-italic text-[#a4a4a4] text-[12px] top-0 whitespace-nowrap">Nhận thông báo qua email</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[39.5px] items-start left-0 top-[12px] w-[172.805px]" data-name="Container">
      <Paragraph9 />
      <Paragraph10 />
    </div>
  );
}

function Container16() {
  return <div className="bg-white h-[18px] rounded-[9px] shrink-0 w-full" data-name="Container" />;
}

function Button8() {
  return (
    <div className="absolute bg-[#d9d9d9] content-stretch flex flex-col h-[24px] items-start left-[825px] pl-[3px] pr-[23px] pt-[3px] rounded-[999px] top-[19.75px] w-[44px]" data-name="Button">
      <Container16 />
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[64.5px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(4,38,153,0.08)] border-b border-solid inset-0 pointer-events-none" />
      <Container15 />
      <Button8 />
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[19.5px] left-0 not-italic text-[#080b0d] text-[13px] top-[-1px] whitespace-nowrap">Khuyến mãi</p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[18px] left-0 not-italic text-[#a4a4a4] text-[12px] top-0 whitespace-nowrap">Nhận ưu đãi và mã giảm giá</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[39.5px] items-start left-0 top-[12px] w-[187.203px]" data-name="Container">
      <Paragraph11 />
      <Paragraph12 />
    </div>
  );
}

function Container19() {
  return <div className="bg-white h-[18px] rounded-[9px] shrink-0 w-full" data-name="Container" />;
}

function Button9() {
  return (
    <div className="absolute bg-[#ee3224] content-stretch flex flex-col h-[24px] items-start left-[825px] pl-[23px] pr-[3px] pt-[3px] rounded-[999px] top-[19.75px] w-[44px]" data-name="Button">
      <Container19 />
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[64.5px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(4,38,153,0.08)] border-b border-solid inset-0 pointer-events-none" />
      <Container18 />
      <Button9 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[306px] items-start left-[25px] top-[95px] w-[869px]" data-name="Container">
      <Container8 />
      <Container11 />
      <Container14 />
      <Container17 />
    </div>
  );
}

function Container6() {
  return (
    <div className="flex-[1_0_0] h-[426px] min-h-px min-w-px relative rounded-[10px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(4,38,153,0.08)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph3 />
        <Paragraph4 />
        <Container7 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex gap-[32px] h-[426px] items-start left-[84px] top-[222.5px] w-[1191px]" data-name="Container">
      <Container1 />
      <Container6 />
    </div>
  );
}

function AccountPage1() {
  return (
    <div className="h-[688.5px] relative shrink-0 w-[1359px]" data-name="AccountPage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Button />
        <Heading />
        <Paragraph />
        <Container />
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
      <div className="absolute inset-[-0.01%_11.64%_10.66%_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0.003px] mask-size-[44px_49px]" data-name="Vector" style={{ maskImage: `url('${imgVector}')` }}>
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

function Icon7() {
  return (
    <div className="h-[49px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <ClipPathGroup />
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[49px] relative shrink-0 w-[44px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon7 />
      </div>
    </div>
  );
}

function Text4() {
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
      <Container22 />
      <Text4 />
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[20px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.5)] top-[-0.5px] w-[258px]">Dịch vụ cứu hộ xe và sửa chữa tận nơi hàng đầu Việt Nam.</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] h-[139px] items-start left-0 top-0 w-[267.75px]" data-name="Container">
      <Logo />
      <Paragraph13 />
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[21px] left-0 not-italic text-[14px] text-white top-[-1px] whitespace-nowrap">Dịch vụ</p>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.5)] top-[-1px] whitespace-nowrap">Cứu hộ đường dài</p>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.5)] top-[-1px] whitespace-nowrap">Sửa xe tận nơi</p>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.5)] top-[-1px] whitespace-nowrap">Giao xăng tận nhà</p>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.5)] top-[-1px] whitespace-nowrap">Thay ắc quy</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[102px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph15 />
      <Paragraph16 />
      <Paragraph17 />
      <Paragraph18 />
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[139px] items-start left-[307.75px] top-0 w-[267.75px]" data-name="Container">
      <Paragraph14 />
      <Container24 />
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[21px] left-0 not-italic text-[14px] text-white top-[-1px] whitespace-nowrap">Hỗ trợ</p>
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.5)] top-[-1px] whitespace-nowrap">Câu hỏi thường gặp</p>
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.5)] top-[-1px] whitespace-nowrap">Liên hệ</p>
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.5)] top-[-1px] whitespace-nowrap">Điều khoản dịch vụ</p>
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.5)] top-[-1px] whitespace-nowrap">Chính sách bảo mật</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[102px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph20 />
      <Paragraph21 />
      <Paragraph22 />
      <Paragraph23 />
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[139px] items-start left-[615.5px] top-0 w-[267.75px]" data-name="Container">
      <Paragraph19 />
      <Container26 />
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[21px] left-0 not-italic text-[14px] text-white top-[-1px] whitespace-nowrap">Liên hệ</p>
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.5)] top-[-1px] whitespace-nowrap">Hotline: 1900 1234</p>
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.5)] top-[-1px] whitespace-nowrap">Email: support@resq.vn</p>
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.5)] top-[-1px] whitespace-nowrap">TP. Hồ Chí Minh, Việt Nam</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[74.5px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph25 />
      <Paragraph26 />
      <Paragraph27 />
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[139px] items-start left-[923.25px] top-0 w-[267.75px]" data-name="Container">
      <Paragraph24 />
      <Container28 />
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[139px] relative shrink-0 w-full" data-name="Container">
      <Container21 />
      <Container23 />
      <Container25 />
      <Container27 />
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[43px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <p className="-translate-x-1/2 absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[18px] left-[595.59px] not-italic text-[12px] text-[rgba(255,255,255,0.3)] text-center top-[25px] whitespace-nowrap">© 2026 ResQ. Tất cả quyền được bảo lưu.</p>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#080b0d] h-[358px] relative shrink-0 w-full" data-name="Footer">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[48px] items-start pt-[64px] px-[84px] relative size-full">
        <Container20 />
        <Container29 />
      </div>
    </div>
  );
}

function Layout() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1136px] items-start left-0 pt-[89px] top-0 w-[1439px]" data-name="Layout">
      <AccountPage1 />
      <Footer />
    </div>
  );
}

function PillHotline247Live() {
  return (
    <div className="absolute bg-[#ee3224] h-[34px] left-[1286px] overflow-clip rounded-[999px] top-[26px] w-[122px]" data-name="Pill/Hotline 24/7 / Live">
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
    <div className="absolute contents left-[83px] top-[18px]" data-name="Logo">
      <Layer />
      <p className="absolute font-['Syne:ExtraBold',sans-serif] font-extrabold leading-[32px] left-[118px] text-[#ee3224] text-[30px] top-[35px] whitespace-nowrap">esQ</p>
    </div>
  );
}

export default function AccountPage() {
  return (
    <div className="bg-white relative size-full" data-name="Account Page">
      <Layout />
      <div className="absolute bg-[rgba(255,255,255,0.92)] border border-[rgba(4,38,153,0.08)] border-solid h-[88px] left-[-1px] top-0 w-[1440px]" data-name="ResQ/Top Nav">
        <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[18px] left-[453px] not-italic text-[#080b0d] text-[14px] top-[35px] whitespace-nowrap">Trang chủ</p>
        <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[18px] left-[569px] not-italic text-[#080b0d] text-[14px] top-[35px] whitespace-nowrap">Dịch vụ</p>
        <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[18px] left-[776px] not-italic text-[#080b0d] text-[14px] top-[35px] whitespace-nowrap">Trợ giúp</p>
        <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[18px] left-[668px] not-italic text-[#080b0d] text-[14px] top-[35px] whitespace-nowrap">Theo Dõi</p>
        <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[18px] left-[884px] not-italic text-[#080b0d] text-[14px] top-[35px] whitespace-nowrap">Về chúng tôi</p>
        <PillHotline247Live />
        <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[16px] left-[calc(50%+457px)] not-italic text-[14px] text-black top-[34px] tracking-[1.12px] whitespace-nowrap">Đăng nhập</p>
        <Logo1 />
      </div>
    </div>
  );
}