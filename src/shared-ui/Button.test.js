import React from "react";
import Button from "./Button";
import renderer from "react-test-renderer";

describe("Button", () => {
  it("Button renders correctly with label", () => {
    const tree = renderer.create(<Button label="OK" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Button renders correctly without label", () => {
    const tree = renderer.create(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
