import React, { PureComponent } from 'react'
import { Bar, Line, Pie } from 'react-chartjs-2'
import { connect } from 'react-redux'
import { DateRangePicker } from '@progress/kendo-react-dateinputs'

import Datas from './dataChart'
import '@progress/kendo-theme-default/dist/all.css'
import './chart.css'
import * as funcType from '../../store/index'
class Chart extends PureComponent {
  state = {
    setChart: Line,
    value: {
      start: new Date(),
      end: new Date()
    }
  }
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
      this.props.onShowFullYear(e.target.value)
    }
    if (e.target.value.length < 1) {
      this.props.onInitDataKineret()
    }
  }

  handleChange = e => {
    this.setState({ value: e.target.value })
    let start = [e.target.value]
    let end = [e.target.value]
    start = start[0].start
      .toLocaleDateString('he-IL', {
        day: '2-digit',
        year: 'numeric',
        month: 'numeric'
      })
      .replace('.', '/')
      .replace('.', '/')
    this.props.onshowBetweenDates(start, end)
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
      <React.StrictMode>
        <div className='flex-row'>
          <div className='align'>
            <div className='wrapper-changing'>
              <div className='changing' onClick={this.changeToBar}>
                Change To Bar
              </div>
              {/* <div className='changing' onClick={this.changeToPai}>
              Change To Pie
            </div> */}
              <div className='changing' onClick={this.changeToLine}>
                Change To Line
              </div>

              <div>
                <input
                  type='text'
                  placeholder='Full Year information(2015, example)'
                  onChange={e => this.showFullYear(e)}
                />
              </div>
              <DateRangePicker
                value={this.state.value}
                format='dd.M.yyyy'
                onChange={this.handleChange}
              />
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
        <div style={{ textAlign: 'center' }}>
          <h2>Created By Dor Dylan Levy </h2>
          <h3>
            <a href='http://dordl.com'>DORDL.COM</a>
            <div style={{ fontSize: '16px' }}>
              <p>Created with React / Redux</p>
              <p>Rsuite / Chart-Js2</p>
            </div>
          </h3>
        </div>
      </React.StrictMode>
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
    onShowFullYear: e => dispatch(funcType.showFullYear(e)),
    onshowBetweenDates: (start, end) =>
      dispatch(funcType.chooseRangeDate(start, end))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chart)
