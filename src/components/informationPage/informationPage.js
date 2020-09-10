import React, { Component } from 'react'
import './informationPage.css'
import * as funcType from '../../store/index'
import { connect } from 'react-redux'
import Levels from './Levels/Levels'
import Clickers from './Clickers/Clickers'
class Information extends Component {
  state = {
    days: ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת'],
    redFlag: { upper: -208.8, lower: -213.0 },
    num: 1
  }

  componentDidMount () {
    console.log('************************************')
    console.log('Welcome to KINNERET PROJECT')
    console.log('************************************')
    console.log('Made with React & Redux')
    console.log('************************************')
    console.log('Dor Dylan Levy', 'http://dordl.com')
    console.log('************************************')
    console.log('dordl105095@gmail.com', '0525938898')
    console.log('************************************')

    this.props.onCurrentData()
  }

  componentDidUpdate (prevProps, prevState) {
    if (
      prevState.yesterday !== this.props.yesterday ||
      prevState.current !== this.props.current ||
      prevState.amount !== this.props.amount ||
      prevState.level !== this.props.level
    ) {
      this.props.laal(this.state.num)
    } else {
      console.log('Please check your internet connection ...')
    }
  }
  upper () {
    this.setState({ num: this.state.num + 1 })
  }
  lower () {
    this.setState({ num: this.state.num - 1 })
  }
  render () {
    let description = null
    /////////////////////////
    let upperAmount = (
      Math.abs(+this.props.current) - Math.abs(+this.state.redFlag.upper)
    ).toFixed(2)
    /////////////////////////
    let lowerAmount = (
      Math.abs(+this.state.redFlag.lower) - Math.abs(+this.props.current)
    ).toFixed(2)
    ////////////////////////
    if (this.props.amount && this.props.yesterday && this.props.current) {
      description = (
        <div className='z-index description'>
          <p>
            ירידה של {this.props.amount} מ' מ {this.props.yesterday}{' '}
          </p>{' '}
          <p> חסרים {upperAmount} מ' לקו האדום העליון </p>{' '}
          <p> המפלס גבוה ב {lowerAmount} מ' מהקו האדום התחתון </p>{' '}
        </div>
      )
    } else {
      description = 'Loading'
    }
    ////l///////////////////
    let arrowL = <i className='arrow-left fas fa-arrow-left'></i>
    let arrowR = <i className='arrow-left fas fa-arrow-right'></i>

    return (
      <div className='Information'>
        <Clickers
          left={() => {
            this.lower()
          }}
          right={() => {
            this.upper()
          }}
          arrowL={arrowL}
          arrowR={arrowR}
        />
        <div className='z-index title'>
          <h1> {this.props.date} </h1>{' '}
          <p> יום {this.state.days[this.props.day]} </p>{' '}
        </div>{' '}
        <div className='z-index box-meter'>- {this.props.meter} מטר</div>
        {description}
        <Levels
          lower={Math.floor(Math.abs(this.state.redFlag.lower))}
          upper={Math.floor(Math.abs(this.state.redFlag.upper))}
          levelToday={Math.round(Math.abs(this.props.current))}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    total: state.regular.total,
    date: state.regular.fullDate,
    meter: state.regular.meters,
    day: state.regular.dayName,
    amount: state.regular.amount,
    yesterday: state.regular.yesterday,
    current: state.regular.currentLevel,
    level: state.regular.level
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onCurrentData: id => dispatch(funcType.initCurrentData(id)),
    laal: id => dispatch(funcType.seeBackward(id))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Information)
