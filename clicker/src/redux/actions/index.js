const ADD_ON_CLICK = 'ADD_ON_CLICK'
const TOTAL_VALUE = 'TOTAL_VALUE'
const UPGRADE_COMPRADO = 'UPGRADE_COMPRADO'
const UPGRADE_BUFF = 'UPGRADE_BUFF'
const RESET = 'RESET'

export const addTotalValue = (carga) => ({
  type: TOTAL_VALUE, payload: carga
})

export const addOnClick = () => ({
  type: ADD_ON_CLICK,
})

export const addUpgrade = (carga) => ({
  type: UPGRADE_COMPRADO, payload: carga
})

export const upgradeBuff = (carga) => ({
  type: UPGRADE_BUFF, payload: carga
})

export const reset = () => ({
  type: RESET
})