import React, { StrictMode } from 'react'
import style from './Header.module.css'
const header = props => {
  return (
    <div className={style.Bgc}>
      <StrictMode>{props.children}</StrictMode>
    </div>
  )
}

export default header
