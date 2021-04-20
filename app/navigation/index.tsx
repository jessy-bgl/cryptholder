import React from "react";
import {
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import { observer } from "mobx-react-lite";
import { useStore } from "../models/root-store/root-store-context";
import {
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
  NavigationContainer,
} from "@react-navigation/native";

import MainNavigator from "./MainNavigator";

declare global {
  namespace ReactNativePaper {
    interface ThemeColors {
      secondary: string;
    }
  }
}

const CombinedLightTheme = {
  ...NavigationDefaultTheme,
  ...PaperDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    ...PaperDefaultTheme.colors,
    primary: "#344966",
    secondary: "#777777",
  },
};

const CombinedDarkTheme = {
  ...NavigationDarkTheme,
  ...PaperDarkTheme,
  colors: {
    ...NavigationDarkTheme.colors,
    ...PaperDarkTheme.colors,
    secondary: "#777777",
  },
};

export const Navigation = () => {
  const { settings } = useStore();

  return (
    <PaperProvider
      theme={settings.darkMode ? CombinedDarkTheme : CombinedLightTheme}
    >
      <NavigationContainer
        theme={settings.darkMode ? CombinedDarkTheme : CombinedLightTheme}
      >
        <MainNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default observer(Navigation);
