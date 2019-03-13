import places from "./places";
import actionTypes from "../actionTypes";

describe("places reducer", () => {
  it("snapshot test must return initialState", () => {
    expect(places()).toMatchSnapshot();
  });

  it(`snapshot test on action ${actionTypes.ADD_PLACE}`, () => {
    expect(
      places(undefined, { type: actionTypes.ADD_PLACE, label: "Paris" })
    ).toMatchSnapshot();
  });

  it(`snapshot test on action ${actionTypes.TOGGLE_PLACE}`, () => {
    expect(
      places(
        { list: [{ id: 0, label: "Paris", visited: false }] },
        {
          type: actionTypes.TOGGLE_PLACE,
          index: 0
        }
      )
    ).toMatchSnapshot();
  });
});
