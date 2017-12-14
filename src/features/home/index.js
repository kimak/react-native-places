import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated
} from "react-native";
import Button from "../../shared-ui/Button";
import Icon from "../../shared-ui/Icon";
import Svg, { Circle } from "react-native-svg";
import Swiper from "react-native-swiper";
import LottieView from "lottie-react-native";
import animationExport from "../../assets/animations/shape_types.json";

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

let progress = new Animated.Value(0);
class Home extends React.Component {
  loop() {
    Animated.timing(progress, {
      toValue: 1,
      duration: 5000
    }).start(({ finished }) => {
      if (finished) {
        progress.setValue(0);
        this.loop();
      }
    });
  }
  componentDidMount() {
    this.loop();
  }
  render = () => {
    const { navigation } = this.props;
    return (
      <Swiper style={styles.root} showsButtons={false}>
        <View style={styles.slide1}>
          <LottieView progress={progress} source={animationExport} />
          <Text style={styles.titleBold}>Welcome</Text>
          <Text style={styles.titleRegular}>on</Text>
          <Text style={styles.titleThin}>Places</Text>
          <Button
            label="Start >"
            onPress={() => navigation.navigate("Places")}
          />
        </View>
        <View style={styles.slide2}>
          <Text style={styles.titleBold}>Save your </Text>
          <Text style={styles.titleRegular}>favorite</Text>
          <Text style={styles.titleBold}>Place !</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.titleBold}>Share it</Text>
          <Text style={styles.titleRegular}>with your friends</Text>
          <Icon type="homer" />
          <Button
            label="Enjoy !"
            onPress={() => navigation.navigate("Places")}
          />
        </View>
      </Swiper>
    );
  };
}

export default Home;
