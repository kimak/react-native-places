import React from "react";
import { Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  item: {
    fontSize: 32
  },
  itemVisited: {
    textDecorationLine: "line-through"
  }
});

const Item = props => {
  const itemStyle = props.visited
    ? [styles.item, styles.itemVisited]
    : styles.item;
  return <Text style={itemStyle}>{props.label}</Text>;
};

export default Item;
