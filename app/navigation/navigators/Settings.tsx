import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SettingsTabParamList } from "../types";
import SettingsScreen from "../../screens/Settings";

const SettingsTabStack = createStackNavigator<SettingsTabParamList>();

export default function SettingsNavigator() {
  return (
    <SettingsTabStack.Navigator>
      <SettingsTabStack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ headerTitle: "Settings" }}
      />
    </SettingsTabStack.Navigator>
  );
}
