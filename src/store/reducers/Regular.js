import * as actionType from '../actions/actionType'
const initialState = {
  fullDate: '',
  meters: '',
  dayName: '',
  amount: null,
  yesterday: null
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
    default:
      return state
  }
}

export default regular
