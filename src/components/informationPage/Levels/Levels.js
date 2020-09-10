import React from 'react'
import { connect } from 'react-redux'
import LevelCase from './levelsCase'
import './Levels.css'

const levels = props => {
  let rows = props.total.map(el => {
    return Math.round(Math.abs(+el.Kinneret_Level))
  })

  rows = rows.sort()
  rows = rows.filter((level, index, self) => {
    return self.indexOf(level) === index
  })
  let rowL = rows.length

  return (
    <div style={{ direction: 'rtl' }}>
      <div id='upper' className='Red'></div>
      <LevelCase
        firstRow={rows[0]}
        lastRow={rows[rowL - 1]}
        levelToday={props.levelToday}
      />

      <div id='lower' className='z-index Red'></div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    total: state.regular.total
  }
}

export default connect(mapStateToProps)(levels)
