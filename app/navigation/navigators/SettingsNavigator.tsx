import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Settings from "../../components/Settings";
import Favorites from "../../components/Favorites";

export type SettingsStackParamList = {
  settings: undefined;
  language: undefined;
};

const Stack = createStackNavigator<SettingsStackParamList>();

const SettingsNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="settings">
      <Stack.Screen name="settings" component={Settings} />
      <Stack.Screen name="language" component={Favorites} />
    </Stack.Navigator>
  );
};

export default SettingsNavigator;
