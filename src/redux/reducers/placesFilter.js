// the filter reducer receive all actions and return a new filter state
function placesFilter(state = "all", action) {
  if (action.type === "SET_FILTER") {
    return action.filter;
  } else {
    return state;
  }
}
export default placesFilter;
