import React from 'react'
import './Button.css'
const button = props => {
  return (
    <button onClick={props.click} className='Button'>
      {props.val}
    </button>
  )
}

export default button
