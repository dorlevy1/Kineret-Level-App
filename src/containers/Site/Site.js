import React, { StrictMode, Component } from 'react'
import Header from '../../components/Header/Header'
import Chart from '../../components/chart/chart'

class Site extends Component {
  render () {
    return (
      <StrictMode>
        <Header>
          <Chart />
        </Header>
      </StrictMode>
    )
  }
}

export default Site
