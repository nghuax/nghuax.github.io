import { Link } from "react-router";
import {
  BadgeCheck,
  Bike,
  Car,
  ChevronLeft,
  ClipboardList,
  Clock3,
  CreditCard,
  MapPin,
  PhoneCall,
  ShieldCheck,
  Truck,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { TrackingLiveMap } from "./tracking/TrackingLiveMap";
import { useResQStore, type ActiveResQRequest } from "./resqStore";
import { HO_CHI_MINH_CITY_FALLBACK } from "./tracking/tracking-utils";

const mono = "font-['IBM_Plex_Mono',monospace]";
const pagePadding = "px-5 sm:px-8 lg:px-[84px] xl:px-[120px]";
const pageShell = "mx-auto w-full max-w-[1240px]";

const waitingTips = [
  "Giữ điện thoại sẵn sàng để fixer có thể liên hệ khi cần.",
  "Di chuyển xe vào vị trí an toàn nếu điều kiện giao thông cho phép.",
  "Chuẩn bị thông tin xe để quá trình hỗ trợ diễn ra nhanh hơn.",
];

const fallbackRequest: ActiveResQRequest = {
  id: "RSQ-330993",
  serviceId: "va-lop",
  serviceTitle: "Vá lốp khẩn cấp",
  servicePrice: "Từ 50.000đ",
  serviceEta: "15-20 phút",
  vehicleId: "wave-rsx",
  vehicleName: "Honda Wave RSX",
  vehiclePlate: "59F1-12345",
  vehicleType: "Xe máy",
  locationAddress: "TP. Hồ Chí Minh",
  locationPoint: HO_CHI_MINH_CITY_FALLBACK,
  locationSource: "fallback",
  notes: "",
  createdAt: new Date().toISOString(),
  fixerTeam: "Đội lưu động ResQ 07",
  fixerVehicle: "Box van cứu hộ",
  status: "Đang tiếp cận",
};

export default function TrackingPage() {
  const { activeRequest } = useResQStore();
  const request = activeRequest ?? fallbackRequest;
  const quickStats = [
    { label: "Mã yêu cầu", value: request.id },
    { label: "Dịch vụ", value: request.serviceTitle },
    { label: "ETA dự kiến", value: request.serviceEta },
  ];
  const trackingHighlights = [
    { label: "Xe đã chọn", value: request.vehicleType },
    { label: "ETA hiện tại", value: request.serviceEta },
    { label: "Trạng thái", value: request.status },
  ];
  const VehicleIcon = request.vehicleType === "Xe máy" ? Bike : Car;
  const serviceProgress = getServiceProgress(request.status);

  return (
    <div className="overflow-x-hidden bg-white">
      <div className={`${pagePadding} pt-10 pb-16 sm:pt-14 sm:pb-20`}>
        <div className={pageShell}>
          <Link
            to="/"
            className={`mb-[16px] inline-flex items-center gap-[4px] text-[13px] font-[500] text-[#a4a4a4] no-underline transition-colors hover:text-[#080b0d] ${mono}`}
          >
            <ChevronLeft size={16} />
            Quay lại
          </Link>

          <div className="resq-reveal mb-8 max-w-[700px] sm:mb-10">
            <p className={`${mono} mb-4 text-[12px] font-[500] uppercase tracking-[1.8px] text-[#ee3224] sm:text-[13px]`}>
              Theo dõi cứu hộ
            </p>
            <h1 className={`${mono} mb-[10px] text-[36px] font-[700] text-[#080b0d] sm:text-[44px] lg:text-[48px]`}>
              Theo dõi fixer theo thời gian thực
            </h1>
            <p className={`${mono} text-[14px] leading-[24px] text-[#4a5565] sm:text-[15px]`}>
              Bản đồ theo dõi được làm lại để đồng bộ hơn với ResQ: rõ ETA,
              rõ trạng thái, rõ lộ trình và giữ trải nghiệm gọn gàng trên cả
              desktop lẫn mobile.
            </p>
          </div>

          <div className="mb-6 grid gap-4 sm:grid-cols-3">
            {quickStats.map((item) => (
              <div
                key={item.label}
                className="resq-reveal resq-card-lift rounded-[16px] border border-[rgba(4,38,153,0.08)] bg-[#f7f7f8] px-5 py-4"
              >
                <p className={`${mono} mb-2 text-[11px] uppercase tracking-[1.4px] text-[#99a1af]`}>
                  {item.label}
                </p>
                <p className={`${mono} text-[16px] font-[700] text-[#080b0d]`}>
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          <div className="resq-reveal resq-reveal--delay-1 mb-6 rounded-[20px] border border-[rgba(4,38,153,0.08)] bg-white p-5 shadow-[0_18px_50px_rgba(8,11,13,0.04)] sm:p-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div className="min-w-0">
                <div className="mb-3 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#ee3224] px-3 py-1.5">
                    <BadgeCheck size={14} className="text-white" />
                    <span className={`${mono} text-[11px] uppercase tracking-[0.16em] text-white`}>
                      ResQ đang di chuyển
                    </span>
                  </span>
                  <span className={`${mono} inline-flex items-center rounded-full border border-[rgba(4,38,153,0.08)] bg-[#f7f7f8] px-3 py-1.5 text-[11px] uppercase tracking-[0.16em] text-[#4a5565]`}>
                    GPS trực tiếp
                  </span>
                  <span className={`${mono} inline-flex items-center rounded-full border border-[rgba(4,38,153,0.08)] bg-[#f7f7f8] px-3 py-1.5 text-[11px] uppercase tracking-[0.16em] text-[#4a5565]`}>
                    Tuyến đường mô phỏng
                  </span>
                </div>

                <p className={`${mono} text-[24px] font-[700] leading-[1.2] text-[#080b0d] sm:text-[28px]`}>
                  Xe ResQ đang trên đường đến bạn
                </p>
                <p className={`${mono} mt-2 max-w-[640px] text-[13px] leading-[23px] text-[#4a5565] sm:text-[14px] sm:leading-[24px]`}>
                  Theo dõi yêu cầu {request.id} với dịch vụ {request.serviceTitle.toLowerCase()},
                  phương tiện {request.vehicleName} và điểm hẹn đã xác nhận trong
                  lúc tạo đơn.
                </p>
              </div>

              <div className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-[rgba(238,50,36,0.1)] px-4 py-2.5">
                <Truck size={16} className="text-[#ee3224]" />
                <span className={`${mono} text-[11px] uppercase tracking-[0.18em] text-[#ee3224]`}>
                  {request.fixerTeam}
                </span>
              </div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {trackingHighlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[16px] border border-[rgba(4,38,153,0.08)] bg-[#f7f7f8] px-4 py-4"
                >
                  <p className={`${mono} text-[11px] uppercase tracking-[0.18em] text-[#99a1af]`}>
                    {item.label}
                  </p>
                  <p className={`${mono} mt-2 text-[19px] font-[700] leading-none text-[#080b0d]`}>
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
            <div className="min-w-0">
              <div className="resq-reveal resq-reveal--delay-2">
                <TrackingLiveMap destinationPoint={request.locationPoint} />
              </div>

              <div className="resq-reveal resq-reveal--delay-2 mt-5 rounded-[20px] border border-[rgba(4,38,153,0.08)] bg-white p-5 shadow-[0_18px_50px_rgba(8,11,13,0.04)] sm:p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0">
                    <p className={`${mono} text-[12px] uppercase tracking-[0.16em] text-[#99a1af]`}>
                      Tiến độ dịch vụ
                    </p>
                    <h2 className={`${mono} mt-2 text-[20px] font-[700] text-[#080b0d]`}>
                      Theo dõi từng bước hỗ trợ
                    </h2>
                    <p className={`${mono} mt-2 max-w-[640px] text-[13px] leading-[22px] text-[#4a5565]`}>
                      Bạn có thể thanh toán trước để tiết kiệm thời gian khi fixer hoàn tất hỗ trợ tại chỗ.
                    </p>
                  </div>

                  <div className="inline-flex w-fit items-center rounded-full bg-[rgba(238,50,36,0.08)] px-3 py-2">
                    <span className={`${mono} text-[11px] uppercase tracking-[0.16em] text-[#ee3224]`}>
                      {serviceProgress.progressLabel}
                    </span>
                  </div>
                </div>

                <div className="mt-5">
                  <div className="h-[10px] overflow-hidden rounded-full bg-[#f1f2f4]">
                    <div
                      className="h-full rounded-full bg-[linear-gradient(90deg,#ee3224_0%,#ff7d6f_100%)] transition-all duration-500"
                      style={{ width: `${serviceProgress.percent}%` }}
                    />
                  </div>

                  <div className="mt-4 grid gap-3 sm:grid-cols-4">
                    {serviceProgress.steps.map((step, index) => {
                      const isComplete = index < serviceProgress.currentIndex;
                      const isCurrent = index === serviceProgress.currentIndex;

                      return (
                        <div
                          key={step.label}
                          className={`rounded-[16px] border px-4 py-4 ${
                            isCurrent
                              ? "border-[#ee3224] bg-[rgba(238,50,36,0.06)]"
                              : isComplete
                                ? "border-[rgba(238,50,36,0.12)] bg-white"
                                : "border-[rgba(4,38,153,0.08)] bg-[#f7f7f8]"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`flex size-[28px] shrink-0 items-center justify-center rounded-full ${
                                isCurrent || isComplete ? "bg-[#ee3224]" : "bg-white"
                              }`}
                            >
                              <span
                                className={`${mono} text-[11px] font-[700] ${
                                  isCurrent || isComplete ? "text-white" : "text-[#99a1af]"
                                }`}
                              >
                                {index + 1}
                              </span>
                            </div>
                            <p className={`${mono} text-[12px] font-[500] text-[#080b0d]`}>
                              {step.label}
                            </p>
                          </div>
                          <p className={`${mono} mt-3 text-[12px] leading-[20px] text-[#4a5565]`}>
                            {step.detail}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="rounded-[16px] bg-[#f7f7f8] px-4 py-3">
                    <p className={`${mono} text-[11px] uppercase tracking-[0.16em] text-[#99a1af]`}>
                      Sẵn sàng thanh toán
                    </p>
                    <p className={`${mono} mt-2 text-[14px] font-[500] text-[#080b0d]`}>
                      Hoàn tất trước, fixer vẫn tiếp tục hỗ trợ bình thường.
                    </p>
                  </div>

                  <Link
                    to="/thanh-toan"
                    className="inline-flex h-[48px] items-center justify-center gap-2 rounded-[12px] bg-[#ee3224] px-6 no-underline transition-colors hover:bg-[#d42b1e]"
                  >
                    <CreditCard size={18} className="text-white" />
                    <span className={`${mono} text-[14px] font-[500] text-white`}>
                      Thanh Toán
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            <aside className="space-y-5 lg:sticky lg:top-[108px]">
              <div className="resq-reveal resq-card-lift rounded-[20px] border border-[rgba(4,38,153,0.08)] bg-white p-6 shadow-[0_18px_50px_rgba(8,11,13,0.04)]">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex size-[42px] items-center justify-center rounded-full bg-[rgba(238,50,36,0.1)]">
                    <Truck size={18} className="text-[#ee3224]" />
                  </div>
                  <div>
                    <p className={`${mono} text-[12px] uppercase tracking-[1.4px] text-[#99a1af]`}>
                      Fixer phụ trách
                    </p>
                    <p className={`${mono} text-[15px] font-[700] text-[#080b0d]`}>
                      {request.fixerTeam}
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <InfoRow icon={ShieldCheck} label="Phương tiện" value={request.fixerVehicle} />
                  <InfoRow icon={Clock3} label="Phản hồi" value="Cập nhật liên tục" />
                  <InfoRow icon={PhoneCall} label="Hotline" value="1900 1234" />
                </div>
              </div>

              <div className="resq-reveal resq-reveal--delay-1 resq-card-lift rounded-[20px] border border-[rgba(4,38,153,0.08)] bg-white p-6 shadow-[0_18px_50px_rgba(8,11,13,0.04)]">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex size-[42px] items-center justify-center rounded-full bg-[rgba(238,50,36,0.1)]">
                    <ClipboardList size={18} className="text-[#ee3224]" />
                  </div>
                  <div>
                    <p className={`${mono} text-[12px] uppercase tracking-[1.4px] text-[#99a1af]`}>
                      Chi tiết yêu cầu
                    </p>
                    <p className={`${mono} text-[15px] font-[700] text-[#080b0d]`}>
                      Hỗ trợ đang xử lý
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <InfoRow icon={Wrench} label="Dịch vụ" value={request.serviceTitle} />
                  <InfoRow
                    icon={VehicleIcon}
                    label="Xe"
                    value={`${request.vehicleName} · ${request.vehiclePlate}`}
                  />
                  <InfoRow icon={MapPin} label="Điểm hẹn" value={request.locationAddress} />
                  {request.notes && (
                    <InfoRow icon={Clock3} label="Ghi chú" value={request.notes} />
                  )}
                </div>
              </div>

              <div className="resq-reveal resq-reveal--delay-2 resq-card-lift rounded-[20px] bg-[#f7f7f8] p-6">
                <p className={`${mono} mb-4 text-[12px] font-[500] uppercase tracking-[1.4px] text-[#99a1af]`}>
                  Lưu ý khi chờ hỗ trợ
                </p>
                <div className="space-y-3">
                  {waitingTips.map((tip) => (
                    <div key={tip} className="flex items-start gap-3">
                      <span className="mt-[8px] size-[8px] shrink-0 rounded-full bg-[#ee3224]" />
                      <p className={`${mono} text-[13px] leading-[22px] text-[#4a5565]`}>
                        {tip}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3 rounded-[14px] bg-[#f7f7f8] px-4 py-3">
      <div className="mt-[2px] flex size-[34px] shrink-0 items-center justify-center rounded-full bg-white">
        <Icon size={15} className="text-[#ee3224]" />
      </div>
      <div className="min-w-0">
        <p className={`${mono} mb-1 text-[11px] uppercase tracking-[1.2px] text-[#99a1af]`}>
          {label}
        </p>
        <p className={`${mono} text-[13px] leading-[21px] text-[#080b0d]`}>
          {value}
        </p>
      </div>
    </div>
  );
}

function getServiceProgress(status: string) {
  const steps = [
    {
      label: "Yêu cầu đã gửi",
      detail: "Hệ thống đã ghi nhận dịch vụ và chuẩn bị điều phối.",
    },
    {
      label: "Fixer xác nhận",
      detail: "Đội ResQ đã nhận đơn và sẵn sàng di chuyển.",
    },
    {
      label: "Đang di chuyển",
      detail: "Fixer đang đến vị trí của bạn theo tuyến đường cập nhật.",
    },
    {
      label: "Đang hỗ trợ",
      detail: "Kỹ thuật viên xử lý xe và hoàn thiện dịch vụ tại chỗ.",
    },
  ];

  const normalizedStatus = status.toLowerCase();
  const currentIndex = normalizedStatus.includes("hỗ trợ")
    ? 3
    : normalizedStatus.includes("xác nhận")
      ? 1
      : 2;

  return {
    steps,
    currentIndex,
    percent: ((currentIndex + 1) / steps.length) * 100,
    progressLabel: `${currentIndex + 1}/${steps.length} giai đoạn`,
  };
}
