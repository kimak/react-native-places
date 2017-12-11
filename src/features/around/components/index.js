import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView from "react-native-maps";
import Icon from "../../../shared-ui/Icon";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: 5
  },
  map: {
    flex: 1
  }
});

const Around = props => (
  <View style={styles.root}>
    <MapView
      style={styles.map}
      ref={ref => {
        this.mapRef = ref;
        if (this.mapRef) this.mapRef.fitToElements(true);
      }}
      onLayout={mapRef => {
        if (this.mapRef) this.mapRef.fitToElements(true);
      }}
    >
      {props.markers &&
        props.markers.map(marker => (
          <MapView.Marker
            key={marker.id}
            coordinate={marker.position}
            anchor={{ x: 0.5, y: 1 }}
            centerOffset={{ x: 0, y: -21 }}
          >
            <Icon type="pin" />
          </MapView.Marker>
        ))}
    </MapView>
  </View>
);

export default Around;
