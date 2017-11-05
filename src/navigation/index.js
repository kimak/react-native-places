import { StackNavigator } from "react-navigation";

import Home from "../features/home";
import Places from "../features/places";

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
