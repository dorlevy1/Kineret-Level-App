import * as actionType from './actionType'
const initialState = {
  data: {
    label: [],
    level: []
  },
  backgroundColor: [],
  labelPie: [],
  levelPie: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_KINERET:
      return {
        ...state,
        data: {
          ...state.data,
          label: action.label,
          level: action.level
        },
        backgroundColor: action.backgroundColor
      }
    case actionType.SET_PIE:
      return {
        ...state,
        labelPie: action.labelPie,
        levelPie: action.levelPie
      }
    case actionType.CHOOSE_BETWEEN_DAY_TO_DAY:
      return {
        ...state,
        data: {
          ...state.data,
          label: action.label,
          level: action.level
        }
      }
    default:
      return state
  }
}

export default reducer
