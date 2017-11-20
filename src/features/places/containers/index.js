import React from "react";
import { connect } from "react-redux";
import {
  fetchPlaces,
  togglePlace,
  addPlace,
  updateFilter
} from "../../../redux/actions/places";
import Component from "../components";
import withDidMount from "../../../shared-ui/hoc/withDidMount";

function mapDispatchToProps(dispatch) {
  return {
    didMount() {
      dispatch(fetchPlaces());
    },
    onToggleItem: index => {
      dispatch(togglePlace(index));
    },
    addItem: label => {
      dispatch(addPlace(label));
    },
    updateFilter: value => {
      dispatch(updateFilter(value));
    }
  };
}

function mapStateToProps(state) {
  return {
    places: state.places.list,
    isLoading: state.places.isLoading,
    error: state.places.error,
    filter: state.placesFilter
  };
}

const PlacesContainer = connect(mapStateToProps, mapDispatchToProps)(
  withDidMount(Component)
);
export default PlacesContainer;
