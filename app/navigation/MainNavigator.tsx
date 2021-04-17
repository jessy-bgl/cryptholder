import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { useTheme } from "@react-navigation/native";
import { useTranslation } from "react-i18next";

import MainView from "../screens/Main";
import AlertsView from "../screens/Alerts";
import FavoritesView from "../screens/Favorites";
import PortfolioView from "../screens/Portfolio";
import SettingsNavigator from "./navigators/SettingsNavigator";

export type MainStackParamList = {
  home: undefined;
  favorites: undefined;
  portfolio: undefined;
  alerts: undefined;
  settings: undefined;
};

const Tab = createMaterialBottomTabNavigator<MainStackParamList>();

function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}) {
  return <Ionicons size={26} style={{ marginBottom: -3 }} {...props} />;
}

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
      />
      <Tab.Screen
        name="favorites"
        component={FavoritesView}
        options={{
          title: t("favorites"),
          tabBarIcon: ({ color }) => <TabBarIcon name="star" color={color} />,
        }}
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
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;
