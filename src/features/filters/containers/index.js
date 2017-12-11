import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { updateFilter } from "../../../redux/actions/places";
import Filters from "../components/Filters";

function mapDispatchToProps(dispatch) {
  return {
    onSelectFilter: value => {
      dispatch(updateFilter(value));
    }
  };
}

function mapStateToProps(state) {
  return {
    selected: state.placesFilter
  };
}

const FiltersContainer = connect(mapStateToProps, mapDispatchToProps)(Filters);
export default FiltersContainer;
