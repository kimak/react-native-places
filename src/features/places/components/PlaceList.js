import React from "react";
import PlaceItem from "./PlaceItem";

const PlaceList = props => {
  return props.places.map((item, index) => {
    return (
      <PlaceItem
        label={item.label}
        visited={item.visited}
        key={item.id}
        onPress={props.onSelectItem.bind(this, item.id)}
      />
    );
  });
};
export default PlaceList;
