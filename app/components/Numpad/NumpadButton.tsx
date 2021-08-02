import React, { useMemo } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Button, useTheme } from "react-native-paper";

type NumpadButtonProps = {
  text: string;
  onPress: (value: string) => void;
};

const NumpadButton = (props: NumpadButtonProps) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => props.onPress(props.text)}
    >
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const createStyles = (theme: ReactNativePaper.Theme) => {
  return StyleSheet.create({
    button: {
      width: "30%",
      height: 90,
      // borderRadius: 150,
      // borderWidth: 1,
      // paddingTop: 5,
      // margin: 5,
      // borderColor: theme.colors.secondaryText,
    },
    text: {
      textAlignVertical: "center",
      alignSelf: "center",
      height: "100%",
      fontSize: 25,
      color: theme.dark ? theme.colors.text : theme.colors.primary,
    },
  });
};

export default NumpadButton;
