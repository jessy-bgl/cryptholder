import { Config } from "./config";

export type SupportedLanguage = "en" | "fr";

export const configLang: Config<SupportedLanguage> = {
  params: [
    { id: "en", title: "English" },
    { id: "fr", title: "Français" },
  ],
  default: "en",
};
