import React, { StrictMode } from 'react'
import Links from './Links/Links'
import './Nav.css'
const nav = props => {
  return (
    <StrictMode>
      <nav className='Nav'>
        <Links />
      </nav>
    </StrictMode>
  )
}

export default nav
