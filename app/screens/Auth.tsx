import React, { useEffect, useState, useMemo, useRef } from "react";
import { StyleSheet, View, Text } from "react-native";
import { useTheme } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp, useNavigation } from "@react-navigation/native";

import { getValueFor } from "../../expo-secure-store/securestore";
import Numpad, { NumpadRef } from "../components/Numpad/Numpad";
import { useStore } from "../models/root-store/root-store-context";
import { cancelBio, scanBio } from "../utils/biometric";
import { RootStackParamList } from "../navigation/RootNavigator";

type AuthScreenNavigationProp = StackNavigationProp<RootStackParamList, "auth">;
type AuthScreenRouteProp = RouteProp<RootStackParamList, "auth">;
type Props = {
  route: AuthScreenRouteProp;
  navigation: AuthScreenNavigationProp;
};

const AuthScreen = ({ route, navigation }: Props) => {
  const { t } = useTranslation("common");
  const { settings } = useStore();
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const [savedCode, setSavedCode] = useState<string | undefined>(undefined);
  const numpadRef = useRef<NumpadRef>({ shake: () => {}, refresh: () => {} });
  const { reset, goBack, navigate } = useNavigation();

  const initSavedCode = async () => {
    const code = await getValueFor("passcode");
    setSavedCode(code);
  };

  const processValidAuth = () => {
    cancelBio();

    if (route.params && route.params.resetStack) {
      // reset to the default main screen
      // used when app start
      reset({
        index: 0,
        routes: [
          {
            name: "main",
            state: {
              routes: [
                {
                  name: settings.mainScreen,
                },
              ],
            },
          },
        ],
      });
    } else if (route.params?.screen) {
      // navigate to specified screen if present
      // used to navigate from settings to settingsSecurity
      navigate(route.params.screen);
    } else {
      goBack();
    }
  };

  const startAuthentication = async () => {
    const res = await scanBio();
    if (res === true) {
      processValidAuth();
    }
  };

  useEffect(() => {
    initSavedCode();

    if (settings.isBioAuthRequired) {
      startAuthentication();
    }
  }, []);

  const authenticate = async (code: string) => {
    if (savedCode === code) {
      processValidAuth();
    } else {
      numpadRef.current.shake();
      numpadRef.current.refresh();
    }
  };

  return (
    <View>
      {settings.isBioAuthRequired ? (
        <Ionicons
          name="finger-print-outline"
          size={35}
          onPress={() => {
            startAuthentication();
          }}
          style={styles.biometric}
        ></Ionicons>
      ) : (
        <></>
      )}
      <Text style={styles.title}> {t("verifyCode")}</Text>
      <Numpad onSuccess={authenticate} ref={numpadRef} />
    </View>
  );
};

const createStyles = (theme: ReactNativePaper.Theme) => {
  return StyleSheet.create({
    biometric: {
      color: theme.colors.text,
      position: "absolute",
      marginLeft: "auto",
      marginRight: "auto",
      textAlign: "center",
      top: 85,
      left: 0,
      right: 0,
    },
    title: {
      position: "absolute",
      textAlign: "center",
      marginLeft: "auto",
      marginRight: "auto",
      left: 0,
      right: 0,
      top: 150,
      fontSize: 18,
      fontWeight: "normal",
      color: theme.colors.text,
      backgroundColor: theme.colors.background,
    },
  });
};

export default AuthScreen;
