import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useTranslation } from "react-i18next";

import Settings from "../../screens/settings/Settings";
import SettingsLanguage from "../../screens/settings/SettingsLanguage";
import SettingsMainCurrency from "../../screens/settings/SettingsMainCurrency";
import SettingsMainScreen from "../../screens/settings/SettingsMainScreen";
import SettingsAbout from "../../screens/settings/SettingsAbout";
import { useTheme } from "react-native-paper";

export type SettingsStackParamList = {
  settings: undefined;
  language: undefined;
  mainCurrency: undefined;
  homeScreen: undefined;
  about: undefined;
};

const Stack = createStackNavigator<SettingsStackParamList>();

const SettingsNavigator = () => {
  const { t } = useTranslation("settings");
  const { colors } = useTheme();

  return (
    <Stack.Navigator initialRouteName="settings">
      <Stack.Screen
        name="settings"
        component={Settings}
        options={{
          title: t("settings"),
          headerStyle: {
            backgroundColor: colors.secondary,
          },
          headerTintColor: colors.text,
        }}
      />
      <Stack.Screen
        name="language"
        component={SettingsLanguage}
        options={{
          title: t("language"),
          headerStyle: {
            backgroundColor: colors.secondary,
          },
          headerTintColor: colors.text,
        }}
      />
      <Stack.Screen
        name="mainCurrency"
        component={SettingsMainCurrency}
        options={{
          title: t("mainCurrency"),
          headerStyle: {
            backgroundColor: colors.secondary,
          },
          headerTintColor: colors.text,
        }}
      />
      <Stack.Screen
        name="homeScreen"
        component={SettingsMainScreen}
        options={{
          title: t("homeScreen"),
          headerStyle: {
            backgroundColor: colors.secondary,
          },
          headerTintColor: colors.text,
        }}
      />
      <Stack.Screen
        name="about"
        component={SettingsAbout}
        options={{
          title: t("about"),
          headerStyle: {
            backgroundColor: colors.secondary,
          },
          headerTintColor: colors.text,
        }}
      />
    </Stack.Navigator>
  );
};

export default SettingsNavigator;
