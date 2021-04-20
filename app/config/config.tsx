import { configLang, SupportedLanguage } from "./language";
import { configMainCurrency, SupportedMainCurrencies } from "./mainCurrency";
import { configMainScreen, SupportedMainScreens } from "./mainScreen";

export interface Config<T extends ConfigType> {
  params: ConfigParam<T>[];
  default: T;
}

export interface ConfigParam<T extends ConfigType> {
  id: T;
  title: string;
}

export type ConfigType =
  | SupportedLanguage
  | SupportedMainScreens
  | SupportedMainCurrencies;

export const config = {
  language: configLang,
  mainCurrency: configMainCurrency,
  mainScreen: configMainScreen,
};
