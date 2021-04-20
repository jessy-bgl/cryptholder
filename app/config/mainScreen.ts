import { Config } from "./config";

export type SupportedMainScreens = "main" | "favorites" | "portfolio";

export const configMainScreen: Config<SupportedMainScreens> = {
  params: [
    { id: "main", title: "Main" },
    { id: "favorites", title: "Favorites" },
    { id: "portfolio", title: "Portfolio" },
  ],
  default: "main",
};
