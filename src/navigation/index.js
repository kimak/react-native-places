import React from "react";
import { View, Text } from "react-native";
import {
  StackNavigator,
  DrawerNavigator,
  TabNavigator
} from "react-navigation";

import Home from "../features/home";
import Places from "../features/places";

const Drawer = DrawerNavigator(
  {
    Drawer: {
      screen: Places,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    drawerPosition: "right",
    contentComponent: props => (
      <View>
        <Text {...props}>Hello Drawer</Text>
      </View>
    )
  }
);

const RootNavigator = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  },
  Places: {
    screen: Drawer,
    navigationOptions: {
      header: null
    }
  }
});

export default RootNavigator;
