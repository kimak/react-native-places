import initialStates from "../initialStates";
import actionsTypes from "../actionTypes";

function places(state = initialStates.places, action) {
  switch (action.type) {
    case actionsTypes.FETCH_PLACES_REQUEST:
      return { ...state, isLoading: true };
    case actionsTypes.FETCH_PLACES_SUCCESS:
      return { ...state, list: action.payload, isLoading: false };
    case actionsTypes.FETCH_PLACES_ERROR:
      return { ...state, error: action.payload, isLoading: false };
    case actionsTypes.ADD_PLACE:
      const list = state.list.concat();
      list.unshift({
        label: action.label,
        visited: false,
        id: list.length
      });
      return { ...state, list };
    case actionsTypes.TOGGLE_PLACE:
      const newList = state.list.concat(); // equal-to [...state]
      newList[action.index].visited = !newList[action.index].visited;
      return { ...state, list: newList };
    default:
      return state;
  }
}

export default places;
