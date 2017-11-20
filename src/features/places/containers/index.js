import React from "react";
import { connect } from "react-redux";
import {
  fetchPlaces,
  togglePlace,
  addPlace,
  updateFilter
} from "../../../redux/actions/places";
import Component from "../components";

class LifecycleComponent extends React.Component {
  componentDidMount() {
    this.props.init();
  }
  render() {
    return <Component {...this.props} />;
  }
}

function mapDispatchToProps(dispatch) {
  return {
    init() {
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
    filter: state.placesFilter
  };
}

const PlacesContainer = connect(mapStateToProps, mapDispatchToProps)(
  LifecycleComponent
);
export default PlacesContainer;
