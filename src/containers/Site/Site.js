import React, { StrictMode, Component } from 'react'
import Header from '../../components/Header/Header'
// import Chart from '../../components/chart/chart'
import '../../components/intro/intro.css'
import Info from '../../components/informationPage/informationPage'
import Intro from '../../components/intro/intro'

class Site extends Component {
  state = {
    shows: true,
    display: 'block'
  }

  show = e => {
    e.preventDefault()

    this.setState({ shows: false })
  }
  render () {
    if (!this.state.shows) {
      setTimeout(() => {
        return this.setState({ display: 'none' })
      }, 600)
    }

    if (window.innerWidth >= 415) {
      return (
        <div
          style={{ textAlign: 'center', color: 'white', paddingTop: '50px' }}
        >
          <h1>גרסת מחשב בפיתוח</h1>
          <p>נא להכנס דרך הפלאפון</p>

          <div
            className='Logos'
            style={{ height: '200px', width: '20%', marginTop: '100px' }}
          ></div>
        </div>
      )
    } else {
      return (
        <StrictMode>
          <div style={{ display: this.state.display }}>
            <Intro shows={this.state.shows} show={this.show} />
          </div>
          <Header>{!this.state.shows ? <Info /> : ''}</Header>
        </StrictMode>
      )
    }
  }
}
export default Site
