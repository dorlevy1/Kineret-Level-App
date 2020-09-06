import React, { StrictMode, Component } from 'react'
import Header from '../../components/Header/Header'
// import Chart from '../../components/chart/chart'
import Info from '../../components/informationPage/informationPage'
import Intro from '../../components/intro/intro'

class Site extends Component {
  state = {
    shows: true,
    display: 'block'
  }

  show = () => {
    this.setState({ shows: false })
  }
  render () {
    if (!this.state.shows) {
      setTimeout(() => {
        return this.setState({ display: 'none' })
      }, 600)
    }
    return (
      <StrictMode>
        <div style={{ display: this.state.display }}>
          <Intro shows={this.state.shows} show={this.show} />
        </div>
        <Header>
          {!this.state.shows ? (
            <Info
              title={'06/09/2020'}
              day={'יום ראשון'}
              valMeter={'200'}
              defferenceMeterLastDay={'15'}
              yesterdayDate={'15/10'}
              lowerMeterUpRed={'200'}
              greaterFromDownRed={'200'}
            />
          ) : (
            ''
          )}
        </Header>
      </StrictMode>
    )
  }
}
export default Site
