import React, { useMemo } from "react";
import { ColorValue, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "react-native-paper";

type ItemIconProps = {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color?: ColorValue;
  size?: number;
};

const ItemIonicon = ({ name, color, size = 17 }: ItemIconProps) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme, color), [theme, color]);

  return <Ionicons size={size} name={name} style={styles.icon} />;
};

export default ItemIonicon;

const createStyles = (
  theme: ReactNativePaper.Theme,
  color: ColorValue | undefined
) => {
  return StyleSheet.create({
    icon: {
      textAlignVertical: "center",
      textAlign: "center",
      color: color ? color : theme.colors.text,
    },
  });
};
