import React from "react";
import { Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  item: {
    fontSize: 32
  },
  itemComplete: {
    textDecorationLine: "line-through"
  }
});

const Item = props => {
  const itemStyle = props.complete
    ? [styles.item, styles.itemComplete]
    : styles.item;
  return <Text style={itemStyle}>{props.label}</Text>;
};

export default Item;
