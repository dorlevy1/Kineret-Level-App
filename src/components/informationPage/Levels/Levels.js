import React from 'react'
import { connect } from 'react-redux'
import * as funcType from '../../../store/index'

import './Levels.css'

const levels = props => {
  let rows = props.total.map(el => {
    return Math.round(Math.abs(+el.Kinneret_Level))
  })

  //   rows = rows.sort()
  //   rows = rows.filter((level, index, self) => {
  //       return self.indexOf(level) === index
  //     })
  //     let rowL = rows.length

  //     let size = props.levelToday < props.upper ? <td></td> : ''
  //   let newRows = rows.map((el, index) => {
  //     if (index === rowL / 2) {
  //       return (
  //         <tr id={props.lower}>
  //           <td className='Red'></td>
  //           <td></td>
  //         </tr>
  //       )
  //     }
  //     return (
  //       <tr id={el}>
  //         <td colSpan='2'></td>
  //       </tr>
  //     )
  //   })
  let h = ''
  switch (props.levelToday) {
    case 209:
      h = '360px'
    case 208:
      h = '355px'
      break
    case 210:
      h = '340px'
      break
    case 211:
      h = '310px'
      break
    case 212:
      h = '280px'
      break
    case 213:
      h = '200px'
      break
    case 214:
      h = '140px'
      break
    case 215:
      h = '800px'
      break
    default:
      h = '360px'
  }
  return (
    // <table className='Table'>
    //   <tbody>
    //     <tr id={props.upper}>
    //       <td className='Red'></td>
    //       {size}
    //     </tr>
    //     {newRows}
    //   </tbody>
    // </table>
    <div style={{ direction: 'rtl' }}>
      <div id='upper' className='Red'></div>
      <div id='level' style={{ height: h }} className='CurrentLevel'></div>
      <div id='lower' className='Red'></div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    total: state.regular.total,

    date: state.regular.fullDate,
    level: state.regular.level
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFilter: () => dispatch(funcType.filterLevels())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(levels)
