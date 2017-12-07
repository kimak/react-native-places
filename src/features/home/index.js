import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Button from "../../shared-ui/Button";

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  titleBold: {
    fontFamily: "Poppins-Bold",
    fontSize: 32,
  },
  titleRegular: {
    fontFamily: "Poppins-Regular",
    fontSize: 32,
  },
  titleThin: {
    fontFamily: "Poppins-Thin",
    fontSize: 32,
  }
});

const Home = ({ navigation }) => (
  <View style={styles.root}>
    <Text style={styles.titleBold}>Hello</Text>
    <Text style={styles.titleRegular}>Poppins</Text>
    <Text style={styles.titleThin}>Fonts</Text>
    <Button label="Navigate >" onPress={() => navigation.navigate("Places")} />
  </View>
);

export default Home;
