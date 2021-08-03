import React from "react";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import { useTranslation } from "react-i18next";
import { useTheme } from "react-native-paper";

import CoinScreen from "../../screens/home/Coin";
import HomeScreen from "../../screens/Home";

export type HomeStackParamList = {
  home: undefined;
  coin: { symbol: string };
};

const Stack = createStackNavigator<HomeStackParamList>();

const HomeNavigator = () => {
  const { t } = useTranslation("common");
  const { colors } = useTheme();
  const headerStyle = {
    headerStyle: {
      backgroundColor: colors.secondary,
    },
    headerTintColor: colors.text,
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  };

  return (
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{
          title: t("home"),
          ...headerStyle,
        }}
      />
      <Stack.Screen
        name="coin"
        component={CoinScreen}
        options={{
          title: t("coin"),
          ...headerStyle,
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
