import React, { useEffect, useRef } from "react";
import { AppState, AppStateStatus } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { StackActions, useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { StackScreenProps } from "@react-navigation/stack";
import { useTheme } from "react-native-paper";

import MainView from "../screens/Main";
import AlertsView from "../screens/Alerts";
import FavoritesView from "../screens/Favorites";
import PortfolioView from "../screens/Portfolio";
import SettingsNavigator from "./navigators/SettingsNavigator";
import { useStore } from "../models/root-store/root-store-context";
import { getValueFor } from "../../expo-secure-store/securestore";

export type MainStackParamList = {
  home: undefined;
  favorites: undefined;
  portfolio: undefined;
  alerts: undefined;
  settings: undefined;
};

type MainStackScreenProps = StackScreenProps<MainStackParamList>;

const MainStack = createMaterialBottomTabNavigator<MainStackParamList>();

const TabBarIcon = (props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}) => {
  return <Ionicons size={26} style={{ marginBottom: -3 }} {...props} />;
};

const resetStackOnTabPress = ({ navigation }: MainStackScreenProps) => ({
  tabPress: (e: any) => {
    const state = navigation.dangerouslyGetState();

    if (state) {
      // Grab all the tabs that are NOT the one we just pressed
      const nonTargetTabs = state.routes.filter((r: any) => r.key !== e.target);

      nonTargetTabs.forEach((tab: any) => {
        // Find the tab we want to reset and grab the key of the nested stack
        const tabName = tab?.name;
        const stackKey = tab?.state?.key;

        if (tabName === "settings" && stackKey != undefined) {
          // Pass the stack key that we want to reset and use popToTop
          // to reset it
          navigation.dispatch({
            ...StackActions.popToTop(),
            target: stackKey,
          });
        }
      });
    }
  },
});

const MainNavigator = () => {
  const { t } = useTranslation("common");
  const { colors } = useTheme();
  const { settings } = useStore();
  const { primary } = colors;
  const appState = useRef(AppState.currentState);
  const { navigate } = useNavigation();

  // if application come from background, navigate to auth screen if needed
  const handleAppStateChange = async (nextAppState: AppStateStatus) => {
    const storageCode = await getValueFor("passcode");

    if (
      appState.current.match(/inactive|background/) &&
      nextAppState === "active" &&
      settings.passcode &&
      storageCode != undefined
    ) {
      navigate("auth", { screen: undefined, resetStack: false });
    }

    appState.current = nextAppState;
  };

  useEffect(() => {
    AppState.addEventListener("change", handleAppStateChange);

    return () => {
      AppState.removeEventListener("change", handleAppStateChange);
    };
  }, []);

  return (
    <MainStack.Navigator
      shifting={true}
      sceneAnimationEnabled={false}
      barStyle={{ backgroundColor: primary }}
      activeColor={settings.darkMode ? colors.text : colors.background}
    >
      <MainStack.Screen
        name="home"
        component={MainView}
        options={{
          title: t("home"),
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="stats-chart" color={color} />
          ),
          tabBarColor: colors.primary,
        }}
        listeners={resetStackOnTabPress}
      />
      <MainStack.Screen
        name="favorites"
        component={FavoritesView}
        options={{
          title: t("favorites"),
          tabBarIcon: ({ color }) => <TabBarIcon name="star" color={color} />,
          tabBarColor: colors.primary,
        }}
        listeners={resetStackOnTabPress}
      />
      <MainStack.Screen
        name="portfolio"
        component={AlertsView}
        options={{
          title: t("portfolio"),
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="briefcase" color={color} />
          ),
          tabBarColor: colors.primary,
        }}
        listeners={resetStackOnTabPress}
      />
      <MainStack.Screen
        name="alerts"
        component={PortfolioView}
        options={{
          title: t("alerts"),
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="notifications" color={color} />
          ),
          tabBarColor: colors.primary,
        }}
        listeners={resetStackOnTabPress}
      />
      <MainStack.Screen
        name="settings"
        component={SettingsNavigator}
        options={{
          title: t("settings"),
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ellipsis-horizontal" color={color} />
          ),
        }}
        listeners={resetStackOnTabPress}
      />
    </MainStack.Navigator>
  );
};

export default MainNavigator;
