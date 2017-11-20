import React, { PropTypes } from "react";
import { addNavigationHelpers } from "react-navigation";
import { connect } from "react-redux";

import AppNavigator from "./AppNavigator";

export function getCurrentRouteName(navigationState) {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];
  if (route.routes) {
    return getCurrentRouteName(route);
  }
  return route.routeName;
}

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
