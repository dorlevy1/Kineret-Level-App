import React, { Component } from 'react'
import './informationPage.css'
import * as funcType from '../../store/index'
import { connect } from 'react-redux'

class Information extends Component {
  state = {
    days: ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת'],
    redFlag: { upper: -208.8, lower: -213.0 }
  }

  
  
  componentDidMount () {
    this.props.onCurrentData()
    console.log('didmount');
  }
  
  componentDidUpdate(prevProps, prevState){
    console.log(prevProps,prevState);
    if (prevState.yesterday !== this.props.yesterday ||
        prevState.current !== this.props.current     ||
        prevState.amount !== this.props.amount
        ) {
      this.props.showDifferentData(this.props.date)
      console.log('did update');
        }else{
          console.log('didnt update');
        }
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
    if(this.props.amount && this.props.yesterday && this.props.current){
      description = (
        <div className='description'>
        <p>
          ירידה של {this.props.amount} מ' מ{this.props.yesterday}
        </p>
          <p>חסרים {upperAmount} מ' לקו האדום העליון</p>
          <p>המפלס גבוה ב{lowerAmount} מ' מהקו האדום התחתון </p>
      </div>
      )
    }else{
      description = 'Loading'
    }
    ///////////////////////
    

    return (
      <div className='Information'>
        <div className='title'>
          <h1>{this.props.date}</h1>
          <p>יום {this.state.days[this.props.day]}</p>
        </div>
        <div className='box-meter'>{this.props.meter} מטר</div>
    {description}
    
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    date: state.regular.fullDate,
    meter: state.regular.meters,
    day: state.regular.dayName,
    amount: state.regular.amount,
    yesterday: state.regular.yesterday,
    current: state.regular.currentLevel
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onCurrentData: () => dispatch(funcType.initCurrentData()),
    showDifferentData: date => dispatch(funcType.differnceBetweenDates(date))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Information)
