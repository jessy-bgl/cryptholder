import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import {useTranslation} from 'react-i18next';

import MainNavigator from "./Main";
import FavoritesNavigator from "./Favorites";
import PortfolioNavigator from "./Portfolio";
import AlertsNavigator from "./Alerts";
import SettingsNavigator from "./Settings";

import { BottomTabParamList } from "../types";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

export default function BottomTabNavigator() {
  const {t} = useTranslation('common');

  return (
    <BottomTab.Navigator initialRouteName="Main">
      <BottomTab.Screen
        name={t("home")}
        component={MainNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="stats-chart-outline" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name={t("favorites")}
        component={FavoritesNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="star-outline" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name={t("portfolio")}
        component={PortfolioNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="briefcase-outline" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name={t("alerts")}
        component={AlertsNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="notifications-outline" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name={t("settings")}
        component={SettingsNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ellipsis-horizontal-outline" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
