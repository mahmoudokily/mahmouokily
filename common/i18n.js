import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./locales/en/en.json";
import translationIT from "./locales/it/it.json";
import { initConfig } from "../pages/index";
// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
export const resources = {
  it: {
    translation: translationIT,
  },
  en: {
    translation: translationEN,
  },
};

i18n.use(initReactI18next).init(
  {
    resources,
    lng: "it",
    fallbackLng: "en",
    debug: false,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  },
  (err, t) => {
    if (err) console.error("i18n Error", err);
  }
);
export default i18n;
