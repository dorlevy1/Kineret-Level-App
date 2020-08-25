import React, { Component } from 'react'
import * as d3 from 'd3'
import { Bar, Line, Pie } from 'react-chartjs-2'
import data from '../../containers/Site/data.csv'
import Datas from './dataChart'
import './chart.css'
class Chart extends Component {
  state = {
    label: [],
    level: [],
    backgroundColor: [],
    labelPie: null,
    levelPie: null,
    setChart: Line
  }
  newBar = []
  componentWillMount () {
    const row = d => {
      let stringLevel = d.Kinneret_Level.toString()
      d.Kinneret_Level = stringLevel
      return d
    }

    d3.csv(data, row).then(res => {
      const getRandomColor = () => {
        let letters = '0123456789ABCDEF'
        let color = ''
        for (var i = 0; i < 1; i++) {
          color += letters[Math.floor(Math.random() * 16)]
        }
        return color
      }
      res.map(el => {
        let check = el.Survey_Date.split('/')
        check = check.slice(2).toString()
        if (
          el.Survey_Date === '01/1/' + check ||
          el.Survey_Date === '01/4/' + check ||
          el.Survey_Date === '01/7/' + check ||
          el.Survey_Date === '01/12/' + check
        ) {
          let newEl = el.Survey_Date.toString().replace('01/', '')
          let result = '#624e1' + getRandomColor().toString()
          this.setState(state => {
            const label = state.label.concat(newEl)
            const level = state.level.concat(el.Kinneret_Level).reverse()
            const backgroundColor = state.backgroundColor.concat(result)
            return {
              label,
              level,
              backgroundColor
            }
          })
        }
        return true
      })
    }, [])
  }

  changeToPai = () => {
    if (this.state.setChart === Line || this.state.setChart === Bar) {
      let updatedArr = []
      let levelArr = []
      if (this.state.levelPie === null && this.state.labelPie === null) {
        levelArr = this.state.level.map(lvl => {
          let level = lvl.split('.')
          level = level.splice(0, 1).toString()
          return level
        })
        updatedArr = this.state.label.map(el => {
          let ele = el.split('/')
          ele = ele.splice(1).toString()
          return ele
        })
        levelArr = levelArr.filter(function (item, index, inputArray) {
          return inputArray.indexOf(item) === index
        })
        updatedArr = updatedArr.filter(function (item, index, inputArray) {
          return inputArray.indexOf(item) === index
        })
        this.setState({
          setChart: Pie,
          labelPie: updatedArr,
          levelPie: levelArr
        })
      } else {
        this.setState({
          setChart: Pie
        })
      }
    }
  }
  changeToLine = () => {
    if (this.state.setChart === Bar || this.state.setChart === Pie) {
      const arr = this.state.level.map(l => -+l)
      this.setState({ setChart: Line, level: arr })
    }
  }
  changeToBar = () => {
    if (this.state.setChart === Line || this.state.setChart === Pie) {
      this.setState({ setChart: Bar })
      const arr = this.state.level.map(l => {
        l = l.toString().replace('-', '')
        return l
      })
      this.setState({ level: arr })
    }
  }
  render () {
    let labelChart =
      this.state.setChart === Pie ? this.state.labelPie : this.state.label
    let levelChart =
      this.state.setChart === Pie ? this.state.levelPie : this.state.level
    let checkBackground =
      this.state.setChart === Line ? '#824e1e3b' : this.state.backgroundColor
    let display = this.state.setChart === Pie ? false : true

    return (
      <div>
        <div className='flex-row between'>
          <div className='changing' onClick={this.changeToBar}>
            Change To Bar
          </div>
          <div className='changing' onClick={this.changeToPai}>
            Change To Pai
          </div>
          <div className='changing' onClick={this.changeToLine}>
            Change To Line
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

export default Chart
