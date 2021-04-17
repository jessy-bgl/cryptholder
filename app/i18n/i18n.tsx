import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import { config } from "./config";
import commonEn from "./common/en.json";
import commonFr from "./common/fr.json";
import settingsEn from "./settings/en.json";
import settingsFr from "./settings/fr.json";
import marketEn from "./market/en.json";
import marketFr from "./market/fr.json";

i18next.use(initReactI18next).init({
  fallbackLng: config.defaultLang,
  debug: __DEV__,
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
  resources: {
    en: {
      common: commonEn,
      settings: settingsEn,
      market: marketEn,
    },
    fr: {
      common: commonFr,
      settings: settingsFr,
      market: marketFr,
    },
  },
});

export default i18next;
