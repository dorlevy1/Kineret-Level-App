import React from 'react'
import './Cliekers.css'
const clickers = props => {
  return (
    <div className='z-index'>
      <div id='right'>{props.arrowR}</div>
      <div onClick={props.left} className='opacity-left'>
        {props.arrowL}{' '}
      </div>
      <div onClick={props.right} className='opacity-right'>
        {props.arrowR}{' '}
      </div>
      <div id='left'>{props.arrowL} </div>
    </div>
  )
}

export default clickers
