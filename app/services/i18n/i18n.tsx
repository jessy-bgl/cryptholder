import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import {config} from '../../config/index';
import commonEn from '../../i18n/common/en.json'
import commonFr from '../../i18n/common/fr.json'

export const initializeI18n = async (): Promise<void> => {
  await i18next.use(initReactI18next).init({
    lng: config.defaultLang,
    debug: __DEV__,
    resources: {
      en: {
        common: commonEn,
      },
      fr: {
        common: commonFr,
      },
    },
  });
};