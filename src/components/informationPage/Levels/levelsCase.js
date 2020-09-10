import React from 'react'

const levelCase = props => {
  let h = 360

  switch (props.levelToday) {
    case props.firstRow:
      h = '730px'
      break
    case 208:
      h = '890px'
      break
    case 209:
      h = '920px'
      break
    case 210:
      h = '950px'
      break
    case 211:
      h = '1030px'
      break
    case 212:
      h = '1120px'
      break
    case 213:
      h = '1180px'
      break
    case 214:
      h = '1200px'
      break
    case 215:
      h = '1250px'
      break
    case props.lastRow:
      h = '1380px'
      break
    default:
      h = '1250px'
  }

  return (
    <div id='level' className='wrapper'>
      <div className='wave' style={{ height: h, transition: 'ease .5s' }}></div>
    </div>
  )
}

export default levelCase
