import React, { useLayoutEffect } from "react";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { View, StyleSheet } from "react-native";
import { LineChart } from "react-native-charts-wrapper";

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
      <LineChart
        style={styles.chart}
        data={{
          dataSets: [{ label: "demo", values: [{ y: 1 }, { y: 2 }, { y: 1 }] }],
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
  },
  chart: {
    flex: 1,
  },
});

export default CoinScreen;
