import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    padding: 5,
    marginTop: 10,
    backgroundColor: "#FFF"
  }
});

const AppButton = props => (
  <TouchableOpacity onPress={props.onPress} style={styles.button}>
    <Text>{props.label}</Text>
  </TouchableOpacity>
);

export default AppButton;
