import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { MainTabParamList } from "../types";
import MainScreen from "../../screens/Main";

const MainTabStack = createStackNavigator<MainTabParamList>();

export default function MainNavigator() {
  return (
    <MainTabStack.Navigator>
      <MainTabStack.Screen
        name="Main"
        component={MainScreen}
        options={{ headerTitle: "Main" }}
      />
    </MainTabStack.Navigator>
  );
}
