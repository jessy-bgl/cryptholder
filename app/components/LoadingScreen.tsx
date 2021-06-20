import React, { useMemo } from "react";
import { Image, StyleSheet, Text } from "react-native";
import { useTheme } from "react-native-paper";

import logo from "../../assets/images/logo.png";
import loading from "../../assets/images/loading.gif";

export default function LoadingScreen() {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.title}>CryptHolder</Text>
      <Image source={loading} style={styles.loading} />
    </>
  );
}

const createStyles = (theme: ReactNativePaper.Theme) => {
  return StyleSheet.create({
    logo: {
      width: 100,
      height: 100,
      marginTop: 300,
      marginBottom: 20,
      alignSelf: "center",
      borderRadius: 10,
    },
    title: {
      fontSize: 25,
      alignSelf: "center",
      color: theme.colors.text,
    },
    loading: {
      width: 50,
      height: 50,
      marginTop: 20,
      marginBottom: 20,
      alignSelf: "center",
    },
  });
};
