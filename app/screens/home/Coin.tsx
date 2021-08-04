import React, { useLayoutEffect } from "react";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { View, Text } from "react-native";

import { HomeStackParamList } from "../../navigation/navigators/HomeNavigator";

type AuthScreenNavigationProp = StackNavigationProp<HomeStackParamList, "coin">;
type AuthScreenRouteProp = RouteProp<HomeStackParamList, "coin">;
type Props = {
  route: AuthScreenRouteProp;
  navigation: AuthScreenNavigationProp;
};

const CoinScreen = ({ route, navigation }: Props) => {
  // change header title
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: route.params.symbol.toUpperCase(),
    });
  }, [route]);

  return (
    <View>
      <Text>{route.params.symbol.toUpperCase()}</Text>
    </View>
  );
};

export default CoinScreen;
