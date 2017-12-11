import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  StatusBar
} from "react-native";

import PlaceList from "./PlaceList";
import Header from "./Header";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#ecf0f1"
  },
  content: {
    flex: 0,
    alignItems: "center"
  }
});

const Places = props => (
  <View style={styles.root}>
    <Header onAdd={props.addItem} />
    <ScrollView contentContainerStyle={styles.content}>
      <PlaceList places={props.places} onSelectItem={props.onToggleItem} />
    </ScrollView>
  </View>
);
export default Places;
