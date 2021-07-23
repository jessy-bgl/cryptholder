import React, { useMemo } from "react";
import { StyleSheet } from "react-native";
import { List, Switch, Text, useTheme } from "react-native-paper";
import { useTranslation } from "react-i18next";
import { observer } from "mobx-react-lite";
import ListItemDivider from "./List/ListItemDivider";
import { useStore } from "../models/root-store/root-store-context";
import ItemIonicon from "../components/Icon/ItemIonicon";
import { useNavigation } from "@react-navigation/core";
import { capitalizeFirstLetter } from "../utils/strings";

const Settings = () => {
  const { t } = useTranslation("settings");
  const { settings } = useStore();
  const { language, mainCurrency, mainScreen } = settings;
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const { navigate } = useNavigation();

  return (
    <List.Section style={styles.root}>
      <Text style={styles.title}>{t("appearance").toUpperCase()}</Text>
      <ListItemDivider
        title={t("language")}
        left={() => <ItemIonicon name={"globe-outline"} />}
        right={() => <Text style={styles.text}>{language.toUpperCase()}</Text>}
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
          <Text style={styles.text}>{mainCurrency.toUpperCase()}</Text>
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
          <Text style={styles.text}>{capitalizeFirstLetter(mainScreen)}</Text>
        )}
        onPress={() => navigate("homeScreen")}
      />
      <Text style={styles.title}>{t("security").toUpperCase()}</Text>
      <ListItemDivider
        title={t("security")}
        left={() => <ItemIonicon name={"lock-closed-outline"} />}
        right={() => <ItemIonicon name={"chevron-forward-outline"} />}
        onPress={() => {
          if (settings.biometricAuth || settings.passcode) {
            navigate("auth", { screen: "security", resetStack: false });
          } else {
            navigate("security");
          }
        }}
      />
      <Text style={styles.title}>{t("other").toUpperCase()}</Text>
      <ListItemDivider
        title={t("about")}
        left={() => <ItemIonicon name={"rocket-outline"} />}
        right={() => <ItemIonicon name={"chevron-forward-outline"} />}
        onPress={() => navigate("about")}
      />
    </List.Section>
  );
};

export default observer(Settings);

const createStyles = (theme: ReactNativePaper.Theme) => {
  return StyleSheet.create({
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
      color: theme.colors.secondaryText,
    },
    title: {
      fontSize: 13,
      paddingLeft: 10,
      paddingTop: 25,
      fontWeight: "bold",
      color: theme.colors.primaryText,
      backgroundColor: theme.colors.background,
    },
  });
};
