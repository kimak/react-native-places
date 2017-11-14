import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  StatusBar
} from "react-native";

import PlaceList from "./components/PlaceList";
import Header from "./components/Header";
import Footer from "./components/Footer";

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

export default class Places extends Component {
  constructor() {
    super();
    this.state = {
      filter: "all",
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
    this.addItem = this.addItem.bind(this);
    this.updateFilter = this.updateFilter.bind(this);
    this.onToggleItem = this.onToggleItem.bind(this);
  }
  onToggleItem(index) {
    const places = [...this.state.places]; // equal-to this.state.places.concat();
    places[index].visited = !places[index].visited;
    this.setState({ places });
  }
  addItem(label) {
    const places = [...this.state.places];
    places.unshift({
      label,
      visited: false,
      id: places.length
    });

    this.setState({
      places
    });
  }
  updateFilter(value) {
    this.setState({
      filter: value
    });
  }
  render() {
    return (
      <View style={styles.root}>
        <Header onAdd={this.addItem} />
        <ScrollView contentContainerStyle={styles.content}>
          <PlaceList
            places={this.state.places}
            filter={this.state.filter}
            onSelectItem={this.onToggleItem}
          />
        </ScrollView>
        <Footer
          onSelectFilter={this.updateFilter}
          selected={this.state.filter}
        />
      </View>
    );
  }
}
