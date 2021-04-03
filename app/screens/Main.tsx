import React from "react";
import { View } from "react-native";
import MainComponent from "../components/Main";

export default function Main() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <MainComponent />
    </View>
  );
}
