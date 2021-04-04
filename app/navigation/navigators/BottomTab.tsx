import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";

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
  return (
    <BottomTab.Navigator initialRouteName="Main">
      <BottomTab.Screen
        name="Main"
        component={MainNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="stats-chart-outline" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Favorites"
        component={FavoritesNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="star" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Portfolio"
        component={PortfolioNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="briefcase-outline" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Alerts"
        component={AlertsNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="notifications-outline" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={SettingsNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ellipsis-horizontal-outline" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}
