import * as actionType from './actionType'
import axios from 'axios'
let total = []
let copydTotal = []
export const setCurrentData = (fullDate, meters, dayName) => {
  return {
    type: actionType.SET_CURRENT,
    date: fullDate,
    meter: meters
  }
}
export const setMoreDates = (
  date,
  meter,
  amount,
  dayBefore,
  currentLevel,
  dayName
) => {
  return {
    type: actionType.SET_MORE_DATES,
    date: date,
    meter: meter,
    amount: amount,
    yesterday: dayBefore,
    currentLevel: currentLevel,
    day: dayName
  }
}

export const initCurrentData = id => {
  return dispatch => {
    axios
      .get(
        'https://data.gov.il/api/3/action/datastore_search?include_total=true&resource_id=2de7b543-e13d-4e7e-b4c8-56071bc4d3c8&limit=0'
      )
      .then(res => {
        let r = res.data.result._links.start.split('limit=0&').join('')
        axios
          .get('https://data.gov.il' + r + '&limit=' + res.data.result.total)
          .then(res => {
            total = total.concat(...res.data.result.records)
            copydTotal = copydTotal.concat(...res.data.result.records)
            let date = res.data.result.records[0].Survey_Date.split('T')
              .splice(0, 1)
              .join('')
              .split('-')
              .reverse()
              .join('.')
            let meter = Math.abs(
              +res.data.result.records[0].Kinneret_Level
            ).toFixed(2)
            dispatch(setCurrentData(date, meter))
          })
      })
  }
}

export const seeBackward = id => {
  return dispatch => {
    total = total.sort(function (a, b) {
      return a._id - b._id
    })
    let output = total
      .sort((a, b) => a - b)
      .filter(el => {
        return el._id === id
      })

    output
      .sort((a, b) => a - b)
      .map(el => {
        let dayIndex = new Date(el.Survey_Date).getDay()
        return dispatch(
          setMoreDates(
            el.Survey_Date.split('T')
              .splice(0, 1)
              .join('')
              .split('-')
              .reverse()
              .join('.'),
            +Math.abs(+el.Kinneret_Level).toFixed(2),
            (total[id].Kinneret_Level - total[id + 1].Kinneret_Level).toFixed(
              3
            ),
            total[id].Survey_Date.split('T')
              .splice(0, 1)
              .join('')
              .split('-')
              .reverse()
              .join('.'),
            total[id].Kinneret_Level,
            dayIndex
          )
        )
      })
  }
}
