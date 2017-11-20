import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: { flex: 1, justifyContent: "center", alignItems: "center" }
});

const Loading = props => (
  <View style={styles.root}>
    <Text>Loading...</Text>
  </View>
);

export default Loading;
