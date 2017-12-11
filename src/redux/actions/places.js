import actionTypes from "../actionTypes";

/* action creator used by redux-thunk middleware */
export function fetchPlaces() {
  return dispatch => {
    dispatch({ type: actionTypes.FETCH_PLACES_REQUEST });

    fetch("https://api.myjson.com/bins/1btqrr")
      .then(response => {
        return response.json();
      })
      .then(payload => {
        dispatch({ type: actionTypes.FETCH_PLACES_SUCCESS, payload });
      })
      .catch(payload => {
        dispatch({ type: actionTypes.FETCH_PLACES_ERROR, payload });
      });
  };
}

export function togglePlace(id) {
  return { type: actionTypes.TOGGLE_PLACE, id };
}

export function addPlace(label) {
  return { type: actionTypes.ADD_PLACE, label };
}

export function updateFilter(filter) {
  return { type: actionTypes.SET_FILTER, filter };
}
