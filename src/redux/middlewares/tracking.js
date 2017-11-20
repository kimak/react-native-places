import { NavigationActions } from "react-navigation";
import { getCurrentRouteName } from "../../navigation";

const trackingMiddleware = store => next => action => {
  if (
    action.type !== NavigationActions.NAVIGATE &&
    action.type !== NavigationActions.BACK
  ) {
    return next(action);
  }

  const currentScreen = getCurrentRouteName(store.getState().navigation);
  const result = next(action);
  const nextScreen = getCurrentRouteName(store.getState().navigation);
  if (nextScreen !== currentScreen) {
    // TrackingManager.trackScreenView(nextScreen);
    console.log("track ", nextScreen);
  }
  return result;
};
export default trackingMiddleware;
