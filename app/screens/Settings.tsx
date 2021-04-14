import React from "react";
import { View, StyleSheet } from "react-native";
import SettingsComponent from "../components/Settings";
import { Appbar } from "react-native-paper";
import { useTranslation } from "react-i18next";

export default function Settings() {
  const { t } = useTranslation("common");
  return (
    <View style={styles.root}>
      <Appbar.Header style={styles.header}>
        <Appbar.Content title={t("settings")} />
      </Appbar.Header>
      <SettingsComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  header: {
    width: "100%",
  }
});
