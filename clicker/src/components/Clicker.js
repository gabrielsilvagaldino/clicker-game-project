import React from "react";
import store from "../redux";
import { connect } from "react-redux";

class Clicker extends React.Component {

  handleOnClick = () => {
    const info = store.getState()
    const action = { type: 'CLICK_BUTTON', payload: info.clickReducer.clickValue }
    this.props.dispatch(action)
    localStorage.setItem('totalValue', info.clickReducer.totalValue + 1);
  }
  render() {
    return(
      <div>
        <p>{ store.getState().clickReducer.totalValue } cortes</p>
        <button
        type="button"
        onClick={this.handleOnClick}
        >
        BOTAO
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(Clicker);
