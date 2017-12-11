import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Button from "../../shared-ui/Button";
import Icon from "../../shared-ui/Icon";
import Svg, { Circle } from "react-native-svg";
import Swiper from "react-native-swiper";

const styles = StyleSheet.create({
  root: {},
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
  },
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#C6C6C6"
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF"
  }
});

const Home = ({ navigation }) => (
  <Swiper style={styles.root} showsButtons={false}>
    <View style={styles.slide1}>
      <Text style={styles.titleBold}>Welcome</Text>
      <Text style={styles.titleRegular}>on</Text>
      <Text style={styles.titleThin}>Places</Text>
      <Button label="Start >" onPress={() => navigation.navigate("Places")} />
    </View>
    <View style={styles.slide2}>
      <Svg height="100" width="100">
        <Circle cx="50" cy="50" r="50" fill="#007aff" />
      </Svg>
      <Text style={styles.titleBold}>Save your </Text>
      <Text style={styles.titleRegular}>favorite</Text>
      <Text style={styles.titleBold}>Place !</Text>
    </View>
    <View style={styles.slide3}>
      <Text style={styles.titleBold}>Share it</Text>
      <Text style={styles.titleRegular}>with your friends</Text>
      <Icon type="homer" />
      <Button label="Enjoy !" onPress={() => navigation.navigate("Places")} />
    </View>
  </Swiper>
);

export default Home;
