const inittialState = {
  totalValue: 0,
  valorPorClique: 1
}

const clicker = (state = inittialState, action) => {
  switch (action.type) {
    case 'ADD_ON_CLICK':
      return { ...state, totalValue: state.totalValue + state.valorPorClique }
    
    case 'TOTAL_VALUE':
      return { ...state, totalValue: action.payload }

    case 'UPGRADE_BUFF':
      return { ...state, totalValue: state.totalValue - action.payload.preco, valorPorClique: state.valorPorClique * action.payload.buff}

    case 'RESET':
      return { totalValue: 0, valorPorClique: 1 }

    default:
      return state
  }
}

export default clicker