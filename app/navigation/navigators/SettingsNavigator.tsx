import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useTranslation } from "react-i18next";

import Settings from "../../components/Settings";
import SearchView, {
  SearchViewItemProps,
} from "../../components/View/SearchView";
import { config } from "../../i18n/config";

const SettingsViewLanguage = () => {
  const { languages } = config;

  return <SearchView array={languages} />;
};

const SettingsViewMainCurrency = () => {
  const props: SearchViewItemProps[] = [
    {
      id: 1,
      title: "USD",
    },
    {
      id: 2,
      title: "EUR",
    },
  ];

  return <SearchView array={props} />;
};

const SettingsViewHomeScreen = () => {
  const props: SearchViewItemProps[] = [
    {
      id: 1,
      title: "Main",
    },
    {
      id: 2,
      title: "Favorites",
    },
    {
      id: 3,
      title: "Portfolio",
    },
  ];

  return <SearchView array={props} />;
};

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
        component={SettingsViewLanguage}
        options={{
          title: t("language"),
        }}
      />
      <Stack.Screen
        name="mainCurrency"
        component={SettingsViewMainCurrency}
        options={{
          title: t("mainCurrency"),
        }}
      />
      <Stack.Screen
        name="homeScreen"
        component={SettingsViewHomeScreen}
        options={{
          title: t("homeScreen"),
        }}
      />
    </Stack.Navigator>
  );
};

export default SettingsNavigator;
