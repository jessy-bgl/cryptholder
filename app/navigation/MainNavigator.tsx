import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { StackActions, useTheme } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { StackScreenProps } from "@react-navigation/stack";

import MainView from "../screens/Main";
import AlertsView from "../screens/Alerts";
import FavoritesView from "../screens/Favorites";
import PortfolioView from "../screens/Portfolio";
import SettingsNavigator from "./navigators/SettingsNavigator";
import { config } from "../i18n/config";

export type MainStackParamList = {
  home: undefined;
  favorites: undefined;
  portfolio: undefined;
  alerts: undefined;
  settings: undefined;
};

type MainStackScreenProps = StackScreenProps<MainStackParamList>;

const Tab = createMaterialBottomTabNavigator<MainStackParamList>();

function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}) {
  return <Ionicons size={26} style={{ marginBottom: -3 }} {...props} />;
}

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

        if (tabName === "settings") {
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
  const { primary } = colors;

  return (
    <Tab.Navigator
      initialRouteName="home"
      shifting={true}
      sceneAnimationEnabled={false}
      barStyle={{ backgroundColor: primary }}
    >
      <Tab.Screen
        name="home"
        component={MainView}
        options={{
          title: t("home"),
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="stats-chart" color={color} />
          ),
        }}
        listeners={resetStackOnTabPress}
      />
      <Tab.Screen
        name="favorites"
        component={FavoritesView}
        options={{
          title: t("favorites"),
          tabBarIcon: ({ color }) => <TabBarIcon name="star" color={color} />,
        }}
        listeners={resetStackOnTabPress}
      />
      <Tab.Screen
        name="portfolio"
        component={AlertsView}
        options={{
          title: t("portfolio"),
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="briefcase" color={color} />
          ),
        }}
        listeners={resetStackOnTabPress}
      />
      <Tab.Screen
        name="alerts"
        component={PortfolioView}
        options={{
          title: t("alerts"),
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="notifications" color={color} />
          ),
        }}
        listeners={resetStackOnTabPress}
      />
      <Tab.Screen
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
    </Tab.Navigator>
  );
};

export default MainNavigator;
