import { connect } from "react-redux";
import Component from "../components";

function mapDispatchToProps(dispatch) {
  return {
    onToggleItem: index => {
      dispatch({ type: "TOGGLE_PLACE", index });
    },
    addItem: label => {
      dispatch({ type: "ADD_PLACE", label });
    },
    updateFilter: value => {
      dispatch({ type: "SET_FILTER", filter: value });
    }
  };
}

function mapStateToProps(state) {
  return {
    places: state.places,
    filter: state.placesFilter
  };
}

const PlacesContainer = connect(mapStateToProps, mapDispatchToProps)(Component);
export default PlacesContainer;
