import { useState } from "react";
import { ChevronDown, ChevronUp, Clock3, Mail, MapPin, PhoneCall } from "lucide-react";
import { MapEmbed } from "./MapEmbed";

const mono = "font-['IBM_Plex_Mono',monospace]";

const faqs = [
  { q: "ResQ hoạt động như thế nào?", a: "Bạn chỉ cần chọn dịch vụ, chia sẻ vị trí và thông tin xe. Hệ thống sẽ tự động kết nối bạn với Fixer gần nhất. Fixer sẽ đến trong 15-30 phút." },
  { q: "Phí dịch vụ được tính như thế nào?", a: "Phí dịch vụ bao gồm phí cơ bản theo loại dịch vụ + phí di chuyển theo khoảng cách. Bạn sẽ thấy giá ước tính trước khi xác nhận yêu cầu." },
  { q: "Tôi có thể hủy yêu cầu không?", a: "Bạn có thể hủy yêu cầu miễn phí trước khi Fixer xác nhận. Sau khi Fixer đã nhận, phí hủy sẽ áp dụng." },
  { q: "ResQ có hoạt động 24/7 không?", a: "Có, ResQ hoạt động 24 giờ mỗi ngày, 7 ngày trong tuần, kể cả ngày lễ và cuối tuần." },
  { q: "Làm sao để trở thành Fixer?", a: "Bạn có thể đăng ký làm Fixer trên trang web hoặc ứng dụng của chúng tôi. Yêu cầu cơ bản: có kinh nghiệm sửa xe, giấy phép hành nghề và phương tiện di chuyển." },
  { q: "Phương thức thanh toán nào được chấp nhận?", a: "ResQ chấp nhận thanh toán qua MoMo, ZaloPay, thẻ ngân hàng (Visa, Mastercard, JCB) và tiền mặt." },
];

export default function HelpPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const supportItems = [
    {
      icon: PhoneCall,
      label: "Hotline",
      value: "1900 1234",
      href: "tel:19001234",
    },
    {
      icon: Mail,
      label: "Email",
      value: "support@resq.vn",
      href: "mailto:support@resq.vn",
    },
    {
      icon: Clock3,
      label: "Thời gian hỗ trợ",
      value: "24/7, kể cả ngày lễ",
    },
    {
      icon: MapPin,
      label: "Khu vực ưu tiên",
      value: "TP. Hồ Chí Minh và các tuyến liên tỉnh",
    },
  ];

  return (
    <div className="bg-white px-5 pt-10 pb-16 sm:px-8 sm:pt-14 sm:pb-20 lg:px-[84px] xl:px-[120px]">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-10 max-w-[620px] sm:mb-12">
          <p className={`${mono} mb-4 text-[12px] font-[500] uppercase tracking-[1.8px] text-[#ee3224] sm:text-[13px]`}>
            Hỗ trợ khách hàng
          </p>
          <h1 className={`${mono} mb-[8px] text-[36px] font-[700] text-[#080b0d] sm:text-[44px] lg:text-[48px]`}>
            Trợ giúp
          </h1>
          <p className={`${mono} text-[14px] leading-[24px] text-[#4a5565] sm:text-[15px]`}>
            Câu hỏi thường gặp, thông tin liên hệ và bản đồ khu vực hỗ trợ để bạn
            kết nối với ResQ nhanh hơn khi cần.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
          <div className="rounded-[20px] border border-[rgba(4,38,153,0.08)] bg-white p-5 shadow-[0_18px_50px_rgba(8,11,13,0.04)] sm:p-7 lg:p-8">
            {faqs.map((faq, i) => (
              <div key={faq.q} className="border-b border-[rgba(4,38,153,0.08)] last:border-b-0">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="flex w-full items-start justify-between gap-4 border-0 bg-transparent py-[20px] text-left cursor-pointer"
                >
                  <span className={`${mono} pr-4 text-[15px] font-[500] leading-[24px] text-[#080b0d] sm:text-[16px]`}>
                    {faq.q}
                  </span>
                  {openIndex === i ? (
                    <ChevronUp size={20} className="shrink-0 text-[#ee3224]" />
                  ) : (
                    <ChevronDown size={20} className="shrink-0 text-[#a4a4a4]" />
                  )}
                </button>
                {openIndex === i && (
                  <p className={`${mono} pb-[20px] text-[14px] leading-[24px] text-[#4a5565]`}>
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>

          <aside className="space-y-6 lg:sticky lg:top-[108px]">
            <div className="rounded-[20px] bg-[#f7f7f8] p-6 sm:p-8">
              <h2 className={`${mono} mb-[8px] text-[24px] font-[700] text-[#080b0d]`}>
                Vẫn cần hỗ trợ?
              </h2>
              <p className={`${mono} mb-6 text-[14px] leading-[24px] text-[#4a5565]`}>
                Liên hệ đội ngũ ResQ qua hotline hoặc email để được tư vấn nhanh hơn.
              </p>
              <div className="space-y-4">
                {supportItems.map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <div className="flex items-start gap-4 rounded-[16px] bg-white px-4 py-4">
                      <div className="mt-1 flex size-[40px] shrink-0 items-center justify-center rounded-full bg-[rgba(238,50,36,0.1)]">
                        <Icon size={18} className="text-[#ee3224]" />
                      </div>
                      <div className="min-w-0">
                        <p className={`${mono} mb-1 text-[12px] uppercase tracking-[1.2px] text-[#99a1af]`}>
                          {item.label}
                        </p>
                        <p className={`${mono} text-[14px] leading-[22px] text-[#080b0d]`}>
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );

                  return item.href ? (
                    <a key={item.label} href={item.href} className="block no-underline">
                      {content}
                    </a>
                  ) : (
                    <div key={item.label}>{content}</div>
                  );
                })}
              </div>
            </div>

            <div className="overflow-hidden rounded-[20px] border border-[rgba(4,38,153,0.08)] bg-white shadow-[0_18px_50px_rgba(8,11,13,0.04)]">
              <div className="p-6 sm:p-7">
                <h3 className={`${mono} mb-[8px] text-[18px] font-[700] text-[#080b0d]`}>
                  Khu vực hỗ trợ nổi bật
                </h3>
                <p className={`${mono} text-[13px] leading-[22px] text-[#4a5565]`}>
                  Bản đồ tham chiếu cho cụm điều phối ResQ tại TP. Hồ Chí Minh.
                </p>
              </div>
              <MapEmbed
                className="h-[260px] rounded-none border-0 shadow-none"
                lat={10.7769}
                lng={106.7009}
                zoom={12}
                label="ResQ Hub TP. Hồ Chí Minh"
                description="Điểm điều phối và hỗ trợ khách hàng trọng điểm."
              />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
