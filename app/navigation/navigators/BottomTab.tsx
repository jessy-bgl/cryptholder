import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";

import MainNavigator from "./Main";
import FavoritesNavigator from "./Favorites";

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
            <TabBarIcon name="bar-chart" color={color} />
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
    </BottomTab.Navigator>
  );
}