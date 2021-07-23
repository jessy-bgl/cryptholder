import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useTheme } from "react-native-paper";

import MainNavigator from "./MainNavigator";
import AuthScreen from "../screens/Auth";
import { useStore } from "../models/root-store/root-store-context";
import NumpadScreen from "../screens/Numpad";

export type RootStackParamList = {
  main: undefined;
  auth:
    | {
        screen?: string /* screen to navigate after success auth */;
        resetStack?: boolean;
      }
    | undefined;
  numpad: { code?: string /* code to verify */ };
};

const RootNavigator = () => {
  const { settings } = useStore();
  const RootStack = createStackNavigator<RootStackParamList>();
  const { colors } = useTheme();

  return (
    <RootStack.Navigator
      mode="modal"
      initialRouteName={settings.passcode ? "auth" : "main"}
    >
      <RootStack.Screen
        name="main"
        component={MainNavigator}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="auth"
        component={AuthScreen}
        options={{
          headerShown: false,
        }}
        initialParams={{ screen: settings.mainScreen, resetStack: true }}
      />
      <RootStack.Screen
        name="numpad"
        component={NumpadScreen}
        options={{
          headerStyle: {
            backgroundColor: colors.secondary,
          },
          headerTintColor: colors.text,
          // TODO: flickering when using horizontal animation
          // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
