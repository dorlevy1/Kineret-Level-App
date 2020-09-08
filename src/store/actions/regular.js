import * as actionType from './actionType'
import axios from 'axios'
let total = []
export const setCurrentData = (fullDate, meters, dayName) => {
  return {
    type: actionType.SET_CURRENT,
    date: fullDate,
    meter: meters,
    day: dayName
  }
}

export const setDifferenceDates = (amount, dayBefore, currentLevel) => {
  return {
    type: actionType.SET_DIFFERENCE_AMOUNT,
    amount: amount,
    yesterday: dayBefore,
    currentLevel: currentLevel
  }
}

export const initCurrentData = () => {
  return dispatch => {
    axios
      .get(
        'https://data.gov.il/api/3/action/datastore_search?include_total=true&resource_id=2de7b543-e13d-4e7e-b4c8-56071bc4d3c8&limit=0'
      )
      .then(res => {
        let r= res.data.result._links.start.split('limit=0&').join('')
        axios
          .get(
            'https://data.gov.il' +
              r +
              '&limit=' +
              res.data.result.total
          )
          .then(res => {
            total = total.concat(res.data.result.records)
            let dayIndex = new Date(
              res.data.result.records[0].Survey_Date
            ).getDay()
            let date = res.data.result.records[0].Survey_Date.split('T').splice(
              0,
              1
            )
            let meter = Math.abs(
              +res.data.result.records[0].Kinneret_Level
            ).toFixed(2)
            dispatch(setCurrentData(date, meter, dayIndex))
          })
      })
  }
}

export const differnceBetweenDates = currentDate => {
  return dispatch => {
    // eslint-disable-next-line
    total.filter((date, index) => {
      if (date.Survey_Date.includes(currentDate)) {
        let newTotal = total.splice(index, index + 2)
        dispatch(
          setDifferenceDates(
            Math.abs(
              (newTotal[0].Kinneret_Level - newTotal[1].Kinneret_Level).toFixed(
                3
              )
            ),
            newTotal[1].Survey_Date.split('T').splice(0, 1),
            newTotal[0].Kinneret_Level
          )
        )
      }
    })
  }
}
