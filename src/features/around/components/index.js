import React from "react";
import { View, Text } from "react-native";
import MapView from "react-native-maps";
import Icon from "../../../shared-ui/Icon";

const Around = props => (
  <View style={{ flex: 1 }}>
    <MapView
      style={{ flex: 1 }}
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
