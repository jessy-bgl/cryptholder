import React, { useMemo } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { useTheme } from "react-native-paper";

import logo from "../../assets/images/logo-rounded.png";
import loading from "../../assets/images/loading.gif";

export default function LoadingScreen() {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <View style={styles.root}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.title}>CryptHolder</Text>
      <Image source={loading} style={styles.loading} />
    </View>
  );
}

const createStyles = (theme: ReactNativePaper.Theme) => {
  return StyleSheet.create({
    root: {
      display: "flex",
      height: "100%",
      backgroundColor: "#1e1e1e",
    },
    logo: {
      width: 100,
      height: 100,
      marginTop: 280,
      marginBottom: 20,
      alignSelf: "center",
    },
    title: {
      fontSize: 25,
      alignSelf: "center",
      color: theme.colors.surface,
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
