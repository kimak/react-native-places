import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import {
  fetchPlaces,
  togglePlace,
  addPlace,
  updateFilter
} from "../../../redux/actions/places";
import Component from "../components";
import withDidMount from "../../../shared-ui/hoc/withDidMount";
import withLoading from "../../../shared-ui/hoc/withLoading";
import withError from "../../../shared-ui/hoc/withError";
import { getVisiblePlaces } from "../../../redux/selectors/places";

function mapDispatchToProps(dispatch) {
  return {
    didMount() {
      dispatch(fetchPlaces());
    },
    onToggleItem: id => {
      dispatch(togglePlace(id));
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
    places: getVisiblePlaces(state),
    isLoading: state.places.isLoading,
    error: state.places.error,
    filter: state.placesFilter
  };
}

const PlacesContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withDidMount,
  withError,
  withLoading
)(Component);
export default PlacesContainer;
