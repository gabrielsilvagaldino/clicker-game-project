import React from "react";
// import store from "../redux/index";
import { connect } from "react-redux";
import { addOnClick, reset, addTotalValue } from "../redux/actions";

class Clicker extends React.Component {

  state = {
    valorTotal: 0,
    valorPorClique: 1,
  }

  componentDidMount() {
    const { dispatch } = this.props
    const nuvem = localStorage.getItem('totalValue')
    if (nuvem === null) {
      this.setState({ valorTotal: 0 })
    } else {
      dispatch(addTotalValue(Number(nuvem)))
    }
  }

  resetGame = () => {
    const { dispatch } = this.props
    dispatch(reset())
  }

  handleOnClick = () => {
    const { dispatch, totalValue } = this.props;
    const { valorPorClique } = this.state
    dispatch(addOnClick(valorPorClique))
    localStorage.setItem('totalValue', JSON.stringify(totalValue + 1) )
  }
  render() {
    const { totalValue } = this.props;
    return(
      <div>
        <p>{ totalValue } cortes</p>
        <button
        type="button"
        onClick={this.handleOnClick}
        >
        BOTAO
        </button>
        <button
          type="button"
          onClick={this.resetGame}
        >
          RESET
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  totalValue: state.clicker.totalValue
})

export default connect(mapStateToProps)(Clicker);
