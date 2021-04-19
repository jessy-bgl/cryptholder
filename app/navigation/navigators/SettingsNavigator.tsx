import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useTranslation } from "react-i18next";
import { observer } from "mobx-react-lite";
import { useNavigation } from "@react-navigation/native";

import Settings from "../../components/Settings";
import SearchView, {
  SearchViewArrayProps,
} from "../../components/View/SearchView";
import { config } from "../../config/config";
import { useStore } from "../../models/root-store/root-store-context";

const SettingsViewLanguage = () => {
  const { i18n } = config;
  const { navigate } = useNavigation();
  const { settings } = useStore();

  const onPressSearchViewItem = (value: string) => {
    settings.setDefaultLang(value);
    navigate("settings");
  };

  return (
    <SearchView
      array={i18n.languages}
      defaultKey={settings.language}
      onPress={onPressSearchViewItem}
    />
  );
};

const SettingsViewLanguageObserver = observer(SettingsViewLanguage);

const SettingsViewMainCurrency = () => {
  const { mainCurrency } = config;
  const { navigate } = useNavigation();
  const { settings } = useStore();

  const onPressMainCurrencyViewItem = (value: string) => {
    settings.setDefaultMainCurrency(value);
    navigate("settings");
  };

  return (
    <SearchView
      array={mainCurrency.currency}
      defaultKey={settings.mainCurrency}
      onPress={onPressMainCurrencyViewItem}
    />
  );
};

const SettingsViewMainCurrencyObserver = observer(SettingsViewMainCurrency);

const SettingsViewHomeScreen = () => {
  const { mainScreen } = config;
  const { navigate } = useNavigation();
  const { settings } = useStore();

  const onPressMainScreenViewItem = (value: string) => {
    settings.setDefaultMainScreen(value);
    navigate("settings");
  };

  return (
    <SearchView
      array={mainScreen.screen}
      defaultKey={settings.mainScreen}
      onPress={onPressMainScreenViewItem}
    />
  );
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
        component={SettingsViewLanguageObserver}
        options={{
          title: t("language"),
        }}
      />
      <Stack.Screen
        name="mainCurrency"
        component={SettingsViewMainCurrencyObserver}
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
