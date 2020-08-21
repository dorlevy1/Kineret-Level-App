import React from 'react'
import './Link.css'
const link = props => {
  return (
    <li className='Li'>
      <a href={props.linkTo}>{props.children}</a>
    </li>
  )
}

export default link
