import { combineReducers } from "redux";

const INITIAL_STATE = {}

const clickerReducer = (state = INITIAL_STATE, action) => {
  return state;
}

const rootReducer = combineReducers({
  clickerReducer,
})

export default rootReducer;
