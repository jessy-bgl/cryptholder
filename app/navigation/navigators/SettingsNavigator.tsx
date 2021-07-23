import React from "react";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import { useTranslation } from "react-i18next";
import { useTheme } from "react-native-paper";

import Settings from "../../screens/settings/Settings";
import SettingsLanguage from "../../screens/settings/SettingsLanguage";
import SettingsMainCurrency from "../../screens/settings/SettingsMainCurrency";
import SettingsMainScreen from "../../screens/settings/SettingsMainScreen";
import SettingsSecurity from "../../screens/settings/SettingsSecurity";
import SettingsAbout from "../../screens/settings/SettingsAbout";

export type SettingsStackParamList = {
  settings: undefined;
  language: undefined;
  mainCurrency: undefined;
  homeScreen: undefined;
  security: undefined;
  about: undefined;
  passcode: { title: string };
};

const Stack = createStackNavigator<SettingsStackParamList>();

const SettingsNavigator = () => {
  const { t } = useTranslation("settings");
  const { colors } = useTheme();
  const headerStyle = {
    headerStyle: {
      backgroundColor: colors.secondary,
    },
    headerTintColor: colors.text,
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  };

  return (
    <Stack.Navigator initialRouteName="settings">
      <Stack.Screen
        name="settings"
        component={Settings}
        options={{
          title: t("settings"),
          ...headerStyle,
        }}
      />
      <Stack.Screen
        name="language"
        component={SettingsLanguage}
        options={{
          title: t("language"),
          ...headerStyle,
        }}
      />
      <Stack.Screen
        name="mainCurrency"
        component={SettingsMainCurrency}
        options={{
          title: t("mainCurrency"),
          ...headerStyle,
        }}
      />
      <Stack.Screen
        name="homeScreen"
        component={SettingsMainScreen}
        options={{
          title: t("homeScreen"),
          ...headerStyle,
        }}
      />
      <Stack.Screen
        name="security"
        component={SettingsSecurity}
        options={{
          title: t("security"),
          ...headerStyle,
        }}
      />
      <Stack.Screen
        name="about"
        component={SettingsAbout}
        options={{
          title: t("about"),
          ...headerStyle,
        }}
      />
    </Stack.Navigator>
  );
};

export default SettingsNavigator;
