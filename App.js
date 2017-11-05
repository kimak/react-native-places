import React from "react";
import { StatusBar } from "react-native";
import Navigator from "./src/navigation";
StatusBar.setHidden(true);

const App = () => <Navigator />;
export default App;
