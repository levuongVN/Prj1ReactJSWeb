import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en } from './TranslateLanguage/en';
import {vi } from './TranslateLanguage/vi';
// Khai báo ngôn ngữ và tệp dịch của bạn
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    vi: {
      translation: vi,
    },
  },
  lng: "en", // Ngôn ngữ mặc định
  fallbackLng: "en", // Nếu không có ngôn ngữ, sử dụng tiếng Anh
  interpolation: {
    escapeValue: false, // React đã bảo vệ chống XSS
  },
});