import { useState, useEffect, type ElementType } from "react";
import { useNavigate } from "react-router";
import {
  Wrench,
  Fuel,
  Battery,
  Settings,
  Zap,
  Disc3,
  Droplets,
  Truck,
  HelpCircle,
  X,
  CheckCircle2,
  MapPin,
  Clock,
  ChevronRight,
  Car,
  Bike,
  AlertCircle,
  Check,
  Loader2,
  Plus,
} from "lucide-react";
import {
  ServiceLocationPicker,
  type ServiceLocationValue,
} from "./location/ServiceLocationPicker";
import {
  createRequestDraft,
  useResQStore,
  type ActiveResQRequest,
  type VehicleType,
} from "./resqStore";
import { VehicleFormModal } from "./vehicles/VehicleFormModal";

const mono = "font-['IBM_Plex_Mono',monospace]";
const pagePadding = "px-5 sm:px-8 lg:px-[84px] xl:px-[120px]";
const pageShell = "mx-auto w-full max-w-[1240px]";

interface Service {
  id: string;
  title: string;
  desc: string;
  price: string;
  eta: string;
  icon: ElementType;
  types: string[];
  includes?: string[];
}

const allServices: Service[] = [
  {
    id: "va-lop",
    title: "Vá lốp / Thay lốp",
    desc: "Xử lý nhanh lốp xe bị thủng, xẹp hoặc hư hỏng trên đường.",
    price: "Từ 50.000đ",
    eta: "15-25 phút",
    icon: Wrench,
    types: ["xe-may", "o-to"],
    includes: ["Kiểm tra tình trạng lốp", "Vá hoặc thay lốp mới", "Bơm hơi đúng áp suất"],
  },
  {
    id: "ac-quy",
    title: "Kích bình / Thay ắc quy",
    desc: "Kích nổ hoặc thay ắc quy mới ngay tại chỗ.",
    price: "Từ 100.000đ",
    eta: "15-25 phút",
    icon: Battery,
    types: ["xe-may", "o-to"],
    includes: ["Kiểm tra ắc quy", "Kích bình hoặc thay mới", "Test hệ thống sạc"],
  },
  {
    id: "nhien-lieu",
    title: "Tiếp nhiên liệu (Xăng/Dầu)",
    desc: "Giao xăng hoặc dầu diesel đến vị trí của bạn.",
    price: "Từ 80.000đ",
    eta: "15-30 phút",
    icon: Fuel,
    types: ["xe-may", "o-to"],
    includes: ["Giao xăng/dầu tận nơi", "Đổ nhiên liệu an toàn", "Kiểm tra hệ thống nhiên liệu"],
  },
  {
    id: "dong-co",
    title: "Sự cố động cơ",
    desc: "Kiểm tra và xử lý các sự cố động cơ tại hiện trường.",
    price: "Từ 200.000đ",
    eta: "20-30 phút",
    icon: Settings,
    types: ["xe-may", "o-to"],
    includes: ["Chẩn đoán lỗi động cơ", "Sửa chữa tại chỗ", "Tư vấn bảo dưỡng"],
  },
  {
    id: "dien",
    title: "Sự cố điện",
    desc: "Khắc phục lỗi hệ thống điện, đèn, còi xe.",
    price: "Từ 150.000đ",
    eta: "15-25 phút",
    icon: Zap,
    types: ["xe-may", "o-to"],
    includes: ["Kiểm tra hệ thống điện", "Sửa lỗi đèn, còi", "Thay cầu chì, rơ le"],
  },
  {
    id: "phanh",
    title: "Phanh / Thắng",
    desc: "Kiểm tra và sửa chữa hệ thống phanh.",
    price: "Từ 120.000đ",
    eta: "20-30 phút",
    icon: Disc3,
    types: ["xe-may", "o-to"],
    includes: ["Kiểm tra má phanh", "Thay má phanh", "Xả gió phanh"],
  },
  {
    id: "dau",
    title: "Thay dầu",
    desc: "Dịch vụ thay dầu nhớt tại nhà hoặc tại chỗ.",
    price: "Từ 100.000đ",
    eta: "15-20 phút",
    icon: Droplets,
    types: ["xe-may", "o-to"],
    includes: ["Xả dầu cũ", "Thay dầu mới chính hãng", "Kiểm tra lọc dầu"],
  },
  {
    id: "cuu-ho",
    title: "Cứu hộ / Kéo xe",
    desc: "Xe cứu hộ đến kéo xe về garage an toàn.",
    price: "Từ 300.000đ",
    eta: "15-30 phút",
    icon: Truck,
    types: ["xe-may", "o-to"],
    includes: ["Kéo xe về garage", "Bảo hiểm khi vận chuyển", "Tư vấn garage uy tín"],
  },
  {
    id: "bugi",
    title: "Thay bugi",
    desc: "Kiểm tra và thay bugi cho xe máy tại chỗ.",
    price: "Từ 40.000đ",
    eta: "10-15 phút",
    icon: Wrench,
    types: ["xe-may"],
    includes: ["Kiểm tra bugi cũ", "Thay bugi mới", "Điều chỉnh khe hở"],
  },
  {
    id: "nhong-sen",
    title: "Thay nhông sên dĩa",
    desc: "Thay bộ nhông sên dĩa cho xe máy tận nơi.",
    price: "Từ 250.000đ",
    eta: "30-45 phút",
    icon: Settings,
    types: ["xe-may"],
    includes: ["Tháo bộ cũ", "Lắp nhông sên dĩa mới", "Căn chỉnh sên"],
  },
  {
    id: "dieu-hoa",
    title: "Điều hòa / Máy lạnh ô tô",
    desc: "Kiểm tra, bơm gas và sửa chữa hệ thống điều hòa.",
    price: "Từ 300.000đ",
    eta: "30-45 phút",
    icon: Droplets,
    types: ["o-to"],
    includes: ["Kiểm tra gas lạnh", "Bơm gas điều hòa", "Vệ sinh dàn lạnh"],
  },
  {
    id: "mo-khoa",
    title: "Mở khóa ô tô",
    desc: "Mở khóa xe khi bị nhốt chìa bên trong hoặc mất chìa.",
    price: "Từ 400.000đ",
    eta: "20-30 phút",
    icon: HelpCircle,
    types: ["o-to"],
    includes: ["Mở khóa chuyên nghiệp", "Không làm hỏng khóa", "Làm chìa dự phòng"],
  },
  {
    id: "chung",
    title: "Hỗ trợ chung",
    desc: "Bất kỳ sự cố nào khác trên đường.",
    price: "Liên hệ",
    eta: "15-30 phút",
    icon: HelpCircle,
    types: ["xe-may", "o-to"],
    includes: ["Đánh giá tình trạng", "Xử lý tại chỗ", "Tư vấn giải pháp"],
  },
];

