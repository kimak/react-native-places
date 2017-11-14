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
import Footer from "./Footer";

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
      filter: "all"
    };
    this.updateFilter = this.updateFilter.bind(this);
  }
  updateFilter(value) {
    this.setState({
      filter: value
    });
  }
  render() {
    return (
      <View style={styles.root}>
        <Header onAdd={this.props.addItem} />
        <ScrollView contentContainerStyle={styles.content}>
          <PlaceList
            places={this.props.places}
            filter={this.state.filter}
            onSelectItem={this.props.onToggleItem}
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
