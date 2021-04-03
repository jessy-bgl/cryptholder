import React from "react";
import { ColorSchemeName } from "react-native";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import BottomTabNavigator from "./navigators/BottomTab";
import { RootStackParamList } from "./types";
import LinkingConfiguration from "./LinkingConfiguration";

const Stack = createStackNavigator<RootStackParamList>();

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Root" component={BottomTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
