import React from "react";
import { ColorSchemeName } from "react-native";
import BottomTabNavigator from "./navigators/BottomTab";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return <BottomTabNavigator />;
}
