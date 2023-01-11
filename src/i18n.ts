import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

import { useTranslation, initReactI18next } from "react-i18next";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: { loadPath: "common/{{lng}}.json" },
    fallbackLng: "uz",
    detection: {
      order: ["localStorage", "htmlTag", "path", "subdomain"],
      caches: ["localStorage"],
    },
    debug: true,

    interpolation: {
      escapeValue: false,
    },
    react: {},
  });

export default i18n;
