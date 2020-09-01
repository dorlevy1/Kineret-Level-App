import * as actionType from './actionType'
import axios from 'axios'
let total = []
export const setKineret = (label, level, bgc, title) => {
  return {
    type: actionType.SET_KINERET,
    label: label,
    level: level,
    backgroundColor: bgc,
    title: title
  }
}
export const setBetweenDates = (label, level, bgc, title) => {
  return {
    type: actionType.CHOOSE_BETWEEN_DAY_TO_DAY,
    label: label,
    level: level,
    backgroundColor: bgc,
    title: title
  }
}

const getRandomColor = () => {
  let letters = '0123456789ABCDEF'
  let color = ''
  for (var i = 0; i < 1; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}
//Pie  !!--OPTION--!!

// export const setPie = (pieLabel, pieLevel) => {
//   return {
//     type: actionType.SET_PIE,
//     labelPie: pieLabel,
//     levelPie: pieLevel
//   }
// }
//END Pie  !!--OPTION--!!

export const initKineret = () => {
  return dispatch => {
    axios
      .get(
        'https://data.gov.il/api/3/action/datastore_search?include_total=true&resource_id=2de7b543-e13d-4e7e-b4c8-56071bc4d3c8'
      )
      .then(res => {
        axios
          .get(
            'https://data.gov.il' +
              res.data.result._links.start +
              '&limit=' +
              res.data.result.total
          )
          .then(res => {
            total = new Array()
            total = total.concat(res.data.result.records)
            res = res.data.result.records
            let label = []
            let level = []
            let bgc = []
            for (let index = 0; index < res.length; index++) {
              const el = res[index]

              let check = res[index].Survey_Date.split('-')
              check = check.slice(0, 1).toString()

              el.Survey_Date = el.Survey_Date.replace('-', '/')
                .replace('-', '/')
                .split('T')
                .splice(0, 1)

              el.Survey_Date = el.Survey_Date.toString()
              if (
                el.Survey_Date === check + '/01/01' ||
                el.Survey_Date === check + '/04/01' ||
                el.Survey_Date === check + '/07/01' ||
                el.Survey_Date === check + '/12/01'
              ) {
                label = label.concat(
                  el.Survey_Date.toString().replace('01/', '')
                )

                bgc = bgc.concat('#624e1' + getRandomColor().toString())
                level = level.concat(el.Kinneret_Level)
                dispatch(
                  setKineret(
                    label,
                    level,
                    bgc,
                    res[0].Survey_Date.split('/').slice(0, 1) +
                      '-' +
                      check +
                      ' תרשים'
                  )
                )
              }
            }
            return true
          })
      })
  }
}

//Pie  !!--OPTION--!!

// export const pieSelector = (defaultLevel, defaultLabel) => {
//   let updatedArr = []
//   let levelArr = []
//   levelArr = defaultLabel.map(lvl => {
//     let level = lvl.split('.')
//     level = level.splice(0, 1).toString()
//     return level
//   })
//   updatedArr = defaultLevel.map(el => {
//     let ele = el.split('/')
//     ele = ele.splice(1).toString()
//     return ele
//   })
//   levelArr = levelArr.filter(function (item, index, inputArray) {
//     return inputArray.indexOf(item) === index
//   })
//   updatedArr = updatedArr.filter(function (item, index, inputArray) {
//     return inputArray.indexOf(item) === index
//   })
//   return setPie(updatedArr, levelArr)
// }

// END Pie  !!--OPTION--!!

export const showFullYear = value => {
  return dispatch => {
    let surDate = []
    let bgc = []
    let kineretDate = []
    const getRandomColor = () => {
      let letters = '0123456789ABCDEF'
      let color = ''
      for (var i = 0; i < 1; i++) {
        color += letters[Math.floor(Math.random() * 16)]
      }
      return color
    }
    for (let index = 0; index < total.length; index++) {
      if (total[index].Survey_Date.includes(value)) {
        surDate = surDate.concat(total[index].Survey_Date)
        kineretDate = kineretDate.concat(total[index].Kinneret_Level)
        bgc = bgc.concat('#624e1' + getRandomColor().toString())

        dispatch(
          setKineret(
            surDate,
            kineretDate,
            bgc,
            surDate[0]
              .split('/')
              .splice(0, 1)
              .toString() + ' תרשים'
          )
        )
      }
    }
  }
}

export const chooseRangeDate = (start, end) => {
  return dispatch => {
    let f = []
    let l = []
    let startFromIndex = ''
    let EndIndex = ''
    let newEnd = null
    let newStart = null
    total.filter((el, index) => {
      if (end[0].end !== null) {
        newEnd = end[0].end
          .toLocaleDateString('en-GB')
          .split('/')
          .reverse()
          .join('/')
        newStart = start.split('/').reverse()
        newStart[1] = '0' + newStart[1]
        newStart = newStart.join('/')

        if (el.Survey_Date === newStart) {
          return (startFromIndex = +index)
        }
        if (el.Survey_Date === newEnd) {
          return (EndIndex = +index)
        }
      }
      return [startFromIndex, EndIndex]
    })
    for (let index = EndIndex; index < startFromIndex; index++) {
      l = l.concat(total[index].Kinneret_Level)
      f = f.concat(total[index].Survey_Date)
      dispatch(
        setBetweenDates(f, l, '#000050', newEnd + '-' + newStart + ' תרשים')
      )
    }
  }
}
