import { combineReducers } from "redux";

const INITIAL_STATE = {
  clickValue: 1,
  passiveEarning: 0,
  totalValue: 0,
}

const clickReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CLICK_BUTTON':
      return {
        clickValue: 1,
        passiveEarning: 0,
        totalValue: state.totalValue + action.payload
      }
  
    default:
      return state
  }
}

const rootReducer = combineReducers({
  clickReducer,
})

export default rootReducer;
