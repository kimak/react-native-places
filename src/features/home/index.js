import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Button from "../../shared-ui/Button";

const Home = ({ navigation }) => (
  <View>
    <Text>Home page</Text>
    <Button label="Navigate >" onPress={() => navigation.navigate("Places")} />
  </View>
);

export default Home;
