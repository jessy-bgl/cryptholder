import { useIsFocused } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";

import HomeComponent from "../components/Home";

export const MainScreen = function Main() {
  // const isFocused = useIsFocused();

  // console.log(isFocused);

  // if (!isFocused) {
  //   return <></>;
  // }

  return (
    <View style={styles.root}>
      <HomeComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
});

export default MainScreen;
