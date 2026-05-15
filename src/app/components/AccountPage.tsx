import { useState } from "react";
import { Link, useNavigate } from "react-router";
import {
  ChevronLeft,
  User,
  Car,
  Bell,
  Shield,
  LogOut,
  Trash2,
  Plus,
  Bike,
} from "lucide-react";
import { useAuth } from "./AuthContext";
import { useResQStore } from "./resqStore";
import { VehicleFormModal } from "./vehicles/VehicleFormModal";

const mono = "font-['IBM_Plex_Mono',monospace]";
const pagePadding = "px-5 sm:px-8 lg:px-[84px] xl:px-[120px]";
const pageShell = "mx-auto w-full max-w-[1240px]";

const sidebarItems = [
  { id: "profile", label: "Thông tin cá nhân", icon: User },
  { id: "vehicles", label: "Xe của tôi", icon: Car },
  { id: "notifications", label: "Thông báo", icon: Bell },
  { id: "security", label: "Bảo mật", icon: Shield },
] as const;

const notifications = [
  { id: "push", label: "Thông báo đẩy", desc: "Nhận thông báo trên điện thoại", on: true },
  { id: "sms", label: "Tin nhắn SMS", desc: "Nhận tin nhắn qua số điện thoại", on: true },
  { id: "email", label: "Email", desc: "Nhận thông báo qua email", on: false },
  { id: "promo", label: "Khuyến mãi", desc: "Nhận ưu đãi và mã giảm giá", on: true },
];

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState("vehicles");
  const [showAddVehicleModal, setShowAddVehicleModal] = useState(false);
  const [notifState, setNotifState] = useState(
    Object.fromEntries(notifications.map((notification) => [notification.id, notification.on])),
  );
  const { user, isLoggedIn, logout } = useAuth();
  const { vehicles, addVehicle, removeVehicle, setDefaultVehicle } = useResQStore();
  const navigate = useNavigate();

  if (!isLoggedIn) {
    return (
      <div className="overflow-x-hidden bg-white">
        <div className={`${pagePadding} flex min-h-[60vh] items-center justify-center py-12`}>
          <div className="w-full max-w-[460px] rounded-[24px] border border-[rgba(4,38,153,0.08)] bg-white p-8 text-center shadow-[0_18px_50px_rgba(8,11,13,0.04)] sm:p-10">
            <div className="mx-auto mb-[24px] flex size-[64px] items-center justify-center rounded-full bg-[rgba(238,50,36,0.1)]">
              <User size={32} className="text-[#ee3224]" />
            </div>
            <h2 className={`${mono} mb-[8px] text-[24px] font-[700] text-[#080b0d]`}>
              Bạn chưa đăng nhập
            </h2>
            <p className={`${mono} mb-[32px] text-[14px] leading-[24px] text-[#a4a4a4]`}>
              Đăng nhập để quản lý tài khoản, phương tiện và cài đặt thông báo của bạn.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                to="/dang-nhap"
                className="flex h-[48px] items-center justify-center rounded-[10px] bg-[#ee3224] px-[32px] no-underline transition-colors hover:bg-[#d42b1e]"
              >
                <span className={`${mono} text-[14px] font-[500] text-white`}>
                  Đăng nhập
                </span>
              </Link>
              <Link
                to="/dang-nhap?tab=register"
                className="flex h-[48px] items-center justify-center rounded-[10px] border border-black px-[32px] no-underline transition-colors hover:bg-[#f5f5f5]"
              >
                <span className={`${mono} text-[14px] font-[500] text-[#080b0d]`}>
                  Đăng ký
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const displayName = user?.name || "Nguyễn Văn An";
  const displayPhone = user?.phone || "0901 234 567";
  const displayEmail = user?.email || "an.nguyen@email.com";

  return (
    <div className="overflow-x-hidden bg-white">
      <div className={`${pagePadding} pt-8 pb-16 sm:pt-10 sm:pb-20`}>
        <div className={pageShell}>
          <Link
            to="/"
            className={`mb-[16px] inline-flex items-center gap-[4px] text-[13px] font-[500] text-[#a4a4a4] no-underline transition-colors hover:text-[#080b0d] ${mono}`}
          >
            <ChevronLeft size={16} /> Quay lại
          </Link>

          <div className="mb-8 max-w-[620px]">
            <h1 className={`${mono} mb-[8px] text-[36px] font-[700] text-[#080b0d] sm:text-[44px] lg:text-[48px]`}>
              Tài khoản
            </h1>
            <p className={`${mono} text-[14px] leading-[24px] text-[#4a5565]`}>
              Quản lý thông tin cá nhân, xe của bạn và các thiết lập liên quan đến
              trải nghiệm ResQ.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[240px_minmax(0,1fr)] lg:items-start">
            <aside className="space-y-5">
              <div className="rounded-[20px] border border-[rgba(4,38,153,0.08)] bg-white p-5 shadow-[0_18px_50px_rgba(8,11,13,0.04)]">
                <div className="mb-[18px] flex items-center gap-[12px]">
                  <div className="flex size-[48px] items-center justify-center rounded-full bg-[rgba(238,50,36,0.1)]">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#EE3224" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="10" cy="7" r="3" />
                      <path d="M3 18v-1a5 5 0 0 1 10 0v1" />
                    </svg>
                  </div>
                  <div>
                    <p className={`${mono} text-[14px] font-[500] text-[#080b0d]`}>
                      {displayName}
                    </p>
                    <p className={`${mono} text-[12px] text-[#a4a4a4]`}>
                      {displayPhone}
                    </p>
                  </div>
                </div>

                <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
                  {sidebarItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeTab === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        className={`flex min-h-[44px] items-center gap-[12px] rounded-[10px] border-0 px-[12px] text-left cursor-pointer transition-colors ${
                          isActive
                            ? "bg-[rgba(238,50,36,0.08)]"
                            : "bg-transparent hover:bg-[#f5f5f5]"
                        }`}
                      >
                        <Icon
                          size={16}
                          className={isActive ? "text-[#ee3224]" : "text-[#a4a4a4]"}
                        />
                        <span
                          className={`${mono} text-[13px] font-[500] ${
                            isActive ? "text-[#ee3224]" : "text-[#080b0d]"
                          }`}
                        >
                          {item.label}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <button
                  className="mt-[16px] flex h-[42px] items-center gap-[12px] border-0 bg-transparent px-[4px] cursor-pointer"
                  onClick={handleLogout}
                >
                  <LogOut size={16} className="text-[#ee3224]" />
                  <span className={`${mono} text-[13px] font-[500] text-[#ee3224]`}>
                    Đăng xuất
                  </span>
                </button>
              </div>
            </aside>

            <div className="rounded-[20px] border border-[rgba(4,38,153,0.08)] bg-white p-5 shadow-[0_18px_50px_rgba(8,11,13,0.04)] sm:p-7 lg:p-8">
              {activeTab === "vehicles" && (
                <div>
                  <div className="mb-[24px] flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h2 className={`${mono} mb-[4px] text-[24px] font-[700] text-[#080b0d]`}>
                        Xe của tôi
                      </h2>
                      <p className={`${mono} text-[13px] text-[#a4a4a4]`}>
                        Quản lý danh sách xe để đặt dịch vụ nhanh hơn
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setShowAddVehicleModal(true)}
                      className="flex h-[38px] items-center justify-center gap-[8px] rounded-[8px] border-0 bg-[#ee3224] px-[16px] cursor-pointer transition-colors hover:bg-[#d42b1e]"
                    >
                      <Plus size={16} className="text-white" />
                      <span className={`${mono} text-[13px] font-[500] text-white`}>
                        Thêm xe
                      </span>
                    </button>
                  </div>

                  {vehicles.length > 0 ? (
                    <div className="flex flex-col gap-[12px]">
                      {vehicles.map((vehicle) => (
                        <div
                          key={vehicle.id}
                          className={`flex flex-col gap-4 rounded-[14px] border p-[16px] sm:flex-row sm:items-center ${
                            vehicle.isDefault
                              ? "border-[#ee3224]"
                              : "border-[rgba(4,38,153,0.08)]"
                          }`}
                        >
                          <div className="flex items-center gap-[16px]">
                            <div className="flex size-[44px] shrink-0 items-center justify-center rounded-full bg-[rgba(238,50,36,0.1)]">
                              {vehicle.type === "Xe máy" ? (
                                <Bike size={20} className="text-[#ee3224]" />
                              ) : (
                                <Car size={20} className="text-[#ee3224]" />
                              )}
                            </div>
                            <div>
                              <div className="flex flex-wrap items-center gap-[8px]">
                                <p className={`${mono} text-[14px] font-[500] text-[#080b0d]`}>
                                  {vehicle.name}
                                </p>
                                {vehicle.isDefault && (
                                  <span className={`${mono} rounded-[4px] bg-[#ee3224] px-[8px] py-[2px] text-[11px] font-[500] text-white`}>
                                    Mặc định
                                  </span>
                                )}
                              </div>
                              <p className={`${mono} text-[12px] text-[#a4a4a4]`}>
                                {vehicle.plate} · {vehicle.year} · {vehicle.type}
                              </p>
                            </div>
                          </div>

                          <div className="flex flex-wrap items-center gap-2 sm:ml-auto sm:justify-end">
                            {!vehicle.isDefault && (
                              <button
                                type="button"
                                onClick={() => setDefaultVehicle(vehicle.id)}
                                className="h-[30px] rounded-[6px] border border-[#d8d8d8] bg-white px-[12px] cursor-pointer transition-colors hover:bg-[#f5f5f5]"
                              >
                                <span className={`${mono} text-[11px] text-[#a4a4a4]`}>
                                  Đặt mặc định
                                </span>
                              </button>
                            )}
                            <button
                              type="button"
                              onClick={() => removeVehicle(vehicle.id)}
                              className="flex size-[32px] items-center justify-center rounded-[6px] border-0 bg-transparent cursor-pointer transition-colors hover:bg-[#fff0f0]"
                              aria-label={`Xóa xe ${vehicle.name}`}
                            >
                              <Trash2 size={16} className="text-[#a4a4a4]" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="rounded-[16px] border border-dashed border-[rgba(4,38,153,0.12)] bg-[#fafafa] p-6">
                      <p className={`${mono} text-[13px] leading-[22px] text-[#4a5565]`}>
                        Bạn chưa có phương tiện nào. Thêm xe để đặt dịch vụ nhanh hơn
                        ở lần tiếp theo.
                      </p>
                    </div>
                  )}
                </div>
              )}

              {activeTab === "notifications" && (
                <div>
                  <h2 className={`${mono} mb-[4px] text-[24px] font-[700] text-[#080b0d]`}>
                    Cài đặt thông báo
                  </h2>
                  <p className={`${mono} mb-[24px] text-[13px] text-[#a4a4a4]`}>
                    Chọn cách bạn muốn nhận thông báo từ ResQ
                  </p>
                  <div className="flex flex-col gap-[16px]">
                    {notifications.map((notification) => (
                      <div
                        key={notification.id}
                        className="flex items-center justify-between gap-4 border-b border-[rgba(4,38,153,0.08)] py-[12px]"
                      >
                        <div className="min-w-0">
                          <p className={`${mono} text-[14px] font-[500] text-[#080b0d]`}>
                            {notification.label}
                          </p>
                          <p className={`${mono} text-[12px] leading-[20px] text-[#a4a4a4]`}>
                            {notification.desc}
                          </p>
                        </div>
                        <button
                          onClick={() =>
                            setNotifState((state) => ({
                              ...state,
                              [notification.id]: !state[notification.id],
                            }))
                          }
                          className={`relative h-[28px] w-[48px] shrink-0 rounded-full border-0 cursor-pointer transition-colors ${
                            notifState[notification.id] ? "bg-[#ee3224]" : "bg-[#d8d8d8]"
                          }`}
                        >
                          <div
                            className={`absolute top-[3px] size-[22px] rounded-full bg-white transition-all ${
                              notifState[notification.id] ? "left-[23px]" : "left-[3px]"
                            }`}
                          />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "profile" && (
                <div>
                  <h2 className={`${mono} mb-[24px] text-[24px] font-[700] text-[#080b0d]`}>
                    Thông tin cá nhân
                  </h2>
                  <div className="grid gap-[16px] lg:max-w-[480px]">
                    {[
                      ["Họ và tên", displayName],
                      ["Số điện thoại", displayPhone],
                      ["Email", displayEmail],
                    ].map(([label, value]) => (
                      <div key={label}>
                        <p className={`${mono} mb-[6px] text-[12px] font-[500] text-[#a4a4a4]`}>
                          {label}
                        </p>
                        <input
                          type="text"
                          defaultValue={value}
                          className={`h-[42px] w-full rounded-[8px] border border-[rgba(4,38,153,0.08)] bg-white px-[14px] text-[14px] text-[#080b0d] outline-none transition-colors focus:border-[#ee3224] ${mono}`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "security" && (
                <div className="max-w-[540px]">
                  <h2 className={`${mono} mb-[16px] text-[24px] font-[700] text-[#080b0d]`}>
                    Bảo mật
                  </h2>
                  <div className="space-y-4">
                    <div className="rounded-[14px] bg-[#f7f7f8] p-5">
                      <p className={`${mono} mb-[6px] text-[14px] font-[500] text-[#080b0d]`}>
                        Mật khẩu tài khoản
                      </p>
                      <p className={`${mono} text-[13px] leading-[22px] text-[#4a5565]`}>
                        Bạn có thể cập nhật mật khẩu và rà soát các thiết lập bảo mật
                        tại đây trong các bản cập nhật tiếp theo.
                      </p>
                    </div>
                    <div className="rounded-[14px] bg-[#f7f7f8] p-5">
                      <p className={`${mono} mb-[6px] text-[14px] font-[500] text-[#080b0d]`}>
                        Phiên đăng nhập
                      </p>
                      <p className={`${mono} text-[13px] leading-[22px] text-[#4a5565]`}>
                        Nếu cần, bạn có thể đăng xuất khỏi tài khoản của mình ngay từ
                        menu bên trái.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {showAddVehicleModal && (
        <VehicleFormModal
          onClose={() => setShowAddVehicleModal(false)}
          onSave={(payload) => {
            addVehicle(payload);
            setShowAddVehicleModal(false);
          }}
        />
      )}
    </div>
  );
}
