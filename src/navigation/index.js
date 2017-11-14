import React, { PropTypes } from "react";
import { addNavigationHelpers } from "react-navigation";
import { connect } from "react-redux";

import AppNavigator from "./AppNavigator";

function Navigation({ dispatch, navigation }) {
  return (
    <AppNavigator
      navigation={addNavigationHelpers({ dispatch, state: navigation })}
    />
  );
}

function mapStateToProps(state) {
  return {
    navigation: state.navigation
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
