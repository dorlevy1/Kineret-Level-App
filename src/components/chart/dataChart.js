import React from 'react'
const datas = props => {
  let datasets = [
    {
      label: 'מי הכנרת',
      yAxisID: 'y-axis-0',

      fill: props.shows,
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
    // {
    //   label: 'קו אדום תחתון',

    //   fill: props.shows,
    //   lineTension: 0.1,
    //   borderColor: 'red',
    //   borderCapStyle: 'butt',
    //   borderDash: [],
    //   borderDashOffset: 0.0,
    //   borderJoinStyle: 'miter',
    //   pointBorderColor: 'red',
    //   pointBackgroundColor: '#fff',
    //   pointBorderWidth: 1,
    //   pointHoverRadius: 5,
    //   pointHoverBackgroundColor: 'red',
    //   pointHoverBorderColor: 'red',
    //   pointHoverBorderWidth: 2,
    //   pointRadius: 5,
    //   pointHitRadius: 10,
    //   strokeColor: 'red',
    //   backgroundColor: 'red',
    //   data: [-214.87]
    // },
    // {
    //   label: 'קו אדום עליון',

    //   fill: props.shows,
    //   lineTension: 0.1,
    //   borderColor: 'salmon',
    //   borderCapStyle: 'butt',
    //   borderDash: [],
    //   borderDashOffset: 0.0,
    //   borderJoinStyle: 'miter',
    //   pointBorderColor: 'salmon',
    //   pointBackgroundColor: '#fff',
    //   pointBorderWidth: 1,
    //   pointHoverRadius: 5,
    //   pointHoverBackgroundColor: 'red',
    //   pointHoverBorderColor: 'red',
    //   pointHoverBorderWidth: 2,
    //   pointRadius: 5,
    //   pointHitRadius: 10,
    //   strokeColor: 'salmon',
    //   backgroundColor: 'salmon',
    //   data: [-208.3]
    // }
  ]

  let options = {
    maintainAspectRatio: false,
    scales: {
      xAxes: [
        {
          display: props.shows,
          gridLines: {
            display: true
          }
        }
      ],
      yAxes: [
        {
          display: props.shows,
          animation: {
            duration: '1000'
          },
          gridLines: {
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
