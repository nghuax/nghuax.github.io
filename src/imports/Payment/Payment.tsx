import svgPaths from "./svg-64hiks28jl";
import { imgVector } from "./svg-pyhhu";

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
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[67px] left-0 not-italic text-[#080b0d] text-[48px] top-[-0.5px] whitespace-nowrap">Thanh toán</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[20px] left-[84px] top-[162.5px] w-[1191px]" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Light',sans-serif] leading-[20px] left-0 not-italic text-[#080b0d] text-[13px] top-[-0.5px] tracking-[-0.78px] whitespace-nowrap">Chọn phương thức thanh toán phù hợp với bạn</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[18px] left-0 top-0 w-[791px]" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[18px] left-0 not-italic text-[#a4a4a4] text-[12px] top-0 whitespace-nowrap">Phương thức thanh toán</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1a2f0b40} id="Vector" stroke="var(--stroke-0, #EE3224)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 15H10.0083" id="Vector_2" stroke="var(--stroke-0, #EE3224)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[rgba(238,50,36,0.1)] relative rounded-[22px] shrink-0 size-[44px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[12px] relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[21px] left-0 not-italic text-[#080b0d] text-[14px] top-[-1px] whitespace-nowrap">MoMo</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[18px] left-0 not-italic text-[#a4a4a4] text-[12px] top-0 whitespace-nowrap">Ví điện tử MoMo</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="flex-[647_0_0] h-[41px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Paragraph2 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p3de7e600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[#ee3224] relative rounded-[12px] shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[5px] relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white h-[80px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#ee3224] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[22px] py-[2px] relative size-full">
          <Container3 />
          <Container4 />
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1a2f0b40} id="Vector" stroke="var(--stroke-0, #A4A4A4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 15H10.0083" id="Vector_2" stroke="var(--stroke-0, #A4A4A4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[#f3f3f5] relative rounded-[22px] shrink-0 size-[44px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[12px] relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[21px] left-0 not-italic text-[#080b0d] text-[14px] top-[-1px] whitespace-nowrap">ZaloPay</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[18px] left-0 not-italic text-[#a4a4a4] text-[12px] top-0 whitespace-nowrap">Ví điện tử ZaloPay</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="flex-[689_0_0] h-[41px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Paragraph4 />
        <Paragraph5 />
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white h-[78px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(4,38,153,0.08)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[21px] py-px relative size-full">
          <Container6 />
          <Container7 />
        </div>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p16dd5f0} id="Vector" stroke="var(--stroke-0, #A4A4A4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M1.66667 8.33333H18.3333" id="Vector_2" stroke="var(--stroke-0, #A4A4A4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[#f3f3f5] relative rounded-[22px] shrink-0 size-[44px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[12px] relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[21px] left-0 not-italic text-[#080b0d] text-[14px] top-[-1px] whitespace-nowrap">Thẻ ngân hàng</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[18px] left-0 not-italic text-[#a4a4a4] text-[12px] top-0 whitespace-nowrap">Visa, Mastercard, JCB</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="flex-[689_0_0] h-[41px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Paragraph6 />
        <Paragraph7 />
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-white h-[78px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(4,38,153,0.08)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[21px] py-px relative size-full">
          <Container8 />
          <Container9 />
        </div>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p39783000} id="Vector" stroke="var(--stroke-0, #A4A4A4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p25499600} id="Vector_2" stroke="var(--stroke-0, #A4A4A4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M5 10H5.00833M15 10H15.0083" id="Vector_3" stroke="var(--stroke-0, #A4A4A4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-[#f3f3f5] relative rounded-[22px] shrink-0 size-[44px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[12px] relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[21px] left-0 not-italic text-[#080b0d] text-[14px] top-[-1px] whitespace-nowrap">Tiền mặt</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[18px] left-0 not-italic text-[#a4a4a4] text-[12px] top-0 whitespace-nowrap">Thanh toán trực tiếp cho Fixer</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="flex-[689_0_0] h-[41px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Paragraph8 />
        <Paragraph9 />
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-white h-[78px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(4,38,153,0.08)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[21px] py-px relative size-full">
          <Container10 />
          <Container11 />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[338px] items-start left-0 top-[34px] w-[791px]" data-name="Container">
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="absolute h-[18px] left-0 top-0 w-[791px]" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[18px] left-0 not-italic text-[#a4a4a4] text-[12px] top-0 whitespace-nowrap">Mã giảm giá</p>
    </div>
  );
}

function TextInput() {
  return (
    <div className="bg-white flex-[1_0_0] h-[32px] min-h-px min-w-px relative" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[18px] relative size-full">
          <p className="font-['IBM_Plex_Mono:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(10,10,10,0.5)] whitespace-nowrap">RESQ10K</p>
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="flex-[703_0_0] h-[34px] min-h-px min-w-px relative rounded-[10px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip p-px relative rounded-[inherit] size-full">
        <TextInput />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#e8e8e8] h-[34px] relative rounded-[10px] shrink-0 w-[80px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['IBM_Plex_Mono:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">Áp dụng</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[34px] items-start left-0 top-[30px] w-[791px]" data-name="Container">
      <Container14 />
      <Button5 />
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="absolute h-[16.5px] left-0 top-[70px] w-[791px]" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#ee3224] text-[11px] top-0 whitespace-nowrap">Đã áp dụng: Giảm 10.000đ</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute h-[86.5px] left-0 top-[396px] w-[791px]" data-name="Container">
      <Paragraph10 />
      <Container13 />
      <Paragraph11 />
    </div>
  );
}

function Container1() {
  return (
    <div className="flex-[791_0_0] h-[539.5px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph1 />
        <Container2 />
        <Container12 />
      </div>
    </div>
  );
}

function Container15() {
  return <div className="h-[539.5px] shrink-0 w-[360px]" data-name="Container" />;
}

function Container() {
  return (
    <div className="absolute content-stretch flex gap-[40px] h-[539.5px] items-start left-[84px] top-[222.5px] w-[1191px]" data-name="Container">
      <Container1 />
      <Container15 />
    </div>
  );
}

function PaymentPage() {
  return (
    <div className="h-[802px] relative shrink-0 w-[1359px]" data-name="PaymentPage">
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

function Icon6() {
  return (
    <div className="h-[49px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <ClipPathGroup />
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[49px] relative shrink-0 w-[44px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon6 />
      </div>
    </div>
  );
}

function Text() {
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
      <Container18 />
      <Text />
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[20px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.5)] top-[-0.5px] w-[258px]">Dịch vụ cứu hộ xe và sửa chữa tận nơi hàng đầu Việt Nam.</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] h-[139px] items-start left-0 top-0 w-[267.75px]" data-name="Container">
      <Logo />
      <Paragraph12 />
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[21px] left-0 not-italic text-[14px] text-white top-[-1px] whitespace-nowrap">Dịch vụ</p>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.5)] top-[-1px] whitespace-nowrap">Cứu hộ đường dài</p>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.5)] top-[-1px] whitespace-nowrap">Sửa xe tận nơi</p>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.5)] top-[-1px] whitespace-nowrap">Giao xăng tận nhà</p>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.5)] top-[-1px] whitespace-nowrap">Thay ắc quy</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[102px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph14 />
      <Paragraph15 />
      <Paragraph16 />
      <Paragraph17 />
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[139px] items-start left-[307.75px] top-0 w-[267.75px]" data-name="Container">
      <Paragraph13 />
      <Container20 />
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[21px] left-0 not-italic text-[14px] text-white top-[-1px] whitespace-nowrap">Hỗ trợ</p>
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.5)] top-[-1px] whitespace-nowrap">Câu hỏi thường gặp</p>
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.5)] top-[-1px] whitespace-nowrap">Liên hệ</p>
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.5)] top-[-1px] whitespace-nowrap">Điều khoản dịch vụ</p>
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.5)] top-[-1px] whitespace-nowrap">Chính sách bảo mật</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[102px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph19 />
      <Paragraph20 />
      <Paragraph21 />
      <Paragraph22 />
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[139px] items-start left-[615.5px] top-0 w-[267.75px]" data-name="Container">
      <Paragraph18 />
      <Container22 />
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[21px] left-0 not-italic text-[14px] text-white top-[-1px] whitespace-nowrap">Liên hệ</p>
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.5)] top-[-1px] whitespace-nowrap">Hotline: 1900 1234</p>
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.5)] top-[-1px] whitespace-nowrap">Email: support@resq.vn</p>
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.5)] top-[-1px] whitespace-nowrap">TP. Hồ Chí Minh, Việt Nam</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[74.5px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph24 />
      <Paragraph25 />
      <Paragraph26 />
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[139px] items-start left-[923.25px] top-0 w-[267.75px]" data-name="Container">
      <Paragraph23 />
      <Container24 />
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[139px] relative shrink-0 w-full" data-name="Container">
      <Container17 />
      <Container19 />
      <Container21 />
      <Container23 />
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[43px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <p className="-translate-x-1/2 absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[18px] left-[595.59px] not-italic text-[12px] text-[rgba(255,255,255,0.3)] text-center top-[25px] whitespace-nowrap">© 2026 ResQ. Tất cả quyền được bảo lưu.</p>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#080b0d] h-[358px] relative shrink-0 w-[1440px]" data-name="Footer">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[48px] items-start pt-[64px] px-[84px] relative size-full">
        <Container16 />
        <Container25 />
      </div>
    </div>
  );
}

