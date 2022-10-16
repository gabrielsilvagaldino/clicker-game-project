import React from "react";
import { connect } from "react-redux";
import data from "./upgrades/mock";
import store from "../redux";
import { addUpgrade, upgradeBuff } from "../redux/actions";

class Upgrades extends React.Component {

  componentDidMount() {
    console.log(this.props.state);
  }

  hadleOnClick = (upgrade) => {
    const { dispatch } = this.props
    console.log(this.props);
    dispatch(upgradeBuff(upgrade))
    dispatch(addUpgrade(upgrade))
  }
  render() {
    const { todosUpgrades } = this.props
    return(
      <div>
        {todosUpgrades.map((e) => (
          <button
            type="button"
            value={ e.preco }
            disabled={ e.preco > store.getState().clicker.totalValue ? true : false}
            onClick={ () => this.hadleOnClick(e) }
          >
            {e.nome}
          </button>
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
 estado: state,
 todosUpgrades: state.upgrades.todosOsUpgrades,
})

export default connect(mapStateToProps)(Upgrades);
