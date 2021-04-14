import React from "react";
import { Divider, List } from "react-native-paper";
import { StyleSheet } from "react-native";

type Props = {
  title: string;
  left?: React.ComponentProps<typeof List.Item>["left"];
  right?: React.ComponentProps<typeof List.Item>["right"];
  style?: React.ComponentProps<typeof List.Item>["style"];
  onPress?: () => void;
};

const ListItemDivider = ({ title, left, right, style, onPress }: Props) => {
  return (
    <>
      <List.Item
        title={title}
        left={left}
        right={right}
        onPress={onPress}
        style={style}
        titleStyle={styles.title}
      />
      <Divider />
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
  },
});

export default ListItemDivider;
