import { Config } from "./config";

export type SupportedMainCurrencies = "usd" | "eur";

export const configMainCurrency: Config<SupportedMainCurrencies> = {
  params: [
    { id: "usd", title: "USD" },
    { id: "eur", title: "EUR" },
  ],
  default: "usd",
};
