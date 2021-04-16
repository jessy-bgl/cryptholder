import React from "react";
import { StyleSheet } from "react-native";
import { List, Switch, Text } from "react-native-paper";
import { useTranslation } from "react-i18next";
import ListItemDivider from "./List/ListItemDivider";
import { useStore } from "../models/root-store/root-store-context";
import ItemIonicon from "../components/Icon/ItemIonicon";

export default function Settings() {
  const { t } = useTranslation("settings");
  const { settings } = useStore();

  return (
    <List.Section style={styles.root}>
      <ListItemDivider
        title={t("language")}
        left={() => <ItemIonicon name={"globe-outline"} />}
        right={() => <Text style={styles.text}>FR</Text>}
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
        right={() => <Text style={styles.text}>USD</Text>}
      />
      <ListItemDivider
        title={t("portfolioOptions")}
        left={() => <ItemIonicon name={"settings-outline"} />}
        right={() => <ItemIonicon name={"chevron-forward-outline"} />}
      />
      <ListItemDivider
        title={t("homeScreen")}
        left={() => <ItemIonicon name={"albums-outline"} />}
        right={() => <Text style={styles.text}>Accueil</Text>}
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
}

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
    color: "#888",
  },
});
