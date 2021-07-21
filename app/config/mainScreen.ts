import { Config } from "./config";

export type SupportedMainScreens = "home" | "favorites" | "portfolio";

export const configMainScreen: Config<SupportedMainScreens> = {
  params: [
    { id: "home", title: "Home" },
    { id: "favorites", title: "Favorites" },
    { id: "portfolio", title: "Portfolio" },
  ],
  default: "home",
};
