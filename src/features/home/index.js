import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Button from "../../shared-ui/Button";
import Icon from "../../shared-ui/Icon";
import Svg, { Circle } from "react-native-svg";

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  titleBold: {
    fontFamily: "Poppins-Bold",
    fontSize: 32
  },
  titleRegular: {
    fontFamily: "Poppins-Regular",
    fontSize: 32
  },
  titleThin: {
    fontFamily: "Poppins-Thin",
    fontSize: 32
  }
});

const Home = ({ navigation }) => (
  <View style={styles.root}>
    <Text style={styles.titleBold}>Hello</Text>
    <Text style={styles.titleRegular}>Poppins</Text>
    <Text style={styles.titleThin}>Fonts</Text>
    <Svg height="100" width="100">
      <Circle cx="50" cy="50" r="50" fill="pink" />
    </Svg>
    <Button label="Navigate >" onPress={() => navigation.navigate("Places")} />
    <Icon type="homer" />
  </View>
);

export default Home;
