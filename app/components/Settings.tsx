import React from "react";
import { StyleSheet } from "react-native";
import { List, Switch, Text } from "react-native-paper";
import { useTranslation } from "react-i18next";
import { Ionicons } from "@expo/vector-icons";
import ListItemDivider from "./List/ListItemDivider";
import { useStore } from "../models/root-store/root-store-context";

type ItemIconProps = {
  name: React.ComponentProps<typeof Ionicons>["name"];
};

const ItemIcon = ({ name }: ItemIconProps) => (
  <Ionicons size={20} name={name} style={styles.icon} />
);

export default function Settings() {
  const { t } = useTranslation("settings");
  const { settings } = useStore();

  return (
    <List.Section style={styles.root}>
      <ListItemDivider
        title={t("language")}
        left={() => <ItemIcon name={"globe-outline"} />}
        right={() => <Text style={styles.text}>FR</Text>}
      />
      <ListItemDivider
        title={t("theme")}
        left={() => <ItemIcon name={"contrast-outline"} />}
        right={() => (
          <Switch
            value={settings.darkMode}
            onValueChange={(value: boolean) => settings.toggleDarkMode(value)}
          />
        )}
      />
      <ListItemDivider
        title={t("mainCurrency")}
        left={() => <ItemIcon name={"cash-outline"} />}
        right={() => <Text style={styles.text}>USD</Text>}
      />
      <ListItemDivider
        title={t("portfolioOptions")}
        left={() => <ItemIcon name={"settings-outline"} />}
        right={() => <ItemIcon name={"chevron-forward-outline"} />}
      />
      <ListItemDivider
        title={t("homeScreen")}
        left={() => <ItemIcon name={"albums-outline"} />}
        right={() => <Text style={styles.text}>Accueil</Text>}
      />
      <ListItemDivider
        title={t("security")}
        left={() => <ItemIcon name={"lock-closed-outline"} />}
        right={() => <ItemIcon name={"chevron-forward-outline"} />}
      />
      <ListItemDivider
        title={t("about")}
        left={() => <ItemIcon name={"rocket-outline"} />}
        right={() => <ItemIcon name={"chevron-forward-outline"} />}
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
