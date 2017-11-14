import AppNavigator from "../../navigation/AppNavigator";
import { NavigationActions } from "react-navigation";

const initialState = AppNavigator.router.getStateForAction(
  NavigationActions.init()
);

export default function navigationReducer(state = initialState, action) {
  const nextState = AppNavigator.router.getStateForAction(action, state);
  return nextState || state;
}
