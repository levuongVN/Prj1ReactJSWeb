import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Khai báo ngôn ngữ và tệp dịch của bạn
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "Welcome": "Welcome",
        "Welcome back": "Welcome back",
        "Email": "Email",
        "Password": "Password",
        "Forgot password?": "Forgot password?",
        "Sign up": "Sign up",
        "Don't have an account?": "Don't have an account?",
        "Sign in": "Sign in",
        "-or-": "-or-",
        "Email is required":"Email is required",
        "Invalid email address":"Invalid email address",
        "Password must be at least 8 characters long":"Password must be at least 8 characters long",
        "It's fine":"It's fine"
      },
    },
    vi: {
      translation: {
        "Welcome": "Chào mừng",
        "Welcome back": "Chào mừng quay lại",
        "Email": "Email",
        "Password": "Mật khẩu",
        "Forgot password?": "Quên mật khẩu?",
        "Sign up": "Đăng ký",
        "Don't have an account?": "Chưa có tài khoản?",
        "Sign in": "Đăng nhập",
        "-or-": "-hoặc-",
        "Email is required":"Email là bắt buộc",
        "Invalid email address":"Định dạng email không hợp lệ",
        "Password must be at least 8 characters long":"Mật khẩu phải có ít nhất 8 ký tự",
        "It's fine":"Có vẻ ổn"
      },
    },
  },
  lng: "en", // Ngôn ngữ mặc định
  fallbackLng: "en", // Nếu không có ngôn ngữ, sử dụng tiếng Anh
  interpolation: {
    escapeValue: false, // React đã bảo vệ chống XSS
  },
});