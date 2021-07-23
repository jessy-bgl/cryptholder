import React, { useMemo } from "react";
import { StyleSheet, Text } from "react-native";
import { Button, useTheme } from "react-native-paper";

type NumpadButtonProps = {
  text: string;
  onPress: (value: string) => void;
};

const NumpadButton = (props: NumpadButtonProps) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <Button
      style={styles.button}
      onPress={() => props.onPress(props.text)}
      mode="contained"
    >
      <Text style={styles.text}>{props.text}</Text>
    </Button>
  );
};

const createStyles = (theme: ReactNativePaper.Theme) => {
  return StyleSheet.create({
    button: {
      width: 70,
      height: 70,
      borderRadius: 150,
      borderWidth: 2,
      paddingTop: 5,
      margin: 15,
      borderColor: theme.colors.secondaryText,
    },
    text: {
      textAlignVertical: "center",
      height: "100%",
      fontSize: 25,
    },
  });
};

export default NumpadButton;
