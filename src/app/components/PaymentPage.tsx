import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import {
  ChevronLeft,
  Smartphone,
  CreditCard,
  Banknote,
  Check,
  Star,
  Wrench,
  Loader2,
  CheckCircle2,
  Download,
  Copy,
  ChevronRight,
  AlertCircle,
  Shield,
} from "lucide-react";
import { useResQStore, type ActiveResQRequest } from "./resqStore";
import { HO_CHI_MINH_CITY_FALLBACK } from "./tracking/tracking-utils";

const mono = "font-['IBM_Plex_Mono',monospace]";
const pagePadding = "px-5 sm:px-8 lg:px-[84px] xl:px-[120px]";
const pageShell = "mx-auto w-full max-w-[1240px]";

const paymentMethods = [
  { id: "momo", name: "MoMo", desc: "Ví điện tử MoMo", icon: Smartphone },
  { id: "zalo", name: "ZaloPay", desc: "Ví điện tử ZaloPay", icon: Smartphone },
  { id: "card", name: "Thẻ ngân hàng", desc: "Visa, Mastercard, JCB", icon: CreditCard },
  { id: "cash", name: "Tiền mặt", desc: "Thanh toán trực tiếp cho Fixer", icon: Banknote },
];

type Step = "select" | "card-input" | "confirm" | "processing" | "success" | "failed";

const SERVICE_FEE = 80000;
const TRAVEL_FEE = 25000;
const DISCOUNT = 10000;
const TOTAL = SERVICE_FEE + TRAVEL_FEE - DISCOUNT;

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

function formatVND(value: number) {
  return value.toLocaleString("vi-VN") + "đ";
}

