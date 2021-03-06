import React, { useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  Image,
  Linking,
  ScrollView,
} from "react-native";
import {
  Button,
  Divider,
  List,
  useTheme,
  Snackbar,
  Modal,
  Portal,
} from "react-native-paper";
import Clipboard from "expo-clipboard";
import Markdown from "react-native-simple-markdown";
import { Asset } from "expo-asset";

import ItemIonicon from "../../components/Icon/ItemIonicon";
import app from "../../../app.json";
import logo from "../../../assets/images/logo.png";
import BitcoinLogo from "../../../assets/images/bitcoin.svg";
import EthereumLogo from "../../../assets/images/ethereum.svg";

const SettingsAbout = () => {
  const { t } = useTranslation("settings");
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const markdownStyles = useMemo(() => createMarkdownStyles(theme), [theme]);
  const [snackbarVisible, setSnackbarVisible] = React.useState(false);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [changelog, setChangelog] = React.useState(undefined);
  const onToggleSnackBar = () => setSnackbarVisible(!snackbarVisible);
  const onDismissSnackBar = () => setSnackbarVisible(false);
  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);

  const fetchLocalFile = async () => {
    let file: any = Asset.fromModule(require("../../../CHANGELOG.md"));
    await file.downloadAsync();
    file = await fetch(file.uri);
    file = await file.text();

    setChangelog(file);
  };

  useEffect(() => {
    fetchLocalFile();
  }, []);

  return (
    <>
      <ScrollView>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.intro}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <Divider />
        <Text style={styles.title}>{t("about").toUpperCase()}</Text>
        <List.Section style={styles.root}>
          <List.Item
            title={t("version")}
            left={() => (
              <ItemIonicon
                name={"help-circle-outline"}
                color={theme.colors.primary}
                size={25}
              />
            )}
            description={app.expo.version}
            onPress={() => {
              Linking.openURL(
                "https://github.com/jessy-bgl/cryptholder/releases"
              );
            }}
          />
          <List.Item
            title={t("authors")}
            left={() => (
              <ItemIonicon
                name={"code-slash"}
                color={theme.colors.onSurface}
                size={25}
              />
            )}
            description={t("authorsDescription")}
            onPress={() => {
              Linking.openURL(
                "https://github.com/jessy-bgl/cryptholder/graphs/contributors"
              );
            }}
          />
          <List.Item
            title={t("license")}
            left={() => (
              <ItemIonicon
                name={"book-outline"}
                color={theme.colors.onSurface}
                size={25}
              />
            )}
            description={t("licenseDescription")}
            onPress={() => {
              Linking.openURL("https://www.gnu.org/licenses/gpl-3.0.html");
            }}
          />
        </List.Section>
        <View style={styles.view}>
          <Button
            style={styles.button}
            mode="contained"
            onPress={() => {
              Linking.openURL("https://github.com/jessy-bgl/cryptholder");
            }}
          >
            <Text style={styles.buttonText}>{t("sources")}</Text>
          </Button>
          <Portal>
            <Modal
              visible={modalVisible}
              onDismiss={hideModal}
              contentContainerStyle={styles.modal}
            >
              <ScrollView>
                <Markdown styles={markdownStyles}>{changelog}</Markdown>
              </ScrollView>
            </Modal>
          </Portal>
          <Button style={styles.button} mode="contained" onPress={showModal}>
            <Text style={styles.buttonText}>{t("changelog")}</Text>
          </Button>
          <Button
            style={styles.button}
            mode="contained"
            onPress={() => {
              Linking.openURL(
                "https://github.com/jessy-bgl/cryptholder/issues"
              );
            }}
          >
            <Text style={styles.buttonText}>{t("bugs")}</Text>
          </Button>
        </View>
        <Divider />
        <Text style={styles.title}>{t("donation").toUpperCase()}</Text>
        <List.Section style={styles.root}>
          <List.Item
            title={t("bitcoin")}
            left={() => (
              <BitcoinLogo
                width={25}
                height={25}
                fill={theme.colors.text}
                style={styles.donateLogo}
              />
            )}
            description={t("copyAddress")}
            onPress={() => {
              Clipboard.setString("");
              onToggleSnackBar();
            }}
          />
          <List.Item
            title={t("ethereum")}
            left={() => (
              <EthereumLogo
                width={25}
                height={25}
                fill={theme.colors.text}
                style={styles.donateLogo}
              />
            )}
            description={t("copyAddress")}
            onPress={() => {
              Clipboard.setString("");
              onToggleSnackBar();
            }}
          />
        </List.Section>
        <Divider />
        <Text style={styles.title}>{t("media").toUpperCase()}</Text>
        <List.Section style={styles.root}>
          <List.Item
            title={t("mail")}
            left={() => (
              <ItemIonicon
                name={"mail-outline"}
                color={theme.colors.onSurface}
                size={25}
              />
            )}
            description={"dev@cryptholder.app"}
            onPress={() => {
              Clipboard.setString("dev@cryptholder.app");
              onToggleSnackBar();
            }}
          />
        </List.Section>
      </ScrollView>
      <Snackbar
        style={styles.snackbar}
        duration={1500}
        visible={snackbarVisible}
        onDismiss={onDismissSnackBar}
        action={{ label: "Close", onPress: () => onDismissSnackBar() }}
      >
        <Text style={styles.snackbarText}>Copied to clipboard.</Text>
      </Snackbar>
    </>
  );
};

const createMarkdownStyles = (theme: ReactNativePaper.Theme) => {
  return {
    heading1: {
      fontSize: 24,
      color: theme.colors.primaryText,
    },
    heading2: {
      marginTop: 15,
      fontSize: 20,
      color: theme.colors.primaryText,
    },
    link: {
      color: theme.colors.accent,
    },
    mailTo: {
      color: theme.colors.accent,
    },
    text: {
      color: theme.colors.text,
    },
    listItemBullet: {
      color: theme.colors.text,
    },
  };
};

const createStyles = (theme: ReactNativePaper.Theme) => {
  return StyleSheet.create({
    root: {
      width: "100%",
    },
    intro: {
      color: theme.colors.secondaryText,
      padding: 15,
    },
    title: {
      fontSize: 13,
      paddingLeft: 10,
      paddingTop: 25,
      fontWeight: "bold",
      color: theme.colors.primaryText,
      backgroundColor: theme.colors.background,
    },
    view: {
      display: "flex",
      flexDirection: "row",
      marginBottom: 10,
    },
    button: {
      flex: 1,
      marginLeft: 5,
      marginRight: 5,
      backgroundColor: theme.colors.primary,
    },
    buttonText: {
      color: theme.dark ? theme.colors.text : theme.colors.background,
    },
    logo: {
      width: 100,
      height: 100,
      marginTop: 10,
      alignSelf: "center",
      borderRadius: 20,
    },
    snackbar: {
      width: "50%",
      alignSelf: "center",
      backgroundColor: theme.colors.secondary,
      opacity: 0.85,
    },
    snackbarText: {
      color: theme.colors.text,
    },
    donateLogo: {
      marginTop: 14,
    },
    modal: {
      backgroundColor: theme.colors.background,
      margin: 20,
      padding: 10,
      borderColor: theme.colors.primary,
      borderWidth: 2,
      height: "60%",
    },
    markdown: {
      color: theme.colors.text,
    },
  });
};

export default SettingsAbout;
