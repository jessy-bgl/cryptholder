import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";

import HomeComponent from "../components/Home";

export const MainScreen = function Main() {
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
