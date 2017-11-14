import { connect } from "react-redux";
import Places from "../index";

function mapDispatchToProps(dispatch) {
  return {
    onToggleItem: index => {
      dispatch({ type: "TOGGLE_PLACE", index });
    },
    addItem: label => {
      dispatch({ type: "ADD_PLACE", label });
    }
  };
}

function mapStateToProps(state) {
  return {
    places: state.places
  };
}

const PlacesContainer = connect(mapStateToProps, mapDispatchToProps)(Places);

export default PlacesContainer;
