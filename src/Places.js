import React, { Component } from "react";
import { Text, View, StyleSheet, StatusBar } from "react-native";
StatusBar.setHidden(true);

// import PlaceItem from './PlaceItem';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#ecf0f1"
  },
  header: {
    height: 80,
    width: "100%",
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center"
  },
  headerText: {
    color: "#FFF"
  },
  content: {
    flex: 1,
    alignItems: "center"
  },
  footer: {
    height: 50,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default class Places extends Component {
  constructor() {
    super();
    this.state = {
      places: [
        {
          id: 0,
          label: "Hong Kong",
          visited: true
        },
        {
          id: 1,
          label: "Londres",
          visited: true
        },
        {
          id: 2,
          label: "Singapour",
          visited: true
        },
        {
          id: 3,
          label: "Bangkok",
          visited: true
        },
        {
          id: 4,
          label: "Paris"
        },
        {
          id: 5,
          label: "Macao"
        },
        {
          id: 6,
          label: "New York"
        }
      ]
    };
  }
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Header</Text>
        </View>
        <View style={styles.content}>
          {/* TODO  use this.state.places and <PlaceItem />*/}
        </View>
        <View style={styles.footer}>
          <Text>Footer</Text>
        </View>
      </View>
    );
  }
}
