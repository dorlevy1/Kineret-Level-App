import * as actionType from '../actions/actionType'
const initialState = {
  total: [],
  fullDate: '',
  meters: '',
  dayName: '',
  amount: null,
  yesterday: null,
  level: null
}

const regular = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_CURRENT:
      return {
        ...state,
        fullDate: action.date,
        meters: action.meter,
        dayName: action.day
      }
    case actionType.SET_DIFFERENCE_AMOUNT:
      return {
        ...state,
        amount: action.amount,
        yesterday: action.yesterday,
        currentLevel: action.currentLevel
      }

    case actionType.SET_LEVELS:
      return {
        ...state,
        total: action.total,
        level: action.level
      }
    default:
      return state
  }
}

export default regular
