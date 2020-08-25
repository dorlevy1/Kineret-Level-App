import React from 'react'
import { Bar, Line, Pie } from 'react-chartjs-2'

const datas = props => {
  let datasets = [
    {
      label: 'מי הכנרת',
      yAxisID: 'y-axis-0',

      fill: true,
      lineTension: 0.1,
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 5,
      pointHitRadius: 10,
      strokeColor: 'rgba(151,187,205,1)',
      backgroundColor: props.checkbackgrounds,
      data: props.levels
    }
  ]

  let options = {
    scales: {
      xAxes: [
        {
          display: props.shows,
          gridLines: {
            display: false
          }
        }
      ],
      yAxes: [
        {
          display: props.shows,
          gridLines: {
            display: true
          },
          ticks: {
            display: true
          }
        }
      ]
    },
    tooltips: {
      enabled: true,
      mode: 'label'
    },
    legend: {
      display: true
    },

    layout: {
      padding: {
        top: 20,
        left: 5,
        right: 5,
        bottom: 25
      }
    }
  }
  console.log(options)
  return (
    <props.selectchart
      data={{
        labels: props.labelchart,
        borderColor: '#fffff',
        checkBackground: props.checkbackgrounds,
        datasets: datasets
      }}
      options={options}
    />
  )
}

export default datas
