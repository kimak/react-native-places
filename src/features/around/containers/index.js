import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import Component from "../components";
import { getVisiblePlaces } from "../../../redux/selectors/places";

function mapStateToProps(state) {
  return {
    markers: getVisiblePlaces(state)
  };
}

const AroundContainer = compose(connect(mapStateToProps))(Component);
export default AroundContainer;
