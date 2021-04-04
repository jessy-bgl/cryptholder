import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AlertsTabParamList } from "../types";
import AlertsScreen from "../../screens/Alerts";

const AlertsTabStack = createStackNavigator<AlertsTabParamList>();

export default function AlertsNavigator() {
  return (
    <AlertsTabStack.Navigator>
      <AlertsTabStack.Screen
        name="Alerts"
        component={AlertsScreen}
        options={{ headerTitle: "Alerts" }}
      />
    </AlertsTabStack.Navigator>
  );
}
