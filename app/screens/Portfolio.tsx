import React from "react";
import { View } from "react-native";
import PortfolioComponent from "../components/Portfolio";

export default function Portfolio() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <PortfolioComponent />
    </View>
  );
}
