import React from "react";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import Navigator from "./src/navigation";
StatusBar.setHidden(true);

import store from "./src/redux/store";

const App = () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);

export default App;
