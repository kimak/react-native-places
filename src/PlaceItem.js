import React from "react";
import { Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  item: {
    fontSize: 32
  },
  itemVisited: {
    // TODO
    // https://facebook.github.io/react-native/docs/text.html#style
  }
});

const Item = props => {
  const itemStyle = props.visited
    ? [styles.item, styles.itemVisited]
    : styles.item;
  return <Text style={itemStyle}>{props.label}</Text>;
};

export default Item;
