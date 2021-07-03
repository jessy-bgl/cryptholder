import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import commonEn from "./common/en.json";
import commonFr from "./common/fr.json";
import settingsEn from "./settings/en.json";
import settingsFr from "./settings/fr.json";
import marketEn from "./market/en.json";
import marketFr from "./market/fr.json";
import favoritesEn from "./favorites/en.json";
import favoritesFr from "./favorites/fr.json";
import { config } from "../config/config";

i18next.use(initReactI18next).init({
  fallbackLng: config.language.default,
  debug: __DEV__,
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
  resources: {
    en: {
      common: commonEn,
      settings: settingsEn,
      market: marketEn,
      favorites: favoritesEn,
    },
    fr: {
      common: commonFr,
      settings: settingsFr,
      market: marketFr,
      favorites: favoritesFr,
    },
  },
});

export const changeLaguage = (languageKey: string) => {
  i18next.changeLanguage(languageKey); // -> returns a Promise
};

export default i18next;
