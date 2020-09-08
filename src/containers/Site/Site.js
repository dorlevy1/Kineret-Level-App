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

  show = (e) => {
    e.preventDefault();

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
            <Info/>
          ) : (
            ''
          )}
        </Header>
      </StrictMode>
    )
  }
}
export default Site
