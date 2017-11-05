import React from "react";
import { StatusBar } from "react-native";
import Home from "./src/features/home";
import Places from "./src/features/places";
StatusBar.setHidden(true);

import { StackNavigator } from "react-navigation";

const RootNavigator = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  },
  Places: {
    screen: Places,
    navigationOptions: {
      header: null
    }
  }
});

export default RootNavigator;
