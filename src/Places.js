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
          label: "Dubai"
        },
        {
          id: 7,
          label: "Shenzhen"
        },
        {
          id: 8,
          label: "New York"
        },
        {
          id: 9,
          label: "Istanbul"
        },
        {
          id: 10,
          label: "Kuala Lumpur"
        },
        {
          id: 11,
          label: "Antalya"
        }
      ]
    };
  }
  onToggleItem(index) {
    const places = [...this.state.places]; // equal-to this.state.places.concat();
    places[index].visited = !places[index].visited;
    this.setState({ places });
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
                key={item.id}
                onPress={this.onToggleItem.bind(this, index)}
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
