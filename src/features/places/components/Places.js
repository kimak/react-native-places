import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  StatusBar
} from "react-native";
StatusBar.setHidden(true);

import PlaceItem from "./PlaceItem";

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
    flex: 0,
    alignItems: "center"
  },
  footer: {
    height: 50,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      places: [
        {
          label: "Hong Kong",
          visited: true
        },
        {
          label: "Londres",
          visited: true
        },
        {
          label: "Singapour",
          visited: true
        },
        {
          label: "Bangkok",
          visited: true
        },
        {
          label: "Paris"
        },
        {
          label: "Macao"
        },
        {
          label: "Dubai"
        },
        {
          label: "Shenzhen"
        },
        {
          label: "New York"
        },
        {
          label: "Istanbul"
        },
        {
          label: "Kuala Lumpur"
        },
        {
          label: "Antalya"
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
        <ScrollView contentContainerStyle={styles.content}>
          {this.state.places.map((item, index) => {
            return (
              <PlaceItem
                label={item.label}
                visited={item.visited}
                key={index}
              />
            );
          })}
          <Image
            style={{ width: 200, height: 150 }}
            source={{
              uri: "http://media.giphy.com/media/A06UFEx8jxEwU/giphy.gif"
            }}
          />
        </ScrollView>
        <View style={styles.footer}>
          <Text>Footer</Text>
        </View>
      </View>
    );
  }
}
