import * as actionType from '../actions/actionType'
const initialState = {
  fullDate: '',
  meters: '',
  dayName: '',
  total: [],
  amount: null,
  yesterday: null,
  level: null,
  currentLevel: null
}

const regular = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_CURRENT:
      return {
        ...state,
        fullDate: action.date,
        meters: action.meter
      }

    case actionType.SET_MORE_DATES:
      return {
        ...state,
        fullDate: action.date,
        meters: action.meter,
        amount: action.amount,
        yesterday: action.yesterday,
        currentLevel: action.currentLevel,
        dayName: action.day
      }
    default:
      return state
  }
}

export default regular
