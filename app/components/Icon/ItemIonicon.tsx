import React, { useMemo } from "react";
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "react-native-paper";

type ItemIconProps = {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color?: string;
  size?: number;
};

const ItemIonicon = ({ name, color, size = 17 }: ItemIconProps) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return <Ionicons size={size} name={name} style={styles.icon} />;
};

export default ItemIonicon;

const createStyles = (theme: ReactNativePaper.Theme) => {
  return StyleSheet.create({
    icon: {
      textAlignVertical: "center",
      textAlign: "center",
      color: theme.colors.text,
    },
  });
};
