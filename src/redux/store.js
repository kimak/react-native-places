import { combineReducers, createStore } from "redux";
import places from "./reducers/places";

let reducer = combineReducers({ places });
let store = createStore(reducer);

export default store;
