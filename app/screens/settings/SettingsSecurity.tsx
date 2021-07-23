import React, { useEffect, useMemo, useState } from "react";
import { StyleSheet, Text } from "react-native";
import { useTranslation } from "react-i18next";
import { List, Switch, useTheme } from "react-native-paper";
import { observer } from "mobx-react-lite";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import ItemIonicon from "../../components/Icon/ItemIonicon";
import { useStore } from "../../models/root-store/root-store-context";
import { isBioAuthAvailable } from "../../utils/biometric";
import { remove } from "../../../expo-secure-store/securestore";

const SettingsSecurity = () => {
  const { t } = useTranslation("settings");
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const { settings } = useStore();
  const { passcode, biometricAuth, togglePasscode, toggleBiometricAuth } =
    settings;
  const [isBioAvailable, setIsBioAvailable] = useState(false);
  const { navigate } = useNavigation();

  const checkDeviceForHardware = async () => {
    setIsBioAvailable(await isBioAuthAvailable());
  };

  useEffect(() => {
    checkDeviceForHardware();
  }, []);

  const handlePasscodeChange = () => {
    togglePasscode();

    if (!passcode) {
      // create a new passcode
      navigate("numpad");
    } else {
      // delete passcode from memory and disable biometric auth
      remove("passcode");
      if (biometricAuth) {
        toggleBiometricAuth();
      }
    }
  };

  return (
    <>
      <ScrollView>
        <List.Section style={styles.root}>
          <Text style={styles.title}>{t("security").toUpperCase()}</Text>
          <List.Item
            title={t("code")}
            description={t("codeDescription")}
            left={() => <ItemIonicon name={"lock-closed-outline"} />}
            right={() => (
              <Switch value={passcode} onValueChange={handlePasscodeChange} />
            )}
          />
          <List.Item
            title={t("biometricAuth")}
            description={t("biometricAuthDescription")}
            left={() => <ItemIonicon name={"finger-print-outline"} />}
            right={() => (
              <Switch
                value={biometricAuth}
                onValueChange={(value: boolean) => toggleBiometricAuth()}
                // disable bio auth if not available or passcode is not set
                disabled={!isBioAvailable || !passcode}
              />
            )}
          />
        </List.Section>
      </ScrollView>
    </>
  );
};

const createStyles = (theme: ReactNativePaper.Theme) => {
  return StyleSheet.create({
    root: {
      width: "100%",
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

export default observer(SettingsSecurity);
