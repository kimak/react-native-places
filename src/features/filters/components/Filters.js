import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  root: {
    height: 50,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  selected: {
    backgroundColor: "#FFE163"
  },
  text: {
    paddingVertical: 2,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#CCC"
  }
});

const Button = props => (
  <TouchableOpacity onPress={props.onPress}>
    <Text style={props.selected ? [styles.selected, styles.text] : styles.text}>
      {props.label}
    </Text>
  </TouchableOpacity>
);

const Filters = props => (
  <View style={styles.root}>
    <Button
      label="Visited"
      selected={props.selected === "visited"}
      onPress={props.onSelectFilter.bind(this, "visited")}
    />
    <Button
      label="New"
      onPress={props.onSelectFilter.bind(this, "new")}
      selected={props.selected === "new"}
    />
    <Button
      label="All"
      onPress={props.onSelectFilter.bind(this, "all")}
      selected={props.selected === "all"}
    />
  </View>
);
export default Filters;
