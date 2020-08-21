import React, { StrictMode, Component } from 'react'
import Nav from '../../components/Nav/Nav'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

class Site extends Component {
  render () {
    return (
      <StrictMode>
        <Header>
          <Nav />
        </Header>
        <Footer />
      </StrictMode>
    )
  }
}

export default Site
