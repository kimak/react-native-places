import initialStates from "../initialStates";
import actionsTypes from "../actionTypes";

function places(state = initialStates.places, action) {
  switch (action && action.type) {
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
      return {
        ...state,
        list: state.list.map(
          todo =>
            todo.id === action.id ? { ...todo, visited: !todo.visited } : todo
        )
      };
    default:
      return state;
  }
}

export default places;
