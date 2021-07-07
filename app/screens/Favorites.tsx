import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";

import FavoritesComponent from "../components/Favorites";

export default function Favorites() {
  return (
    <View style={styles.root}>
      <FavoritesComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
});
