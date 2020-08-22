import React, { StrictMode } from 'react'
import './Header.css'
const header = props => {
  return (
    <div className='Bgc'>
      <div className='Container'>
        <StrictMode>{props.children}</StrictMode>
      </div>
    </div>
  )
}

export default header
