import React from "react";
import PlaceItem from "./PlaceItem";
import { View } from "react-native";

const PlaceList = props => {
  return props.places.map((item, index) => {
    if (item.visited && props.filter === "new") return null;
    if (!item.visited && props.filter === "visited") return null;
    return (
      <PlaceItem
        label={item.label}
        visited={item.visited}
        key={item.id}
        onPress={props.onSelectItem.bind(this, index)}
      />
    );
  });
};
export default PlaceList;
