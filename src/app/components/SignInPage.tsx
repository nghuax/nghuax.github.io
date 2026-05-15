import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { useAuth } from "./AuthContext";
import { Eye, EyeOff, CheckCircle2 } from "lucide-react";
import imgGoogle from "../../imports/SignIn/ca90735eb1f499791a041f380b71418fb718b513.png";
import imgApple from "../../imports/SignIn/1c8fd63b5680b388cf5417bfa7f9c8d740713c82.png";

const mono = "font-['IBM_Plex_Mono',monospace]";

export default function SignInPage() {
  const [searchParams] = useSearchParams();
  const initialTab = searchParams.get("tab") === "register" ? "register" : "login";
  const [tab, setTab] = useState<"login" | "register">(initialTab);
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const [loginInput, setLoginInput] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const [regName, setRegName] = useState("");
  const [regPhone, setRegPhone] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regConfirm, setRegConfirm] = useState("");
  const [regAgree, setRegAgree] = useState(false);
  const [regError, setRegError] = useState("");

  const handleLogin = () => {
    if (!loginInput.trim()) {
      setLoginError("Vui lòng nhập số điện thoại hoặc email");
      return;
    }
    if (!loginPassword) {
      setLoginError("Vui lòng nhập mật khẩu");
      return;
    }
    setLoginError("");
    login({
      name: "Nguyễn Văn A",
      phone: loginInput.includes("@") ? "0901234567" : loginInput,
      email: loginInput.includes("@") ? loginInput : "user@resq.vn",
    });
    navigate("/");
  };

  const handleRegister = () => {
    if (!regName.trim()) {
      setRegError("Vui lòng nhập họ tên");
      return;
    }
    if (!regPhone.trim()) {
      setRegError("Vui lòng nhập số điện thoại");
      return;
    }
    if (!regEmail.trim()) {
      setRegError("Vui lòng nhập email");
      return;
    }
    if (!regPassword) {
      setRegError("Vui lòng nhập mật khẩu");
      return;
    }
    if (regPassword.length < 6) {
      setRegError("Mật khẩu phải có ít nhất 6 ký tự");
      return;
    }
    if (regPassword !== regConfirm) {
      setRegError("Mật khẩu xác nhận không khớp");
      return;
    }
    if (!regAgree) {
      setRegError("Vui lòng đồng ý với điều khoản dịch vụ");
      return;
    }
    setRegError("");
    login({ name: regName, phone: regPhone, email: regEmail });
    navigate("/");
  };

  const handleSocialLogin = (provider: string) => {
    login({
      name: provider === "Google" ? "Google User" : "Apple User",
      phone: "0901234567",
      email: provider === "Google" ? "user@gmail.com" : "user@icloud.com",
    });
    navigate("/");
  };

  return (
    <div className="overflow-x-hidden bg-white">
      <div className="flex min-h-[calc(100vh-76px)] items-center justify-center px-5 py-10 sm:px-8 lg:min-h-[calc(100vh-88px)] lg:px-[84px]">
        <div className="w-full max-w-[460px] rounded-[28px] border border-[rgba(4,38,153,0.08)] bg-white p-6 shadow-[0_22px_70px_rgba(8,11,13,0.08)] sm:p-8">
          <div className="mb-8 text-center">
            <p className={`${mono} mb-4 text-[12px] font-[500] uppercase tracking-[1.8px] text-[#ee3224]`}>
              Tài khoản ResQ
            </p>
            <h1 className={`${mono} mb-3 text-[28px] font-[700] leading-[1.2] text-[#080b0d] sm:text-[32px]`}>
              {tab === "login" ? "Chào mừng quay lại" : "Tạo tài khoản mới"}
            </h1>
            <p className={`${mono} text-[13px] leading-[22px] text-[#4a5565]`}>
              {tab === "login"
                ? "Đăng nhập để tiếp tục theo dõi dịch vụ, thanh toán và quản lý tài khoản của bạn."
                : "Đăng ký nhanh để lưu thông tin xe, gọi cứu hộ và nhận cập nhật từ ResQ."}
            </p>
          </div>

          <div className="mb-8 flex border-b border-[rgba(4,38,153,0.08)]">
            <button
              onClick={() => {
                setTab("login");
                setRegError("");
                setLoginError("");
              }}
              className={`flex-1 border-0 border-b-2 bg-transparent pb-3 cursor-pointer transition-colors ${
                tab === "login"
                  ? "border-[#ee3224] text-[#ee3224]"
                  : "border-transparent text-[#a4a4a4] hover:text-[#080b0d]"
              }`}
            >
              <span className={`${mono} text-[14px] font-[500]`}>Đăng nhập</span>
            </button>
            <button
              onClick={() => {
                setTab("register");
                setRegError("");
                setLoginError("");
              }}
              className={`flex-1 border-0 border-b-2 bg-transparent pb-3 cursor-pointer transition-colors ${
                tab === "register"
                  ? "border-[#ee3224] text-[#ee3224]"
                  : "border-transparent text-[#a4a4a4] hover:text-[#080b0d]"
              }`}
            >
              <span className={`${mono} text-[14px] font-[500]`}>Đăng ký</span>
            </button>
          </div>

          {tab === "login" ? (
            <>
              <div className="flex flex-col gap-[14px]">
                <div>
                  <label className={`${mono} mb-[6px] block text-[11px] font-[500] uppercase tracking-[0.88px] text-[#a4a4a4]`}>
                    Số điện thoại / Email
                  </label>
                  <input
                    type="text"
                    value={loginInput}
                    onChange={(event) => {
                      setLoginInput(event.target.value);
                      setLoginError("");
                    }}
                    onKeyDown={(event) => event.key === "Enter" && handleLogin()}
                    placeholder="Nhập số điện thoại hoặc email"
                    className={`h-[44px] w-full rounded-[12px] border px-[16px] text-[13px] text-black placeholder:text-[#a4a4a4] outline-none transition-colors focus:border-[#ee3224] ${mono} ${
                      loginError && !loginInput ? "border-[#ee3224]" : "border-black"
                    }`}
                  />
                </div>

                <div>
                  <label className={`${mono} mb-[6px] block text-[11px] font-[500] uppercase tracking-[0.88px] text-[#a4a4a4]`}>
                    Mật khẩu
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={loginPassword}
                      onChange={(event) => {
                        setLoginPassword(event.target.value);
                        setLoginError("");
                      }}
                      onKeyDown={(event) => event.key === "Enter" && handleLogin()}
                      placeholder="Nhập mật khẩu"
                      className={`h-[44px] w-full rounded-[12px] border px-[16px] pr-[44px] text-[13px] text-black placeholder:text-[#a4a4a4] outline-none transition-colors focus:border-[#ee3224] ${mono} ${
                        loginError && !loginPassword ? "border-[#ee3224]" : "border-black"
                      }`}
                    />
                    <button
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute top-1/2 right-[12px] -translate-y-1/2 border-0 bg-transparent p-0 cursor-pointer"
                    >
                      {showPassword ? (
                        <EyeOff size={16} className="text-[#a4a4a4]" />
                      ) : (
                        <Eye size={16} className="text-[#a4a4a4]" />
                      )}
                    </button>
                  </div>
                </div>

                {loginError && (
                  <p className={`${mono} text-[12px] text-[#ee3224]`}>{loginError}</p>
                )}

                <div className="flex justify-end">
                  <button className={`border-0 bg-transparent p-0 cursor-pointer text-[12px] text-[#ee3224] hover:underline ${mono}`}>
                    Quên mật khẩu?
                  </button>
                </div>

                <button
                  onClick={handleLogin}
                  className="mt-1 h-[44px] rounded-[12px] border-0 bg-[#ee3224] cursor-pointer transition-colors hover:bg-[#d42b1e]"
                >
                  <span className={`${mono} text-[13px] font-[500] tracking-[0.88px] text-[#f0f0f1]`}>
                    Đăng nhập
                  </span>
                </button>
              </div>

              <p className={`${mono} my-[24px] text-center text-[14px] font-[500] text-[#080b0d]`}>
                hoặc
              </p>

              <div className="flex flex-col gap-[10px]">
                <button
                  onClick={() => handleSocialLogin("Google")}
                  className="flex h-[44px] items-center justify-center gap-[8px] rounded-[12px] border border-black bg-[#e8e8e8] cursor-pointer transition-colors hover:bg-[#d8d8d8]"
                >
                  <img src={imgGoogle} alt="Google" className="size-[17px] object-contain" />
                  <span className={`${mono} text-[12px] font-[500] text-black`}>
                    Tiếp tục với Google
                  </span>
                </button>
                <button
                  onClick={() => handleSocialLogin("Apple")}
                  className="flex h-[44px] items-center justify-center gap-[8px] rounded-[12px] border border-black bg-[#e8e8e8] cursor-pointer transition-colors hover:bg-[#d8d8d8]"
                >
                  <img src={imgApple} alt="Apple" className="size-[17px] object-contain" />
                  <span className={`${mono} text-[12px] font-[500] text-black`}>
                    Tiếp tục với Apple
                  </span>
                </button>
              </div>

              <p className={`${mono} mt-[24px] text-center text-[13px] text-[#a4a4a4]`}>
                Chưa có tài khoản?{" "}
                <button
                  onClick={() => setTab("register")}
                  className={`border-0 bg-transparent p-0 cursor-pointer text-[13px] font-[500] text-[#ee3224] hover:underline ${mono}`}
                >
                  Đăng ký ngay
                </button>
              </p>
            </>
          ) : (
            <>
              <div className="flex flex-col gap-[14px]">
                <div>
                  <label className={`${mono} mb-[6px] block text-[11px] font-[500] uppercase tracking-[0.88px] text-[#a4a4a4]`}>
                    Họ và tên
                  </label>
                  <input
                    type="text"
                    value={regName}
                    onChange={(event) => {
                      setRegName(event.target.value);
                      setRegError("");
                    }}
                    placeholder="Nguyễn Văn A"
                    className={`h-[44px] w-full rounded-[12px] border border-black px-[16px] text-[13px] text-black placeholder:text-[#a4a4a4] outline-none transition-colors focus:border-[#ee3224] ${mono}`}
                  />
                </div>

                <div>
                  <label className={`${mono} mb-[6px] block text-[11px] font-[500] uppercase tracking-[0.88px] text-[#a4a4a4]`}>
                    Số điện thoại
                  </label>
                  <input
                    type="tel"
                    value={regPhone}
                    onChange={(event) => {
                      setRegPhone(event.target.value);
                      setRegError("");
                    }}
                    placeholder="0901 234 567"
                    className={`h-[44px] w-full rounded-[12px] border border-black px-[16px] text-[13px] text-black placeholder:text-[#a4a4a4] outline-none transition-colors focus:border-[#ee3224] ${mono}`}
                  />
                </div>

                <div>
                  <label className={`${mono} mb-[6px] block text-[11px] font-[500] uppercase tracking-[0.88px] text-[#a4a4a4]`}>
                    Email
                  </label>
                  <input
                    type="email"
                    value={regEmail}
                    onChange={(event) => {
                      setRegEmail(event.target.value);
                      setRegError("");
                    }}
                    placeholder="email@example.com"
                    className={`h-[44px] w-full rounded-[12px] border border-black px-[16px] text-[13px] text-black placeholder:text-[#a4a4a4] outline-none transition-colors focus:border-[#ee3224] ${mono}`}
                  />
                </div>

                <div>
                  <label className={`${mono} mb-[6px] block text-[11px] font-[500] uppercase tracking-[0.88px] text-[#a4a4a4]`}>
                    Mật khẩu
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={regPassword}
                      onChange={(event) => {
                        setRegPassword(event.target.value);
                        setRegError("");
                      }}
                      placeholder="Ít nhất 6 ký tự"
                      className={`h-[44px] w-full rounded-[12px] border border-black px-[16px] pr-[44px] text-[13px] text-black placeholder:text-[#a4a4a4] outline-none transition-colors focus:border-[#ee3224] ${mono}`}
                    />
                    <button
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute top-1/2 right-[12px] -translate-y-1/2 border-0 bg-transparent p-0 cursor-pointer"
                    >
                      {showPassword ? (
                        <EyeOff size={16} className="text-[#a4a4a4]" />
                      ) : (
                        <Eye size={16} className="text-[#a4a4a4]" />
                      )}
                    </button>
                  </div>
                  {regPassword.length > 0 && (
                    <div className="mt-[8px] flex items-center gap-[8px]">
                      <div className="h-[3px] flex-1 overflow-hidden rounded-full bg-[#e5e5e5]">
                        <div
                          className={`h-full rounded-full transition-all ${
                            regPassword.length >= 8
                              ? "w-full bg-[#22c55e]"
                              : regPassword.length >= 6
                                ? "w-2/3 bg-[#f59e0b]"
                                : "w-1/3 bg-[#ee3224]"
                          }`}
                        />
                      </div>
                      <span
                        className={`${mono} text-[10px] ${
                          regPassword.length >= 8
                            ? "text-[#22c55e]"
                            : regPassword.length >= 6
                              ? "text-[#f59e0b]"
                              : "text-[#ee3224]"
                        }`}
                      >
                        {regPassword.length >= 8
                          ? "Mạnh"
                          : regPassword.length >= 6
                            ? "Trung bình"
                            : "Yếu"}
                      </span>
                    </div>
                  )}
                </div>

                <div>
                  <label className={`${mono} mb-[6px] block text-[11px] font-[500] uppercase tracking-[0.88px] text-[#a4a4a4]`}>
                    Xác nhận mật khẩu
                  </label>
                  <input
                    type="password"
                    value={regConfirm}
                    onChange={(event) => {
                      setRegConfirm(event.target.value);
                      setRegError("");
                    }}
                    onKeyDown={(event) => event.key === "Enter" && handleRegister()}
                    placeholder="Nhập lại mật khẩu"
                    className={`h-[44px] w-full rounded-[12px] border px-[16px] text-[13px] text-black placeholder:text-[#a4a4a4] outline-none transition-colors focus:border-[#ee3224] ${mono} ${
                      regConfirm && regConfirm !== regPassword
                        ? "border-[#ee3224]"
                        : "border-black"
                    }`}
                  />
                  {regConfirm && regConfirm !== regPassword && (
                    <p className={`${mono} mt-[4px] text-[11px] text-[#ee3224]`}>
                      Mật khẩu không khớp
                    </p>
                  )}
                </div>

                <label className="mt-[2px] flex items-start gap-[8px] cursor-pointer">
                  <button
                    onClick={() => {
                      setRegAgree(!regAgree);
                      setRegError("");
                    }}
                    className={`mt-[1px] flex size-[18px] shrink-0 items-center justify-center rounded-[4px] border cursor-pointer transition-colors ${
                      regAgree
                        ? "border-[#ee3224] bg-[#ee3224]"
                        : "border-[#a4a4a4] bg-white"
                    }`}
                  >
                    {regAgree && <CheckCircle2 size={12} className="text-white" />}
                  </button>
                  <span className={`${mono} text-[12px] leading-[18px] text-[#4a5565]`}>
                    Tôi đồng ý với <span className="cursor-pointer text-[#ee3224] underline">Điều khoản dịch vụ</span> và{" "}
                    <span className="cursor-pointer text-[#ee3224] underline">Chính sách bảo mật</span> của ResQ
                  </span>
                </label>

                {regError && (
                  <p className={`${mono} text-[12px] text-[#ee3224]`}>{regError}</p>
                )}

                <button
                  onClick={handleRegister}
                  className="mt-1 h-[44px] rounded-[12px] border-0 bg-[#ee3224] cursor-pointer transition-colors hover:bg-[#d42b1e]"
                >
                  <span className={`${mono} text-[13px] font-[500] tracking-[0.88px] text-[#f0f0f1]`}>
                    Tạo tài khoản
                  </span>
                </button>
              </div>

              <p className={`${mono} my-[24px] text-center text-[14px] font-[500] text-[#080b0d]`}>
                hoặc
              </p>

              <div className="flex flex-col gap-[10px]">
                <button
                  onClick={() => handleSocialLogin("Google")}
                  className="flex h-[44px] items-center justify-center gap-[8px] rounded-[12px] border border-black bg-[#e8e8e8] cursor-pointer transition-colors hover:bg-[#d8d8d8]"
                >
                  <img src={imgGoogle} alt="Google" className="size-[17px] object-contain" />
                  <span className={`${mono} text-[12px] font-[500] text-black`}>
                    Đăng ký với Google
                  </span>
                </button>
                <button
                  onClick={() => handleSocialLogin("Apple")}
                  className="flex h-[44px] items-center justify-center gap-[8px] rounded-[12px] border border-black bg-[#e8e8e8] cursor-pointer transition-colors hover:bg-[#d8d8d8]"
                >
                  <img src={imgApple} alt="Apple" className="size-[17px] object-contain" />
                  <span className={`${mono} text-[12px] font-[500] text-black`}>
                    Đăng ký với Apple
                  </span>
                </button>
              </div>

              <p className={`${mono} mt-[24px] text-center text-[13px] text-[#a4a4a4]`}>
                Đã có tài khoản?{" "}
                <button
                  onClick={() => setTab("login")}
                  className={`border-0 bg-transparent p-0 cursor-pointer text-[13px] font-[500] text-[#ee3224] hover:underline ${mono}`}
                >
                  Đăng nhập
                </button>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
