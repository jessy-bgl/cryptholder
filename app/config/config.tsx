export const config = {
  i18n: {
    languages: [
      { id: "en", title: "English" },
      { id: "fr", title: "Français" },
    ],
    default: "en",
  },
  mainCurrency: {
    currency: [
      {
        id: "usd",
        title: "USD",
      },
      {
        id: "eur",
        title: "EUR",
      },
    ],
    default: "usd",
  },
  mainScreen: {
    screen: [
      {
        id: "main",
        title: "Main",
      },
      {
        id: "favorites",
        title: "Favorites",
      },
      {
        id: "portfolio",
        title: "Portfolio",
      },
    ],
    default: "main",
  },
};
