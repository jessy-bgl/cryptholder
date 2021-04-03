import * as Linking from "expo-linking";

export default {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Root: {
        screens: {
          Main: {
            screens: {
              MainScreen: "main",
            },
          },
          Favorites: {
            screens: {
              FavoritesScreen: "favorites",
            },
          },
        },
      },
      NotFound: "*",
    },
  },
};
