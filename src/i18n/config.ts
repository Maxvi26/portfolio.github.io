import type { InitOptions } from "i18next";

export const i18nConfig: InitOptions = {
  lng: "fr",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },

  debug: import.meta.env.DEV,
};