function Layout() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1249px] items-start left-0 pt-[89px] top-0 w-[1440px]" data-name="Layout">
      <PaymentPage />
      <Footer />
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="absolute h-[18px] left-[24px] top-[24px] w-[310px]" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[18px] left-0 not-italic text-[#a4a4a4] text-[12px] top-0 whitespace-nowrap">Chi tiết đơn hàng</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[30px] relative shrink-0 w-[20px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[30px] left-0 not-italic text-[#0a0a0a] text-[20px] top-0 whitespace-nowrap">🔧</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="bg-[rgba(238,50,36,0.08)] relative rounded-[10px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[14px] relative size-full">
        <Text1 />
      </div>
    </div>
  );
}

function Paragraph28() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[21px] left-0 not-italic text-[#080b0d] text-[14px] top-[-1px] whitespace-nowrap">Vá lốp xe máy</p>
    </div>
  );
}

function Paragraph29() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[18px] left-0 not-italic text-[#a4a4a4] text-[12px] top-0 whitespace-nowrap">Honda Wave RSX · 59F1-12345</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[39px] relative shrink-0 w-[194.406px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph28 />
        <Paragraph29 />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[69px] items-center left-[24px] pb-px top-[62px] w-[310px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(4,38,153,0.08)] border-b border-solid inset-0 pointer-events-none" />
      <Container27 />
      <Container28 />
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[21px] relative shrink-0 w-[16.805px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[21px] left-0 not-italic text-[#ee3224] text-[14px] top-[-1px] whitespace-nowrap">TM</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="bg-[rgba(238,50,36,0.08)] relative rounded-[24px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[15.594px] pr-[15.602px] relative size-full">
        <Text2 />
      </div>
    </div>
  );
}

function Paragraph30() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[19.5px] left-0 not-italic text-[#080b0d] text-[13px] top-[-1px] whitespace-nowrap">Trần Văn Minh</p>
    </div>
  );
}

