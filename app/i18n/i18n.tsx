import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import { config } from "./config";
import commonEn from "./common/en.json";
import commonFr from "./common/fr.json";
import settingsEn from "./settings/en.json";
import settingsFr from "./settings/fr.json";

export const initializeI18n = async (): Promise<void> => {
  await i18next.use(initReactI18next).init({
    lng: config.defaultLang,
    debug: __DEV__,
    resources: {
      en: {
        common: commonEn,
        settings: settingsEn,
      },
      fr: {
        common: commonFr,
        settings: settingsFr,
      },
    },
  });
};
