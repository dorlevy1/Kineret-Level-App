import React from 'react'
import './Links.css'
import Link from './Link/Link'
const links = props => {
  const links = [
    { linkTo: '/', value: 'Home' },
    { linkTo: '/create', value: 'Create your own Resume' },
    { linkTo: '/about', value: 'About us' },
    { linkTo: '/templates', value: 'Templates for use' },
    { linkTo: '/contact', value: 'Contact' }
  ]
  const showLinks = links.map(link => {
    return (
      <Link key={link.value} linkTo={link.linkTo}>
        {link.value}
      </Link>
    )
  })
  return (
    <div>
      <ul className='Ul'>{showLinks}</ul>
    </div>
  )
}

export default links
