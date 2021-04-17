import React from "react";
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "react-native-paper";

type ItemIconProps = {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color?: string;
  size?: number;
};

const ItemIonicon = ({ name, color, size = 20 }: ItemIconProps) => {
  const { colors } = useTheme();
  const { primary } = colors;
  return (
    <Ionicons
      size={size}
      name={name}
      style={{ color: color ? color : primary, ...styles.icon }}
    />
  );
};

export default ItemIonicon;

const styles = StyleSheet.create({
  icon: {
    textAlignVertical: "center",
  },
});
