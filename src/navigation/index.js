import React from "react";
import { View, Text } from "react-native";
import {
  StackNavigator,
  DrawerNavigator,
  TabNavigator
} from "react-navigation";

import Home from "../features/home";
import Places from "../features/places";

const Tabs = TabNavigator({
  Tabs: {
    screen: Places,
    navigationOptions: {
      header: null
    }
  },
  Tabs2: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  }
});

// this.props.navigation.navigate("DrawerClose");
// this.props.navigation.navigate("DrawerOpen");
const Drawer = DrawerNavigator(
  {
    Drawer: {
      screen: Tabs,
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