export default function PaymentPage() {
  const { activeRequest } = useResQStore();
  const request = activeRequest ?? fallbackRequest;
  const [selected, setSelected] = useState("momo");
  const [coupon, setCoupon] = useState("RESQ10K");
  const [applied, setApplied] = useState(true);
  const [couponError, setCouponError] = useState("");
  const [step, setStep] = useState<Step>("select");
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCVV, setCardCVV] = useState("");
  const [rating, setRating] = useState(0);
  const [tip, setTip] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();

  const txnId = "TXN-" + Math.random().toString(36).substring(2, 8).toUpperCase();
  const now = new Date();
  const timeStr = `${now.getHours().toString().padStart(2, "0")}:${now
    .getMinutes()
    .toString()
    .padStart(2, "0")} · ${now.getDate().toString().padStart(2, "0")}/${(
    now.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}/${now.getFullYear()}`;

  useEffect(() => {
    if (step === "processing") {
      const timeout = setTimeout(() => {
        setStep(Math.random() > 0.1 ? "success" : "failed");
      }, 2500);
      return () => clearTimeout(timeout);
    }
  }, [step]);

  const handleApplyCoupon = () => {
    if (coupon.trim().toUpperCase() === "RESQ10K") {
      setApplied(true);
      setCouponError("");
    } else if (coupon.trim() === "") {
      setApplied(false);
      setCouponError("");
    } else {
      setApplied(false);
      setCouponError("Mã giảm giá không hợp lệ hoặc đã hết hạn");
    }
  };

  const handlePay = () => {
    if (selected === "card") {
      if (!cardNumber || !cardName || !cardExpiry || !cardCVV) {
        return;
      }
    }
    setStep("confirm");
  };

  const formatCardNumber = (value: string) => {
    const nums = value.replace(/\D/g, "").substring(0, 16);
    return nums.replace(/(.{4})/g, "$1 ").trim();
  };

  const formatExpiry = (value: string) => {
    const nums = value.replace(/\D/g, "").substring(0, 4);
    if (nums.length > 2) {
      return nums.substring(0, 2) + "/" + nums.substring(2);
    }
    return nums;
  };

  const currentTotal = applied ? TOTAL : SERVICE_FEE + TRAVEL_FEE;

  const handleCopyTxn = () => {
    navigator.clipboard.writeText(txnId).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (step === "processing") {
    return (
      <div className="overflow-x-hidden bg-white">
        <div className={`${pagePadding} py-12`}>
          <div className="mx-auto flex min-h-[60vh] max-w-[420px] flex-col items-center justify-center text-center">
            <Loader2 size={56} className="mb-[24px] animate-spin text-[#ee3224]" />
            <h2 className={`${mono} mb-[8px] text-[24px] font-[700] text-[#080b0d]`}>
              Đang xử lý thanh toán...
            </h2>
            <p className={`${mono} mb-[4px] text-[14px] text-[#a4a4a4]`}>
              {selected === "momo"
                ? "Đang kết nối với MoMo"
                : selected === "zalo"
                  ? "Đang kết nối với ZaloPay"
                  : selected === "card"
                    ? "Đang xác thực thẻ"
                    : "Đang xác nhận đơn hàng"}
            </p>
            <p className={`${mono} text-[13px] text-[#a4a4a4]`}>
              Vui lòng không đóng trang này
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (step === "failed") {
    return (
      <div className="overflow-x-hidden bg-white">
        <div className={`${pagePadding} py-12`}>
          <div className="mx-auto flex min-h-[60vh] max-w-[460px] flex-col items-center justify-center text-center">
            <div className="mb-[24px] flex size-[72px] items-center justify-center rounded-full bg-[#fee2e2]">
              <AlertCircle size={36} className="text-[#ee3224]" />
            </div>
            <h2 className={`${mono} mb-[8px] text-[24px] font-[700] text-[#080b0d]`}>
              Thanh toán thất bại
            </h2>
            <p className={`${mono} mb-[32px] max-w-[400px] text-[14px] leading-[24px] text-[#a4a4a4]`}>
              Giao dịch không thể hoàn tất. Vui lòng kiểm tra lại phương thức thanh
              toán hoặc thử lại.
            </p>
            <div className="flex w-full flex-col gap-[12px] sm:flex-row sm:justify-center">
              <button
                onClick={() => setStep("select")}
                className="h-[48px] rounded-[10px] border border-black bg-white px-[32px] cursor-pointer transition-colors hover:bg-[#f5f5f5]"
              >
                <span className={`${mono} text-[14px] font-[500] text-[#080b0d]`}>
                  Đổi phương thức
                </span>
              </button>
              <button
                onClick={() => setStep("processing")}
                className="h-[48px] rounded-[10px] border-0 bg-[#ee3224] px-[32px] cursor-pointer transition-colors hover:bg-[#d42b1e]"
              >
                <span className={`${mono} text-[14px] font-[500] text-white`}>
                  Thử lại
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (step === "success") {
    return (
      <div className="overflow-x-hidden bg-white">
        <div className={`${pagePadding} pt-10 pb-16 sm:pt-12 sm:pb-20`}>
          <div className="mx-auto max-w-[620px]">
            <div className="mb-[32px] flex flex-col items-center text-center">
              <div className="mb-[16px] flex size-[72px] items-center justify-center rounded-full bg-[rgba(238,50,36,0.1)]">
                <CheckCircle2 size={36} className="text-[#ee3224]" />
              </div>
              <h2 className={`${mono} mb-[4px] text-[24px] font-[700] text-[#080b0d]`}>
                Thanh toán thành công!
              </h2>
              <p className={`${mono} text-[14px] text-[#a4a4a4]`}>{timeStr}</p>
            </div>

            <div className="mb-[32px] text-center">
              <p className={`${mono} mb-[4px] text-[13px] text-[#a4a4a4]`}>
                Số tiền thanh toán
              </p>
              <p className={`${mono} text-[36px] font-[700] text-[#ee3224] sm:text-[40px]`}>
                {formatVND(currentTotal)}
              </p>
            </div>

            <div className="mb-[24px] rounded-[14px] border border-[rgba(4,38,153,0.08)] p-[24px]">
              <div className="mb-[16px] flex flex-col gap-3 border-b border-[rgba(4,38,153,0.08)] pb-[16px] sm:flex-row sm:items-center sm:justify-between">
                <p className={`${mono} text-[12px] font-[500] uppercase tracking-[0.96px] text-[#a4a4a4]`}>
                  Hóa đơn
                </p>
                <button
                  onClick={handleCopyTxn}
                  className="flex items-center gap-[4px] border-0 bg-transparent p-0 cursor-pointer"
                >
                  {copied ? (
                    <Check size={14} className="text-[#ee3224]" />
                  ) : (
                    <Copy size={14} className="text-[#a4a4a4]" />
                  )}
                  <span
                    className={`${mono} text-[12px] ${
                      copied ? "text-[#ee3224]" : "text-[#a4a4a4]"
                    }`}
                  >
                    {copied ? "Đã copy" : txnId}
                  </span>
                </button>
              </div>

              <div className="mb-[16px] space-y-[12px]">
                {[
                  ["Dịch vụ", request.serviceTitle],
                  ["Xe", `${request.vehicleName} · ${request.vehiclePlate}`],
                  ["Fixer", request.fixerTeam],
                  ["Phương thức", paymentMethods.find((method) => method.id === selected)?.name || ""],
                ].map(([key, value]) => (
                  <div key={key} className="flex justify-between gap-3">
                    <span className={`${mono} text-[13px] text-[#a4a4a4]`}>{key}</span>
                    <span className={`${mono} text-right text-[13px] font-[500] text-[#080b0d]`}>
                      {value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="space-y-[8px] border-t border-[rgba(4,38,153,0.08)] pt-[12px]">
                <div className="flex justify-between gap-3">
                  <span className={`${mono} text-[13px] text-[#080b0d]`}>
                    Vá lốp xe máy
                  </span>
                  <span className={`${mono} text-[13px] font-[500] text-[#080b0d]`}>
                    {formatVND(SERVICE_FEE)}
                  </span>
                </div>
                <div className="flex justify-between gap-3">
                  <span className={`${mono} text-[13px] text-[#080b0d]`}>
                    Phí di chuyển (3.2 km)
                  </span>
                  <span className={`${mono} text-[13px] font-[500] text-[#080b0d]`}>
                    {formatVND(TRAVEL_FEE)}
                  </span>
                </div>
                {applied && (
                  <div className="flex justify-between gap-3">
                    <span className={`${mono} text-[13px] text-[#ee3224]`}>
                      Giảm giá (RESQ10K)
                    </span>
                    <span className={`${mono} text-[13px] font-[500] text-[#ee3224]`}>
                      -{formatVND(DISCOUNT)}
                    </span>
                  </div>
                )}
                <div className="flex items-center justify-between gap-3 border-t border-[rgba(4,38,153,0.08)] pt-[12px]">
                  <span className={`${mono} text-[14px] font-[500] text-[#080b0d]`}>
                    Tổng cộng
                  </span>
                  <span className={`${mono} text-[20px] font-[700] text-[#ee3224]`}>
                    {formatVND(currentTotal)}
                  </span>
                </div>
              </div>
            </div>

            <div className="mb-[24px] rounded-[14px] border border-[rgba(4,38,153,0.08)] p-[24px]">
              <p className={`${mono} mb-[16px] text-[12px] font-[500] uppercase tracking-[0.96px] text-[#a4a4a4]`}>
                Đánh giá Fixer
              </p>
              <div className="mb-[16px] flex items-center gap-[12px]">
                <div className="flex size-[44px] shrink-0 items-center justify-center rounded-full bg-[#ee3224]">
                  <span className={`${mono} text-[14px] font-[500] text-white`}>
                    TM
                  </span>
                </div>
                <div>
                  <p className={`${mono} text-[14px] font-[500] text-[#080b0d]`}>
                    Trần Văn Minh
                  </p>
                  <p className={`${mono} text-[12px] text-[#a4a4a4]`}>
                    Fixer · 127 đơn hoàn thành
                  </p>
                </div>
              </div>

              <div className="mb-[16px] flex gap-[8px]">
                {[1, 2, 3, 4, 5].map((score) => (
                  <button
                    key={score}
                    onClick={() => setRating(score)}
                    className="border-0 bg-transparent p-0 cursor-pointer"
                  >
                    <Star
                      size={32}
                      className={
                        score <= rating
                          ? "fill-[#ee3224] text-[#ee3224]"
                          : "text-[#d4d4d4]"
                      }
                    />
                  </button>
                ))}
              </div>

              {rating > 0 && (
                <p className={`${mono} mb-[16px] text-[13px] text-[#a4a4a4]`}>
                  {rating >= 4
                    ? "Cảm ơn bạn đã đánh giá tốt!"
                    : rating >= 2
                      ? "Cảm ơn phản hồi của bạn."
                      : "Chúng tôi xin lỗi về trải nghiệm chưa tốt."}
                </p>
              )}

              <p className={`${mono} mb-[8px] text-[12px] font-[500] uppercase tracking-[0.96px] text-[#a4a4a4]`}>
                Tip cho Fixer (tùy chọn)
              </p>
              <div className="flex flex-wrap gap-[8px]">
                {[5000, 10000, 20000, 50000].map((amount) => (
                  <button
                    key={amount}
                    onClick={() => setTip(tip === amount ? null : amount)}
                    className={`h-[36px] rounded-full border px-[16px] cursor-pointer transition-all ${
                      tip === amount
                        ? "border-[#ee3224] bg-[#ee3224] text-white"
                        : "border-[rgba(0,0,0,0.1)] bg-white text-[#080b0d] hover:border-[#ee3224]"
                    }`}
                  >
                    <span className={`${mono} text-[12px] font-[500]`}>
                      {formatVND(amount)}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-[12px] sm:flex-row">
              <button className="flex h-[48px] flex-1 items-center justify-center gap-[6px] rounded-[10px] border border-black bg-white cursor-pointer transition-colors hover:bg-[#f5f5f5]">
                <Download size={16} className="text-[#080b0d]" />
                <span className={`${mono} text-[14px] font-[500] text-[#080b0d]`}>
                  Tải hóa đơn
                </span>
              </button>
              <button
                onClick={() => navigate("/")}
                className="flex h-[48px] flex-[1.4] items-center justify-center gap-[8px] rounded-[10px] border-0 bg-[#ee3224] cursor-pointer transition-colors hover:bg-[#d42b1e]"
              >
                <span className={`${mono} text-[14px] font-[500] text-white`}>
                  Về trang chủ
                </span>
                <ChevronRight size={18} className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (step === "confirm") {
    return (
      <div className="overflow-x-hidden bg-white">
        <div className={`${pagePadding} pt-8 pb-16 sm:pt-10 sm:pb-20`}>
          <div className="mx-auto max-w-[520px]">
            <button
              onClick={() => setStep(selected === "card" ? "card-input" : "select")}
              className={`mb-[16px] inline-flex items-center gap-[4px] border-0 bg-transparent p-0 text-[13px] font-[500] text-[#a4a4a4] cursor-pointer transition-colors hover:text-[#080b0d] ${mono}`}
            >
              <ChevronLeft size={16} /> Quay lại
            </button>

            <h2 className={`${mono} mb-[8px] text-center text-[24px] font-[700] text-[#080b0d]`}>
              Xác nhận thanh toán
            </h2>
            <p className={`${mono} mb-[32px] text-center text-[14px] text-[#a4a4a4]`}>
              Kiểm tra thông tin trước khi thanh toán
            </p>

            <div className="mb-[24px] rounded-[14px] border border-[rgba(4,38,153,0.08)] p-[24px]">
              <div className="mb-[16px] flex items-center gap-[12px] border-b border-[rgba(4,38,153,0.08)] pb-[16px]">
                <div className="flex size-[44px] items-center justify-center rounded-full bg-[rgba(238,50,36,0.1)]">
                  <Wrench size={20} className="text-[#ee3224]" />
                </div>
                <div>
                  <p className={`${mono} text-[14px] font-[500] text-[#080b0d]`}>
                    {request.serviceTitle}
                  </p>
                  <p className={`${mono} text-[12px] text-[#a4a4a4]`}>
                    {request.vehicleName} · {request.vehiclePlate}
                  </p>
                </div>
              </div>

              <div className="mb-[16px] space-y-[10px]">
                {[
                  ["Phương thức", paymentMethods.find((method) => method.id === selected)?.name || ""],
                  [request.serviceTitle, formatVND(SERVICE_FEE)],
                  ["Phí di chuyển (3.2 km)", formatVND(TRAVEL_FEE)],
                ].map(([key, value]) => (
                  <div key={key} className="flex justify-between gap-3">
                    <span className={`${mono} text-[13px] text-[#080b0d]`}>{key}</span>
                    <span className={`${mono} text-right text-[13px] font-[500] text-[#080b0d]`}>
                      {value}
                    </span>
                  </div>
                ))}
                {applied && (
                  <div className="flex justify-between gap-3">
                    <span className={`${mono} text-[13px] text-[#ee3224]`}>
                      Giảm giá (RESQ10K)
                    </span>
                    <span className={`${mono} text-[13px] font-[500] text-[#ee3224]`}>
                      -{formatVND(DISCOUNT)}
                    </span>
                  </div>
                )}
              </div>

              <div className="border-t border-[rgba(4,38,153,0.08)] pt-[16px]">
                <div className="flex items-center justify-between gap-3">
                  <span className={`${mono} text-[14px] font-[500] text-[#080b0d]`}>
                    Tổng cộng
                  </span>
                  <span className={`${mono} text-[24px] font-[700] text-[#ee3224]`}>
                    {formatVND(currentTotal)}
                  </span>
                </div>
              </div>
            </div>

            <div className="mb-[24px] flex items-center gap-[8px] rounded-[10px] bg-[#f9fafb] p-[12px]">
              <Shield size={16} className="shrink-0 text-[#a4a4a4]" />
              <p className={`${mono} text-[12px] text-[#a4a4a4]`}>
                Giao dịch được bảo mật bởi ResQ. Thông tin thanh toán không được lưu trữ.
              </p>
            </div>

            <div className="flex flex-col gap-[12px] sm:flex-row">
              <button
                onClick={() => setStep(selected === "card" ? "card-input" : "select")}
                className="h-[48px] flex-1 rounded-[10px] border border-black bg-white cursor-pointer transition-colors hover:bg-[#f5f5f5]"
              >
                <span className={`${mono} text-[14px] font-[500] text-[#080b0d]`}>
                  Hủy
                </span>
              </button>
              <button
                onClick={() => setStep("processing")}
                className="h-[48px] flex-[1.4] rounded-[10px] border-0 bg-[#ee3224] cursor-pointer transition-colors hover:bg-[#d42b1e]"
              >
                <span className={`${mono} text-[14px] font-[500] text-white`}>
                  Xác nhận · {formatVND(currentTotal)}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (step === "card-input") {
    const canProceed =
      cardNumber.replace(/\s/g, "").length >= 16 &&
      cardName.length > 0 &&
      cardExpiry.length === 5 &&
      cardCVV.length >= 3;

    return (
      <div className="overflow-x-hidden bg-white">
        <div className={`${pagePadding} pt-8 pb-16 sm:pt-10 sm:pb-20`}>
          <div className="mx-auto max-w-[520px]">
            <button
              onClick={() => {
                setStep("select");
                setSelected("card");
              }}
              className={`mb-[16px] inline-flex items-center gap-[4px] border-0 bg-transparent p-0 text-[13px] font-[500] text-[#a4a4a4] cursor-pointer transition-colors hover:text-[#080b0d] ${mono}`}
            >
              <ChevronLeft size={16} /> Quay lại
            </button>

            <h2 className={`${mono} mb-[8px] text-[24px] font-[700] text-[#080b0d]`}>
              Thông tin thẻ
            </h2>
            <p className={`${mono} mb-[32px] text-[14px] text-[#a4a4a4]`}>
              Nhập thông tin thẻ ngân hàng của bạn
            </p>

            <div className="mb-[32px] space-y-[16px]">
              <div>
                <label className={`${mono} mb-[6px] block text-[12px] font-[500] uppercase tracking-[0.96px] text-[#a4a4a4]`}>
                  Số thẻ
                </label>
                <input
                  type="text"
                  value={cardNumber}
                  onChange={(event) => setCardNumber(formatCardNumber(event.target.value))}
                  placeholder="1234 5678 9012 3456"
                  className={`h-[48px] w-full rounded-[10px] border border-[rgba(4,38,153,0.12)] bg-white px-[16px] text-[14px] outline-none transition-colors focus:border-[#ee3224] ${mono}`}
                />
              </div>

              <div>
                <label className={`${mono} mb-[6px] block text-[12px] font-[500] uppercase tracking-[0.96px] text-[#a4a4a4]`}>
                  Tên trên thẻ
                </label>
                <input
                  type="text"
                  value={cardName}
                  onChange={(event) => setCardName(event.target.value.toUpperCase())}
                  placeholder="NGUYEN VAN A"
                  className={`h-[48px] w-full rounded-[10px] border border-[rgba(4,38,153,0.12)] bg-white px-[16px] text-[14px] outline-none transition-colors focus:border-[#ee3224] ${mono}`}
                />
              </div>

              <div className="grid gap-[16px] sm:grid-cols-[minmax(0,1fr)_120px]">
                <div>
                  <label className={`${mono} mb-[6px] block text-[12px] font-[500] uppercase tracking-[0.96px] text-[#a4a4a4]`}>
                    Ngày hết hạn
                  </label>
                  <input
                    type="text"
                    value={cardExpiry}
                    onChange={(event) => setCardExpiry(formatExpiry(event.target.value))}
                    placeholder="MM/YY"
                    className={`h-[48px] w-full rounded-[10px] border border-[rgba(4,38,153,0.12)] bg-white px-[16px] text-[14px] outline-none transition-colors focus:border-[#ee3224] ${mono}`}
                  />
                </div>
                <div>
                  <label className={`${mono} mb-[6px] block text-[12px] font-[500] uppercase tracking-[0.96px] text-[#a4a4a4]`}>
                    CVV
                  </label>
                  <input
                    type="password"
                    value={cardCVV}
                    onChange={(event) =>
                      setCardCVV(event.target.value.replace(/\D/g, "").substring(0, 4))
                    }
                    placeholder="•••"
                    className={`h-[48px] w-full rounded-[10px] border border-[rgba(4,38,153,0.12)] bg-white px-[16px] text-[14px] outline-none transition-colors focus:border-[#ee3224] ${mono}`}
                  />
                </div>
              </div>
            </div>

            <div className="mb-[24px] flex items-center gap-[8px] rounded-[10px] bg-[#f9fafb] p-[12px]">
              <Shield size={16} className="shrink-0 text-[#a4a4a4]" />
              <p className={`${mono} text-[12px] text-[#a4a4a4]`}>
                Thông tin thẻ được mã hóa và bảo mật. ResQ không lưu trữ số thẻ.
              </p>
            </div>

            <button
              onClick={() => canProceed && setStep("confirm")}
              disabled={!canProceed}
              className={`h-[48px] w-full rounded-[10px] border-0 transition-colors ${
                canProceed
                  ? "cursor-pointer bg-[#ee3224] hover:bg-[#d42b1e]"
                  : "cursor-not-allowed bg-[#ccc]"
              }`}
            >
              <span className={`${mono} text-[14px] font-[500] text-white`}>
                Tiếp tục · {formatVND(currentTotal)}
              </span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-x-hidden bg-white">
      <div className={`${pagePadding} pt-8 pb-16 sm:pt-10 sm:pb-20`}>
        <div className={pageShell}>
          <Link
            to="/theo-doi"
            className={`mb-[16px] inline-flex items-center gap-[4px] text-[13px] font-[500] text-[#a4a4a4] no-underline transition-colors hover:text-[#080b0d] ${mono}`}
          >
            <ChevronLeft size={16} /> Quay lại
          </Link>

          <div className="mb-8 max-w-[620px]">
            <h1 className={`${mono} mb-[8px] text-[36px] font-[700] text-[#080b0d] sm:text-[44px] lg:text-[48px]`}>
              Thanh toán
            </h1>
            <p className={`${mono} text-[14px] leading-[24px] text-[#4a5565]`}>
              Chọn phương thức thanh toán phù hợp với bạn và kiểm tra đầy đủ chi
              tiết đơn hàng trước khi xác nhận.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
            <div>
              <p className={`${mono} mb-[12px] text-[12px] font-[500] text-[#a4a4a4]`}>
                Phương thức thanh toán
              </p>
              <div className="mb-[32px] flex flex-col gap-[8px]">
                {paymentMethods.map((method) => {
                  const Icon = method.icon;
                  const isSelected = selected === method.id;
                  return (
                    <button
                      key={method.id}
                      onClick={() => setSelected(method.id)}
                      className={`flex min-h-[80px] items-center gap-[16px] rounded-[12px] bg-white px-[22px] py-[18px] text-left cursor-pointer transition-all ${
                        isSelected
                          ? "border-2 border-[#ee3224]"
                          : "border border-[rgba(4,38,153,0.08)]"
                      }`}
                    >
                      <div
                        className={`flex size-[44px] shrink-0 items-center justify-center rounded-full ${
                          isSelected ? "bg-[rgba(238,50,36,0.1)]" : "bg-[#f3f3f5]"
                        }`}
                      >
                        <Icon
                          size={20}
                          className={isSelected ? "text-[#ee3224]" : "text-[#a4a4a4]"}
                        />
                      </div>
                      <div className="flex-1 text-left">
                        <p className={`${mono} text-[14px] font-[500] text-[#080b0d]`}>
                          {method.name}
                        </p>
                        <p className={`${mono} text-[12px] text-[#a4a4a4]`}>
                          {method.desc}
                        </p>
                      </div>
                      {isSelected && (
                        <div className="flex size-[24px] items-center justify-center rounded-[12px] bg-[#ee3224]">
                          <Check size={14} className="text-white" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              <p className={`${mono} mb-[8px] text-[12px] font-[500] text-[#a4a4a4]`}>
                Mã giảm giá
              </p>
              <div className="mb-[8px] flex flex-col gap-[8px] sm:flex-row">
                <input
                  type="text"
                  value={coupon}
                  onChange={(event) => {
                    setCoupon(event.target.value);
                    setApplied(false);
                    setCouponError("");
                  }}
                  onKeyDown={(event) => event.key === "Enter" && handleApplyCoupon()}
                  className={`h-[40px] flex-1 rounded-[10px] border px-[16px] text-[12px] outline-none ${mono} ${
                    couponError ? "border-[#ee3224]" : "border-black"
                  }`}
                />
                <button
                  onClick={handleApplyCoupon}
                  className="h-[40px] rounded-[10px] border border-black bg-[#e8e8e8] px-[16px] cursor-pointer transition-colors hover:bg-[#d8d8d8]"
                >
                  <span className={`${mono} text-[12px] font-[500] text-black`}>
                    Áp dụng
                  </span>
                </button>
              </div>

              {applied && (
                <div className="flex items-center gap-[4px]">
                  <CheckCircle2 size={14} className="text-[#ee3224]" />
                  <p className={`${mono} text-[11px] text-[#ee3224]`}>
                    Đã áp dụng: Giảm {formatVND(DISCOUNT)}
                  </p>
                </div>
              )}
              {couponError && (
                <div className="flex items-center gap-[4px]">
                  <AlertCircle size={14} className="text-[#ee3224]" />
                  <p className={`${mono} text-[11px] text-[#ee3224]`}>
                    {couponError}
                  </p>
                </div>
              )}
            </div>

            <aside className="lg:sticky lg:top-[108px]">
              <div className="rounded-[14px] border border-[rgba(4,38,153,0.08)] p-[24px] shadow-[0_18px_50px_rgba(8,11,13,0.04)]">
                <p className={`${mono} mb-[16px] text-[12px] font-[500] text-[#a4a4a4]`}>
                  Chi tiết đơn hàng
                </p>

                <div className="mb-[16px] flex items-center gap-[12px] border-b border-[rgba(4,38,153,0.08)] pb-[16px]">
                  <div className="flex size-[44px] items-center justify-center rounded-full bg-[rgba(238,50,36,0.1)]">
                    <Wrench size={20} className="text-[#ee3224]" />
                  </div>
                  <div>
                    <p className={`${mono} text-[14px] font-[500] text-[#080b0d]`}>
                      {request.serviceTitle}
                    </p>
                    <p className={`${mono} text-[12px] text-[#a4a4a4]`}>
                      {request.vehicleName} · {request.vehiclePlate}
                    </p>
                  </div>
                </div>

                <div className="mb-[16px] flex items-center gap-[12px] border-b border-[rgba(4,38,153,0.08)] pb-[16px]">
                  <div className="flex size-[44px] items-center justify-center rounded-full bg-[#ee3224]">
                    <span className={`${mono} text-[14px] font-[500] text-white`}>
                      TM
                    </span>
                  </div>
                  <div>
                    <p className={`${mono} text-[14px] font-[500] text-[#080b0d]`}>
                      {request.fixerTeam}
                    </p>
                    <div className="flex items-center gap-[4px]">
                      <span className={`${mono} text-[12px] text-[#a4a4a4]`}>
                        Fixer ·
                      </span>
                      <Star size={12} className="fill-[#ee3224] text-[#ee3224]" />
                      <span className={`${mono} text-[12px] text-[#a4a4a4]`}>
                        4.8
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mb-[16px] space-y-[8px]">
                  {[
                    [request.serviceTitle, formatVND(SERVICE_FEE)],
                    ["Phí di chuyển (3.2 km)", formatVND(TRAVEL_FEE)],
                  ].map(([key, value]) => (
                    <div key={key} className="flex justify-between gap-3">
                      <span className={`${mono} text-[13px] text-[#080b0d]`}>
                        {key}
                      </span>
                      <span className={`${mono} text-[13px] font-[500] text-[#080b0d]`}>
                        {value}
                      </span>
                    </div>
                  ))}
                  {applied && (
                    <div className="flex justify-between gap-3">
                      <span className={`${mono} text-[13px] text-[#ee3224]`}>
                        Giảm giá (RESQ10K)
                      </span>
                      <span className={`${mono} text-[13px] font-[500] text-[#ee3224]`}>
                        -{formatVND(DISCOUNT)}
                      </span>
                    </div>
                  )}
                </div>

                <div className="mb-[16px] border-t border-[rgba(4,38,153,0.08)] pt-[16px]">
                  <div className="flex items-center justify-between gap-3">
                    <span className={`${mono} text-[14px] font-[500] text-[#080b0d]`}>
                      Tổng cộng
                    </span>
                    <span className={`${mono} text-[24px] font-[700] text-[#ee3224]`}>
                      {formatVND(currentTotal)}
                    </span>
                  </div>
                </div>

                <button
                  onClick={handlePay}
                  className="mb-[12px] h-[48px] w-full rounded-[10px] border-0 bg-[#ee3224] cursor-pointer transition-colors hover:bg-[#d42b1e]"
                >
                  <span className={`${mono} text-[16px] font-[500] text-white`}>
                    {selected === "card"
                      ? "Nhập thẻ"
                      : selected === "cash"
                        ? "Xác nhận"
                        : "Tiếp tục"}
                  </span>
                </button>

                <p className={`${mono} text-center text-[11px] text-[#a4a4a4]`}>
                  Bằng việc thanh toán, bạn đồng ý với{" "}
                  <span className="cursor-pointer text-[#ee3224] underline">
                    Điều khoản dịch vụ
                  </span>{" "}
                  của ResQ
                </p>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