const filters = [
  { label: "Tất cả", value: "all" },
  { label: "Xe máy", value: "xe-may" },
  { label: "Ô tô", value: "o-to" },
];

type ModalStep = "select" | "describe" | "sending" | "done";

function ServiceModal({ service, onClose }: { service: Service; onClose: () => void }) {
  const { vehicles, addVehicle, setActiveRequest } = useResQStore();
  const [selectedVehicle, setSelectedVehicle] = useState("");
  const [step, setStep] = useState<ModalStep>("select");
  const [notes, setNotes] = useState("");
  const [selectedLocation, setSelectedLocation] = useState<ServiceLocationValue | null>(null);
  const [locationLabel, setLocationLabel] = useState("");
  const [showAddVehicleModal, setShowAddVehicleModal] = useState(false);
  const [submittedRequest, setSubmittedRequest] = useState<ActiveResQRequest | null>(null);
  const navigate = useNavigate();
  const allowedVehicleTypes = getAllowedVehicleTypes(service.types);
  const availableVehicles = vehicles.filter((vehicle) =>
    allowedVehicleTypes.includes(vehicle.type),
  );
  const defaultVehicle = availableVehicles.find((vehicle) => vehicle.isDefault)
    ?? availableVehicles[0]
    ?? null;
  const selectedVehicleData =
    availableVehicles.find((vehicle) => vehicle.id === selectedVehicle) ??
    defaultVehicle;

  useEffect(() => {
    if (!availableVehicles.some((vehicle) => vehicle.id === selectedVehicle)) {
      setSelectedVehicle(defaultVehicle?.id ?? "");
    }
  }, [availableVehicles, defaultVehicle, selectedVehicle]);

  useEffect(() => {
    if (step === "sending") {
      const timer = setTimeout(() => setStep("done"), 2500);
      return () => clearTimeout(timer);
    }
  }, [step]);

  const locationSummary =
    locationLabel.trim() || selectedLocation?.address || "Đang xác định vị trí";
  const locationSourceLabel =
    selectedLocation?.source === "browser"
      ? "GPS trình duyệt"
      : selectedLocation?.source === "manual"
        ? "Vị trí đã chỉnh"
        : "Vị trí mặc định";
  const locationCoordinates = selectedLocation
    ? `${selectedLocation.point.lat.toFixed(5)}, ${selectedLocation.point.lng.toFixed(5)}`
    : null;
  const requestId = submittedRequest?.id ?? "RSQ-330993";

  const handleAddVehicle = (payload: {
    name: string;
    plate: string;
    year: string;
    type: VehicleType;
  }) => {
    const nextVehicle = addVehicle(payload);
    setSelectedVehicle(nextVehicle.id);
    setShowAddVehicleModal(false);
  };

  const handleSubmitRequest = () => {
    if (!selectedVehicleData || !selectedLocation) {
      return;
    }

    const nextRequest = createRequestDraft({
      serviceId: service.id,
      serviceTitle: service.title,
      servicePrice: service.price,
      serviceEta: service.eta,
      vehicle: selectedVehicleData,
      locationAddress: locationSummary,
      locationPoint: selectedLocation.point,
      locationSource: selectedLocation.source,
      notes,
    });

    setSubmittedRequest(nextRequest);
    setActiveRequest(nextRequest);
    setStep("sending");
  };

  if (step === "sending") {
    return (
      <div className="resq-modal-backdrop fixed inset-0 z-50 overflow-y-auto bg-black/40 px-4 py-6 sm:px-6 sm:py-10">
        <div className="mx-auto flex min-h-full w-full max-w-[520px] items-center justify-center">
          <div className="resq-modal-panel w-full rounded-[18px] bg-white p-8 text-center sm:p-10">
            <div className="mb-[24px] flex justify-center">
              <Loader2 size={56} className="animate-spin text-[#ee3224]" />
            </div>
            <h2 className={`${mono} mb-[8px] text-[20px] font-[700] text-[#080b0d]`}>
              Đang gửi yêu cầu...
            </h2>
            <p className={`${mono} text-[14px] text-[#a4a4a4]`}>
              Đang tìm Fixer gần bạn nhất
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (step === "done") {
    return (
      <div
        className="resq-modal-backdrop fixed inset-0 z-50 overflow-y-auto bg-black/40 px-4 py-6 sm:px-6 sm:py-10"
        onClick={onClose}
      >
        <div className="mx-auto flex min-h-full w-full max-w-[520px] items-center justify-center">
          <div
            className="resq-modal-panel w-full rounded-[18px] bg-white p-6 sm:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-[24px] flex flex-col items-center text-center">
              <div className="mb-[16px] flex size-[64px] items-center justify-center rounded-full bg-[rgba(238,50,36,0.1)]">
                <Check size={32} className="text-[#ee3224]" />
              </div>
              <h2 className={`${mono} mb-[4px] text-[20px] font-[700] text-[#080b0d]`}>
                Yêu cầu đã được gửi!
              </h2>
              <p className={`${mono} text-[14px] text-[#a4a4a4]`}>
                Fixer đang được điều phối đến vị trí của bạn
              </p>
            </div>

            <div className="mb-[24px] rounded-[10px] border border-[rgba(4,38,153,0.08)] p-[20px]">
              {[
                ["Dịch vụ", submittedRequest?.serviceTitle ?? service.title],
                ["Xe", submittedRequest?.vehicleName ?? selectedVehicleData?.name ?? "Chưa chọn"],
                ["Biển số", submittedRequest?.vehiclePlate ?? selectedVehicleData?.plate ?? "--"],
                ["Vị trí", locationSummary],
                ["Giá ước tính", submittedRequest?.servicePrice ?? service.price],
                ["Mã yêu cầu", requestId],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex justify-between gap-3 border-b border-[rgba(4,38,153,0.04)] py-[8px] last:border-b-0"
                >
                  <span className={`${mono} text-[13px] text-[#a4a4a4]`}>
                    {label}
                  </span>
                  <span
                    className={`${mono} text-right text-[13px] font-[500] ${
                      label === "Giá ước tính" ? "text-[#ee3224]" : "text-[#080b0d]"
                    }`}
                  >
                    {value}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-[12px] sm:flex-row">
              <button
                onClick={onClose}
                className="h-[48px] flex-1 rounded-[10px] border border-black bg-white cursor-pointer transition-colors hover:bg-[#f5f5f5]"
              >
                <span className={`${mono} text-[14px] font-[500] text-[#080b0d]`}>
                  Đóng
                </span>
              </button>
              <button
                onClick={() => {
                  onClose();
                  navigate("/theo-doi");
                }}
                className="flex h-[48px] flex-[1.4] items-center justify-center gap-[8px] rounded-[10px] border-0 bg-[#ee3224] cursor-pointer transition-colors hover:bg-[#d42b1e]"
              >
                <span className={`${mono} text-[14px] font-[500] text-white`}>
                  Theo dõi Fixer
                </span>
                <ChevronRight size={18} className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (step === "describe") {
    return (
      <div
        className="resq-modal-backdrop fixed inset-0 z-50 overflow-y-auto bg-black/40 px-4 py-6 sm:px-6 sm:py-10"
        onClick={onClose}
      >
        <div className="mx-auto flex min-h-full w-full max-w-[520px] items-center justify-center">
          <div
            className="resq-modal-panel relative w-full rounded-[18px] bg-white p-6 sm:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-[16px] right-[16px] flex size-[32px] items-center justify-center rounded-full border-0 bg-transparent cursor-pointer transition-colors hover:bg-[#f5f5f5]"
            >
              <X size={20} className="text-[#a4a4a4]" />
            </button>

            <h2 className={`${mono} mb-[20px] text-[20px] font-[700] text-[#080b0d]`}>
              Mô tả sự cố
            </h2>

            <div className="mb-[24px] flex flex-col gap-[12px] rounded-[10px] border border-[rgba(4,38,153,0.08)] p-[16px] sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-[12px]">
                <div className="flex size-[40px] shrink-0 items-center justify-center rounded-full bg-[rgba(238,50,36,0.1)]">
                  <service.icon size={20} className="text-[#ee3224]" />
                </div>
                <div>
                  <p className={`${mono} text-[14px] font-[500] text-[#080b0d]`}>
                    {service.title}
                  </p>
                  <p className={`${mono} text-[12px] text-[#a4a4a4]`}>
                    {selectedVehicleData?.name ?? "Chưa chọn xe"} · {selectedVehicleData?.plate ?? "--"}
                  </p>
                </div>
              </div>
              <span className={`${mono} text-[16px] font-[700] text-[#ee3224]`}>
                {service.price}
              </span>
            </div>

            <div className="mb-[16px]">
              <div className="mb-[16px] flex items-start gap-[8px] rounded-[12px] border border-[rgba(4,38,153,0.08)] bg-[#fafafa] p-[12px]">
                <MapPin size={16} className="mt-[2px] shrink-0 text-[#ee3224]" />
                <div className="min-w-0">
                  <p className={`${mono} text-[13px] font-[500] text-[#080b0d]`}>
                    {locationSummary}
                  </p>
                  {locationCoordinates && (
                    <p className={`${mono} mt-1 text-[11px] leading-[18px] text-[#4a5565]`}>
                      {locationSourceLabel} · {locationCoordinates}
                    </p>
                  )}
                </div>
              </div>

              <p className={`${mono} mb-[8px] text-[11px] font-[500] uppercase tracking-[0.88px] text-[#a4a4a4]`}>
                Ghi chú cho Fixer (tùy chọn)
              </p>
              <textarea
                value={notes}
                onChange={(event) => setNotes(event.target.value)}
                placeholder="VD: Lốp trước bị thủng đinh, xe đang ở lề đường bên phải..."
                className={`h-[110px] w-full resize-none rounded-[10px] border border-[rgba(4,38,153,0.08)] bg-white p-[14px] text-[13px] text-[#080b0d] outline-none transition-colors placeholder:text-[#a4a4a4] focus:border-[#ee3224] ${mono}`}
              />
            </div>

            <div className="mb-[24px] flex items-start gap-[8px] rounded-[10px] bg-[rgba(238,50,36,0.04)] p-[12px]">
              <AlertCircle size={16} className="mt-[2px] shrink-0 text-[#ee3224]" />
              <p className={`${mono} text-[12px] leading-[18px] text-[#4a5565]`}>
                Giá trên là ước tính. Giá cuối cùng có thể thay đổi tùy tình trạng
                thực tế sau khi Fixer kiểm tra.
              </p>
            </div>

            <div className="flex flex-col gap-[12px] sm:flex-row">
              <button
                onClick={() => setStep("select")}
                className="h-[48px] flex-1 rounded-[10px] border border-black bg-white cursor-pointer transition-colors hover:bg-[#f5f5f5]"
              >
                <span className={`${mono} text-[14px] font-[500] text-[#080b0d]`}>
                  Quay lại
                </span>
              </button>
              <button
                onClick={handleSubmitRequest}
                className="h-[48px] flex-[1.4] rounded-[10px] border-0 bg-[#ee3224] cursor-pointer transition-colors hover:bg-[#d42b1e] disabled:cursor-not-allowed disabled:bg-[#f3b3ad]"
                disabled={!selectedVehicleData || !selectedLocation}
              >
                <span className={`${mono} text-[14px] font-[500] text-white`}>
                  Gửi yêu cầu
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="resq-modal-backdrop fixed inset-0 z-50 overflow-y-auto bg-black/40 px-4 py-6 sm:px-6 sm:py-10"
      onClick={onClose}
    >
      <div className="mx-auto flex min-h-full w-full max-w-[640px] items-center justify-center">
        <div
          className="resq-modal-panel relative w-full max-h-[90vh] overflow-y-auto rounded-[18px] bg-white p-6 sm:p-8"
          onClick={(event) => event.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-[16px] right-[16px] flex size-[32px] items-center justify-center rounded-full border-0 bg-transparent cursor-pointer transition-colors hover:bg-[#f5f5f5]"
          >
            <X size={20} className="text-[#a4a4a4]" />
          </button>

          <div className="mb-[24px] flex items-start gap-[16px] pr-8">
            <div className="flex size-[48px] shrink-0 items-center justify-center rounded-[10px] bg-[rgba(238,50,36,0.1)]">
              <service.icon size={24} className="text-[#ee3224]" />
            </div>
            <div>
              <h2 className={`${mono} mb-[4px] text-[22px] font-[700] text-[#080b0d] sm:text-[24px]`}>
                {service.title}
              </h2>
              <div className="flex items-center gap-[6px]">
                <Clock size={14} className="text-[#a4a4a4]" />
                <span className={`${mono} text-[13px] text-[#a4a4a4]`}>
                  ETA: {service.eta}
                </span>
              </div>
            </div>
          </div>

          <p className={`${mono} mb-[24px] text-[14px] leading-[22px] text-[#080b0d]`}>
            {service.desc}
          </p>

          {service.includes && (
            <div className="mb-[24px]">
              <p className={`${mono} mb-[12px] text-[11px] font-[500] uppercase tracking-[0.88px] text-[#a4a4a4]`}>
                Dịch vụ bao gồm
              </p>
              <div className="flex flex-col gap-[8px]">
                {service.includes.map((item) => (
                  <div key={item} className="flex items-center gap-[8px]">
                    <CheckCircle2 size={16} className="shrink-0 text-[#ee3224]" />
                    <span className={`${mono} text-[14px] text-[#080b0d]`}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mb-[24px]">
            <div className="mb-[12px] flex items-center justify-between gap-3">
              <p className={`${mono} text-[11px] font-[500] uppercase tracking-[0.88px] text-[#a4a4a4]`}>
                Chọn xe
              </p>
              <button
                type="button"
                onClick={() => setShowAddVehicleModal(true)}
                className="inline-flex items-center gap-2 rounded-full border border-[rgba(4,38,153,0.08)] bg-white px-3 py-2 transition-colors hover:border-[#ee3224]"
              >
                <Plus size={14} className="text-[#ee3224]" />
                <span className={`${mono} text-[11px] font-[500] uppercase tracking-[0.14em] text-[#080b0d]`}>
                  Thêm xe
                </span>
              </button>
            </div>

            {availableVehicles.length > 0 ? (
              <div className="flex flex-col gap-[8px]">
                {availableVehicles.map((vehicle) => (
                  <button
                    key={vehicle.id}
                    onClick={() => setSelectedVehicle(vehicle.id)}
                    className={`flex items-center gap-[12px] rounded-[10px] bg-white p-[12px] text-left cursor-pointer transition-all ${
                      selectedVehicle === vehicle.id
                        ? "border-2 border-[#ee3224]"
                        : "border border-[rgba(4,38,153,0.08)]"
                    }`}
                  >
                    <div
                      className={`flex size-[36px] shrink-0 items-center justify-center rounded-full ${
                        selectedVehicle === vehicle.id
                          ? "bg-[rgba(238,50,36,0.1)]"
                          : "bg-[#f3f3f5]"
                      }`}
                    >
                      {vehicle.type === "Xe máy" ? (
                        <Bike
                          size={16}
                          className={
                            selectedVehicle === vehicle.id
                              ? "text-[#ee3224]"
                              : "text-[#a4a4a4]"
                          }
                        />
                      ) : (
                        <Car
                          size={16}
                          className={
                            selectedVehicle === vehicle.id
                              ? "text-[#ee3224]"
                              : "text-[#a4a4a4]"
                          }
                        />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className={`${mono} text-[14px] font-[500] text-[#080b0d]`}>
                          {vehicle.name}
                        </p>
                        {vehicle.isDefault && (
                          <span className={`${mono} rounded-full bg-[rgba(238,50,36,0.08)] px-2 py-1 text-[10px] uppercase tracking-[0.12em] text-[#ee3224]`}>
                            Mặc định
                          </span>
                        )}
                      </div>
                      <p className={`${mono} text-[12px] text-[#a4a4a4]`}>
                        {vehicle.plate} · {vehicle.year} · {vehicle.type}
                      </p>
                    </div>
                    {selectedVehicle === vehicle.id && (
                      <div className="flex size-[24px] items-center justify-center rounded-full bg-[#ee3224]">
                        <CheckCircle2 size={14} className="text-white" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            ) : (
              <div className="rounded-[14px] border border-dashed border-[rgba(4,38,153,0.12)] bg-[#fafafa] p-4">
                <p className={`${mono} text-[13px] leading-[22px] text-[#4a5565]`}>
                  Bạn chưa có {allowedVehicleTypes.length === 1 ? allowedVehicleTypes[0].toLowerCase() : "phương tiện phù hợp"} cho dịch vụ này. Thêm xe để tiếp tục tạo yêu cầu.
                </p>
              </div>
            )}
          </div>

          <div className="mb-[24px]">
            <p className={`${mono} mb-[12px] text-[11px] font-[500] uppercase tracking-[0.88px] text-[#a4a4a4]`}>
              Vị trí của bạn
            </p>
            <div className="space-y-4">
              <ServiceLocationPicker
                className="h-[280px]"
                onChange={(nextLocation) => {
                  setSelectedLocation(nextLocation);
                  setLocationLabel(nextLocation.address);
                }}
              />

              <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_180px]">
                <div>
                  <p className={`${mono} mb-[8px] text-[11px] font-[500] uppercase tracking-[0.88px] text-[#a4a4a4]`}>
                    Địa chỉ / điểm mốc
                  </p>
                  <input
                    value={locationLabel}
                    onChange={(event) => setLocationLabel(event.target.value)}
                    placeholder="Nhập thêm số nhà, cột mốc hoặc ghi chú vị trí"
                    className={`h-[46px] w-full rounded-[10px] border border-[rgba(4,38,153,0.08)] bg-white px-[14px] text-[13px] text-[#080b0d] outline-none transition-colors placeholder:text-[#a4a4a4] focus:border-[#ee3224] ${mono}`}
                  />
                </div>

                <div className="rounded-[12px] border border-[rgba(4,38,153,0.08)] bg-[#fafafa] px-[14px] py-[12px]">
                  <p className={`${mono} text-[11px] uppercase tracking-[0.18em] text-[#99a1af]`}>
                    Trạng thái
                  </p>
                  <p className={`${mono} mt-2 text-[13px] font-[500] text-[#080b0d]`}>
                    {locationSourceLabel}
                  </p>
                  {locationCoordinates && (
                    <p className={`${mono} mt-2 text-[11px] leading-[18px] text-[#4a5565]`}>
                      {locationCoordinates}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="mb-[24px] flex flex-col gap-4 rounded-[10px] bg-[#fafafa] p-[16px] sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className={`${mono} mb-[4px] text-[11px] text-[#a4a4a4]`}>
                Giá ước tính
              </p>
              <p className={`${mono} text-[24px] font-[700] text-[#ee3224]`}>
                {service.price}
              </p>
            </div>
            <div className="text-left sm:text-right">
              <p className={`${mono} mb-[4px] text-[11px] text-[#a4a4a4]`}>
                Thời gian đến
              </p>
              <p className={`${mono} text-[20px] font-[700] text-[#080b0d]`}>
                {service.eta}
              </p>
            </div>
          </div>

          <button
            onClick={() => setStep("describe")}
            className="flex h-[52px] w-full items-center justify-center gap-[8px] rounded-[10px] border-0 bg-[#ee3224] cursor-pointer transition-colors hover:bg-[#d42b1e] disabled:cursor-not-allowed disabled:bg-[#f3b3ad]"
            disabled={!locationLabel.trim() || !selectedLocation || !selectedVehicleData}
          >
            <span className={`${mono} text-[16px] font-[500] text-white sm:text-[18px]`}>
              Tiếp tục
            </span>
            <ChevronRight size={20} className="text-white" />
          </button>
        </div>
      </div>

      {showAddVehicleModal && (
        <VehicleFormModal
          allowedTypes={allowedVehicleTypes}
          onClose={() => setShowAddVehicleModal(false)}
          onSave={handleAddVehicle}
        />
      )}
    </div>
  );
}

export default function ServicesPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const filtered =
    activeFilter === "all"
      ? allServices
      : allServices.filter((service) => service.types.includes(activeFilter));

  const counts = {
    all: allServices.length,
    "xe-may": allServices.filter((service) => service.types.includes("xe-may")).length,
    "o-to": allServices.filter((service) => service.types.includes("o-to")).length,
  };

  return (
    <div className="overflow-x-hidden bg-white">
      <div className={`${pagePadding} pt-10 pb-16 sm:pt-12 sm:pb-20`}>
        <div className={pageShell}>
          <div className="resq-reveal mb-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="resq-card-lift flex size-[92px] items-center justify-center rounded-[20px] bg-[rgba(238,50,36,0.08)] sm:size-[104px] lg:size-[119px]">
              <Settings size={56} className="text-[#ee3224] sm:size-[60px]" strokeWidth={1.5} />
            </div>
            <div className="max-w-[720px]">
              <h1 className={`${mono} mb-[8px] text-[30px] font-[500] leading-[1.2] text-black sm:text-[34px] lg:text-[32px] lg:tracking-[2.56px]`}>
                Danh mục dịch vụ cứu hộ của ResQ
              </h1>
              <p className={`${mono} text-[14px] leading-[24px] text-[#4a5565] sm:text-[15px]`}>
                Hỗ trợ 24/7 cho xe máy và ô tô, với các dịch vụ rõ ràng, dễ chọn và
                sẵn sàng đặt nhanh.
              </p>
            </div>
          </div>

          <div className="resq-reveal resq-reveal--delay-1 mb-10 flex flex-wrap gap-[8px]">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`flex h-[38px] items-center gap-[8px] rounded-full border px-[20px] cursor-pointer transition-colors ${
                  activeFilter === filter.value
                    ? "border-[#ee3224] bg-[#ee3224] text-white"
                    : "border-[rgba(0,0,0,0.1)] bg-white text-[#080b0d] hover:border-[#ee3224]"
                  }`}
              >
                <span className={`${mono} text-[13px] font-[500]`}>
                  {filter.label}
                </span>
                <span
                  className={`${mono} rounded-full px-[6px] py-[1px] text-[11px] ${
                    activeFilter === filter.value
                      ? "bg-[rgba(255,255,255,0.2)] text-white"
                      : "bg-[rgba(0,0,0,0.06)] text-[#080b0d]"
                  }`}
                >
                  {counts[filter.value as keyof typeof counts]}
                </span>
              </button>
            ))}
          </div>

          <div className="grid gap-[20px] sm:grid-cols-2 xl:grid-cols-3 xl:gap-[24px]">
            {filtered.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  onClick={() => setSelectedService(service)}
                  className="resq-card-lift resq-reveal relative flex min-h-[231px] cursor-pointer flex-col rounded-[16px] border border-[rgba(0,0,0,0.05)] bg-white p-[24px] transition-shadow hover:shadow-md"
                >
                  <div className="absolute top-[16px] right-[16px] flex gap-[4px]">
                    {service.types.includes("xe-may") && (
                      <span className={`${mono} rounded-full bg-[rgba(238,50,36,0.08)] px-[8px] py-[2px] text-[10px] font-[500] text-[#ee3224]`}>
                        Xe máy
                      </span>
                    )}
                    {service.types.includes("o-to") && (
                      <span className={`${mono} rounded-full bg-[rgba(4,38,153,0.06)] px-[8px] py-[2px] text-[10px] font-[500] text-[#3b5998]`}>
                        Ô tô
                      </span>
                    )}
                  </div>

                  <div className="mb-[16px] flex size-[48px] items-center justify-center rounded-[10px] bg-[rgba(238,50,36,0.1)]">
                    <Icon size={24} className="text-[#ee3224]" />
                  </div>
                  <p className={`${mono} mb-[8px] text-[16px] font-[500] text-[#080b0d]`}>
                    {service.title}
                  </p>
                  <p className={`${mono} flex-1 text-[13px] leading-[21px] text-[#4a5565]`}>
                    {service.desc}
                  </p>
                  <p className={`${mono} mt-auto pt-4 text-[14px] text-[#ee3224]`}>
                    {service.price}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="resq-reveal resq-reveal--delay-2 mt-12 rounded-[24px] bg-[#f7f7f8] px-6 py-8 text-center sm:px-8 sm:py-10 lg:mt-[60px]">
            <h2 className={`${mono} mb-[16px] text-[32px] font-[700] text-[#080b0d] sm:text-[40px] lg:text-[48px]`}>
              Cần hỗ trợ ngay?
            </h2>
            <p className={`${mono} mx-auto mb-6 max-w-[540px] text-[14px] leading-[24px] text-[#4a5565]`}>
              Gọi hotline để được điều phối nhanh khi bạn cần cứu hộ khẩn cấp hoặc
              chưa chắc nên chọn dịch vụ nào.
            </p>
            <a
              href="tel:19001234"
              className="inline-flex h-[62px] items-center justify-center rounded-[12px] bg-[#ee3224] px-[34px] no-underline transition-colors hover:bg-[#d42b1e] sm:h-[68px] sm:px-[40px]"
            >
              <span className={`${mono} text-[22px] font-[500] tracking-[1.4px] text-white sm:text-[24px]`}>
                1900 1234
              </span>
            </a>
          </div>

          {selectedService && (
            <ServiceModal
              service={selectedService}
              onClose={() => setSelectedService(null)}
            />
          )}
        </div>
      </div>
    </div>
  );
}

function getAllowedVehicleTypes(serviceTypes: string[]): VehicleType[] {
  return serviceTypes.includes("xe-may") && serviceTypes.includes("o-to")
    ? ["Xe máy", "Ô tô"]
    : serviceTypes.includes("xe-may")
      ? ["Xe máy"]
      : ["Ô tô"];
}
