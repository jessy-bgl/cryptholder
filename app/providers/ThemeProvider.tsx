import React, { ReactNode } from "react";
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

declare global {
  namespace ReactNativePaper {
    export interface ThemeColors {
      secondary: string;
      primaryText: string;
      secondaryText: string;
      red: string;
      green: string;
    }
  }
}

const CombinedLightTheme = {
  ...NavigationDefaultTheme,
  ...PaperDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    ...PaperDefaultTheme.colors,
    primary: "#35456e",
    secondary: "#ffffff",
    text: "#212121",
    primaryText: "#35456e",
    secondaryText: "#6a6161",
    accent: "#01C9BC",
    background: "#ffffff",
    red: "#ff4040",
    green: "#2fc000",
  },
};

const CombinedDarkTheme = {
  ...NavigationDarkTheme,
  ...PaperDarkTheme,
  colors: {
    ...NavigationDarkTheme.colors,
    ...PaperDarkTheme.colors,
    primary: "#35456e",
    secondary: "#35456e",
    text: "#eeeeee",
    primaryText: "#7b7c96",
    secondaryText: "#777777",
    accent: "#01C9BC",
    background: "#1e1e1e",
    red: "#ff4040",
    green: "#2fc000",
  },
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const { settings } = useStore();

  return (
    <PaperProvider
      theme={settings.darkMode ? CombinedDarkTheme : CombinedLightTheme}
    >
      <NavigationContainer
        theme={settings.darkMode ? CombinedDarkTheme : CombinedLightTheme}
      >
        {children}
      </NavigationContainer>
    </PaperProvider>
  );
};

export default observer(ThemeProvider);
