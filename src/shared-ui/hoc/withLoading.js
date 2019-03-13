import React from "react";
import Loading from "../Loading";

const withLoading = Component => props => {
  if (props.isLoading || props.loading) {
    return <Loading />;
  }
  return <Component {...props} />;
};

export default withLoading;
