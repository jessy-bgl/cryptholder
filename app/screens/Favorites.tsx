import React from "react";
import { View } from "react-native";
import FavoritesComponent from "../components/Favorites"

export default function Favorites() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <FavoritesComponent />
    </View>
  );
}
