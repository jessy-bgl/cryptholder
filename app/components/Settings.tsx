import React from "react";
import { StyleSheet } from "react-native";
import { List, Switch, Text, useTheme } from "react-native-paper";
import { useTranslation } from "react-i18next";
import ListItemDivider from "./List/ListItemDivider";
import { useStore } from "../models/root-store/root-store-context";
import ItemIonicon from "../components/Icon/ItemIonicon";
import { useNavigation } from "@react-navigation/core";

const Settings = () => {
  const { t } = useTranslation("settings");
  const { settings } = useStore();
  const { colors } = useTheme();
  const { secondary } = colors;
  const { navigate } = useNavigation();

  return (
    <List.Section style={styles.root}>
      <ListItemDivider
        title={t("language")}
        left={() => <ItemIonicon name={"globe-outline"} />}
        right={() => (
          <Text style={{ color: secondary, ...styles.text }}>FR</Text>
        )}
        onPress={() => navigate("language")}
      />
      <ListItemDivider
        title={t("theme")}
        left={() => <ItemIonicon name={"contrast-outline"} />}
        right={() => (
          <Switch
            value={settings.darkMode}
            onValueChange={(value: boolean) => settings.toggleDarkMode(value)}
          />
        )}
      />
      <ListItemDivider
        title={t("mainCurrency")}
        left={() => <ItemIonicon name={"cash-outline"} />}
        right={() => (
          <Text style={{ color: secondary, ...styles.text }}>USD</Text>
        )}
        onPress={() => navigate("mainCurrency")}
      />
      <ListItemDivider
        title={t("portfolioOptions")}
        left={() => <ItemIonicon name={"settings-outline"} />}
        right={() => <ItemIonicon name={"chevron-forward-outline"} />}
      />
      <ListItemDivider
        title={t("homeScreen")}
        left={() => <ItemIonicon name={"albums-outline"} />}
        right={() => (
          <Text style={{ color: secondary, ...styles.text }}>Accueil</Text>
        )}
        onPress={() => navigate("homeScreen")}
      />
      <ListItemDivider
        title={t("security")}
        left={() => <ItemIonicon name={"lock-closed-outline"} />}
        right={() => <ItemIonicon name={"chevron-forward-outline"} />}
      />
      <ListItemDivider
        title={t("about")}
        left={() => <ItemIonicon name={"rocket-outline"} />}
        right={() => <ItemIonicon name={"chevron-forward-outline"} />}
      />
    </List.Section>
  );
};

export default Settings;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: "100%",
  },
  icon: {
    textAlignVertical: "center",
  },
  text: {
    textAlignVertical: "center",
    fontSize: 18,
  },
});
