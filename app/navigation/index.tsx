import React from "react";
import {
  DefaultTheme,
  DarkTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import { observer } from "mobx-react-lite";

import BottomTabNavigator from "./navigators/BottomTab";
import { useStore } from "../models/root-store/root-store-context";

declare global {
  namespace ReactNativePaper {
    interface ThemeColors {
      secondary: string;
    }
  }
}

const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#344966",
    secondary: "#777777",
  },
};

const darkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    secondary: "#777777",
  },
};

export const Navigation = () => {
  const { settings } = useStore();

  return (
    <PaperProvider theme={settings.darkMode ? darkTheme : lightTheme}>
      <BottomTabNavigator />
    </PaperProvider>
  );
};

export default observer(Navigation);
