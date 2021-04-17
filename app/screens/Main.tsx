import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";

import MainComponent from "../components/Main";

export const MainScreen = function Main() {
  return (
    <View style={styles.root}>
      <MainComponent />
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
