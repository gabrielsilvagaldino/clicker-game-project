import { combineReducers } from "redux";
import clicker from "./clicker";
import upgrades from "./upgrades";

const rootReducer = combineReducers({
  clicker, upgrades
})

export default rootReducer