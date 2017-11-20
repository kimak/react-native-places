import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import places from "./reducers/places";
import placesFilter from "./reducers/placesFilter";
import navigation from "./reducers/navigation";
import trackingMiddleware from "./middlewares/tracking";

let reducer = combineReducers({
  places,
  placesFilter: placesFilter,
  navigation
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [thunk, trackingMiddleware];
let store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

export default store;
