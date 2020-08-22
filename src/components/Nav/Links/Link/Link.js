import React from 'react'
import { NavLink } from 'react-router-dom'
import './Link.css'
const link = props => {
  return (
    <li className='Li'>
      <NavLink exact activeClassName='active' to={props.linkTo}>
        {props.children}
      </NavLink>
    </li>
  )
}

export default link
