import React, { Component } from 'react'
import { Bar, Line, Pie } from 'react-chartjs-2'
import Datas from './dataChart'
import './chart.css'
import { connect } from 'react-redux'
import * as funcType from '../../store/index'
class Chart extends Component {
  state = {
    setChart: Line,
    value: ''
  }
  newBar = []
  componentWillMount () {
    this.props.onInitDataKineret()
  }

  changeToPai = () => {
    if (this.state.setChart === Line || this.state.setChart === Bar) {
      this.props.onChoosePie(this.props.defaultLabel, this.props.defaultLevel)
      this.setState({
        setChart: Pie
      })
    }
  }
  changeToLine = () => {
    if (this.state.setChart === Bar || this.state.setChart === Pie) {
      this.setState({ setChart: Line })
    }
  }
  changeToBar = () => {
    if (this.state.setChart === Line || this.state.setChart === Pie) {
      this.setState({ setChart: Bar })
    }
  }
  showFullYear = e => {
    if (e.target.value.length > 3) {
      this.setState({ value: e.target.value })
      this.props.onShowFullYear(e.target.value)
    }
  }
  render () {
    let labelChart =
      this.state.setChart === Pie
        ? this.props.labelPie
        : this.props.defaultLabel
    let levelChart =
      this.state.setChart === Pie
        ? this.props.levelPie
        : this.props.defaultLevel
    let checkBackground =
      this.state.setChart === Line ? '#824e1e3b' : this.props.bgc
    let display = this.state.setChart === Pie ? false : true
    return (
      <div className='flex-row'>
        <div className='align'>
          <div className='wrapper-changing'>
            <div className='changing' onClick={this.changeToBar}>
              Change To Bar
            </div>
            <div className='changing' onClick={this.changeToPai}>
              Change To Pie
            </div>
            <div className='changing' onClick={this.changeToLine}>
              Change To Line
            </div>
            <div>
              <input type='text' onChange={e => this.showFullYear(e)} />
            </div>
          </div>
        </div>
        <Datas
          shows={display}
          checkbackgrounds={checkBackground}
          labelchart={labelChart}
          levels={levelChart}
          selectchart={this.state.setChart}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    defaultLabel: state.data.label,
    labelPie: state.labelPie,
    defaultLevel: state.data.level,
    levelPie: state.levelPie,
    bgc: state.backgroundColor
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onInitDataKineret: () => dispatch(funcType.initKineret()),
    onChoosePie: (level, label) => dispatch(funcType.pieSelector(level, label)),
    onShowFullYear: e => dispatch(funcType.showFullYear(e))
    // onShowByYear: () => dispatch({}),
    // onshowBetweenDates: () => dispatch({}),
    // onShowByDays: () => dispatch({})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chart)
