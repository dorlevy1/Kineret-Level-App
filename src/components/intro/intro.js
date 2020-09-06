import React from 'react'
import './intro.css'
import Button from '../UI/Button/Button'

const intro = props => {
  return (
    <div className={props.shows ? 'Intro' : 'Intro Closes'}>
      <div className='Logos'></div>
      <div className='Buttons'>
        <Button click={props.show} val='מצב המפלס' />
        <Button click={props.show} val='עדכנונים שוטפים' />
      </div>
    </div>
  )
}

export default intro
