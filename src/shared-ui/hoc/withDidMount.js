import React from "react";

const withDidMount = Component =>
  class Comp extends React.Component {
    componentDidMount() {
      this.props.didMount();
    }
    render() {
      return <Component {...this.props} />;
    }
  };

export default withDidMount;
