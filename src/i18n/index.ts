import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { i18nConfig } from "./config";

import fr from "./locales/fr.json";
import en from "./locales/en.json";

i18n
  .use(initReactI18next)
  .init({
    ...i18nConfig,
    resources: {
      fr: { translation: fr },
      en: { translation: en },
    },
  });

export default i18n;