import React from "react";
import Error from "../Error";

const withError = Component => props => {
  if (props.error) {
    return <Error />;
  }
  return <Component {...props} />;
};

export default withError;
