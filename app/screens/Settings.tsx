import React from "react";
import { View } from "react-native";
import SettingsComponent from "../components/Settings";

export default function Settings() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <SettingsComponent />
    </View>
  );
}
