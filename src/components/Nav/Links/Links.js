import React from 'react'
import './Links.css'
import Link from './Link/Link'
const links = props => {
  return (
    <div>
      <ul className='Ul'>
        <Link linkTo='dordl.com'>Home</Link>
        <Link linkTo='dordl.com'>Create your own Resume</Link>
        <Link linkTo='dordl.com'>About us</Link>
        <Link linkTo='dordl.com'>Template for use</Link>
        <Link linkTo='dordl.com'>Contact</Link>
      </ul>
    </div>
  )
}

export default links
