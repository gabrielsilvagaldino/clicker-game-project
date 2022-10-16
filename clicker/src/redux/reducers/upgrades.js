import data from "../../components/upgrades/mock"

const inittialState = {
	todosOsUpgrades: data,
	upgradesComprados: []
}

const upgrades = (state = inittialState, action) => {
	switch (action.type) {
		case 'UPGRADE_COMPRADO':
			const a = inittialState.todosOsUpgrades.findIndex((e) => e.nome === action.payload.nome)
			delete inittialState.todosOsUpgrades[a]
			inittialState.todosOsUpgrades.shift()
			return {...state, upgradesComprados: [...state.upgradesComprados, action.payload]}
		
		case 'RESET':
			return { todosOsUpgrades: data, upgradesComprados: [] }
	
		default:
			return state
	}
}

export default upgrades;
