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

const datas = [
  {
    label: "Learn Javascript",
    complete: true
  },
  {
    label: "Learn ES6",
    complete: true
  },
  {
    label: "Learn ES7",
    complete: true
  },
  {
    label: "Learn React",
    complete: true
  },
  {
    label: "Learn React Native"
  },
  {
    label: "Learn Redux"
  },
  {
    label: "Learn by doing"
  },
  {
    label: "Learn to teach"
  },
  {
    label: "Teach to learn"
  },
  {
    label: "Go to sleep"
  },
  {
    label: "Learn Nodejs"
  },
  {
    label: "Learn Graphql"
  }
];

export default class App extends Component {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Header</Text>
        </View>
        <ScrollView contentContainerStyle={styles.content}>
          {datas.map((item, index) => {
            return (
              <PlaceItem
                label={item.label}
                complete={item.complete}
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