function Paragraph31() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[18px] left-0 not-italic text-[#a4a4a4] text-[12px] top-0 whitespace-nowrap">Fixer · ⭐ 4.8</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[37.5px] relative shrink-0 w-[101.406px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph30 />
        <Paragraph31 />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[69px] items-center left-[24px] pb-px top-[151px] w-[310px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(4,38,153,0.08)] border-b border-solid inset-0 pointer-events-none" />
      <Container30 />
      <Container31 />
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[101.406px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[19.5px] left-0 not-italic text-[#080b0d] text-[13px] top-[-1px] whitespace-nowrap">Vá lốp xe máy</p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[54.602px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[19.5px] left-0 not-italic text-[#080b0d] text-[13px] top-[-1px] whitespace-nowrap">80.000đ</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex h-[19.5px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Text3 />
      <Text4 />
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[171.602px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[19.5px] left-0 not-italic text-[#080b0d] text-[13px] top-[-1px] whitespace-nowrap">Phí di chuyển (3.2 km)</p>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[54.602px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[19.5px] left-0 not-italic text-[#080b0d] text-[13px] top-[-1px] whitespace-nowrap">25.000đ</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex h-[19.5px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Text5 />
      <Text6 />
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[140.406px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[19.5px] left-0 not-italic text-[#ee3224] text-[13px] top-[-1px] whitespace-nowrap">Giảm giá (RESQ10K)</p>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[62.406px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[19.5px] left-0 not-italic text-[#ee3224] text-[13px] top-[-1px] whitespace-nowrap">-10.000đ</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex h-[19.5px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Text7 />
      <Text8 />
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[82.5px] items-start left-[24px] top-[240px] w-[310px]" data-name="Container">
      <Container33 />
      <Container34 />
      <Container35 />
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[36px] relative shrink-0 w-[75.602px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[21px] left-0 not-italic text-[#080b0d] text-[14px] top-[-1px] whitespace-nowrap">Tổng cộng</p>
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[36px] relative shrink-0 w-[100.805px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[36px] left-0 not-italic text-[#ee3224] text-[24px] top-[0.5px] whitespace-nowrap">95.000đ</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute content-stretch flex h-[53px] items-start justify-between left-[24px] pt-[17px] top-[342.5px] w-[310px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(4,38,153,0.08)] border-solid border-t inset-0 pointer-events-none" />
      <Text9 />
      <Text10 />
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute bg-[#ee3224] content-stretch flex h-[50px] items-center justify-center left-[24px] rounded-[10px] top-[419.5px] w-[310px]" data-name="Button">
      <p className="font-['IBM_Plex_Mono:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[1.28px] whitespace-nowrap">Tiếp tục</p>
    </div>
  );
}

function Paragraph32() {
  return (
    <div className="absolute h-[32px] left-[24px] top-[481.5px] w-[310px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[0] left-[155.2px] not-italic text-[#a4a4a4] text-[11px] text-center top-[-0.5px] w-[271px]">
        <span className="leading-[16px]">{`Bằng việc thanh toán, bạn đồng ý với `}</span>
        <span className="leading-[16px] text-[#ee3224]">Điều khoản dịch vụ</span>
        <span className="leading-[16px]">{` của ResQ`}</span>
      </p>
    </div>
  );
}

function PaymentPage1() {
  return (
    <div className="absolute border border-[rgba(4,38,153,0.08)] border-solid h-[539.5px] left-[967px] rounded-[10px] top-[156px] w-[360px]" data-name="PaymentPage">
      <Paragraph27 />
      <Container26 />
      <Container29 />
      <Container32 />
      <Container36 />
      <Button6 />
      <Paragraph32 />
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

export default function Payment() {
  return (
    <div className="bg-white relative size-full" data-name="Payment">
      <Layout />
      <PaymentPage1 />
      <div className="absolute bg-[rgba(255,255,255,0.92)] border border-[rgba(4,38,153,0.08)] border-solid h-[88px] left-0 top-px w-[1440px]" data-name="ResQ/Top Nav">
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