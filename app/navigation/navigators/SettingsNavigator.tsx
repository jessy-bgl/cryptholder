import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useTranslation } from "react-i18next";

import Settings from "../../components/Settings";
import SettingsLanguage from "../../screens/settings/SettingsLanguage";
import SettingsMainCurrency from "../../screens/settings/SettingsMainCurrency";
import SettingsMainScreen from "../../screens/settings/SettingsMainScreen";

export type SettingsStackParamList = {
  settings: undefined;
  language: undefined;
  mainCurrency: undefined;
  homeScreen: undefined;
};

const Stack = createStackNavigator<SettingsStackParamList>();

const SettingsNavigator = () => {
  const { t } = useTranslation("settings");
  return (
    <Stack.Navigator initialRouteName="settings">
      <Stack.Screen
        name="settings"
        component={Settings}
        options={{
          title: t("settings"),
        }}
      />
      <Stack.Screen
        name="language"
        component={SettingsLanguage}
        options={{
          title: t("language"),
        }}
      />
      <Stack.Screen
        name="mainCurrency"
        component={SettingsMainCurrency}
        options={{
          title: t("mainCurrency"),
        }}
      />
      <Stack.Screen
        name="homeScreen"
        component={SettingsMainScreen}
        options={{
          title: t("homeScreen"),
        }}
      />
    </Stack.Navigator>
  );
};

export default SettingsNavigator;
