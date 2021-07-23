import React, { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { useTheme } from "react-native-paper";

type ViewCodeLengthProps = {
  active: number;
  size: number;
};

const NumpadDisplayHelper = ({ active, size }: ViewCodeLengthProps) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  let jsx = [];
  for (let index = 0; index < size; index++) {
    jsx.push(
      <View
        key={index}
        style={[
          active > index ? styles.active : styles.inactive,
          styles.common,
        ]}
      ></View>
    );
  }

  return <View style={styles.row}>{jsx}</View>;
};

const createStyles = (theme: ReactNativePaper.Theme) => {
  return StyleSheet.create({
    row: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      width: "100%",
      marginBottom: 80,
    },
    common: {
      borderWidth: 1,
      width: 20,
      height: 20,
      borderRadius: 15,
      margin: 5,
    },
    inactive: {
      backgroundColor: theme.colors.background,
      borderColor: theme.colors.secondaryText,
    },
    active: {
      backgroundColor: theme.colors.primary,
      borderColor: theme.colors.secondaryText,
    },
  });
};

export default NumpadDisplayHelper;
