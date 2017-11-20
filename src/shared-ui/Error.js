import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: { flex: 1, justifyContent: "center", alignItems: "center" }
});

const Error = props => (
  <View style={styles.root}>
    <Text>Error...</Text>
  </View>
);

export default Error;
