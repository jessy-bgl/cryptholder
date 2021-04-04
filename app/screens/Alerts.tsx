import React from "react";
import { View } from "react-native";
import AlertsComponent from "../components/Alerts";

export default function Alerts() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <AlertsComponent />
    </View>
  );
}
