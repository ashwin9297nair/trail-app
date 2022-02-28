/*
*****************************************************************************************************
**        File Name : Chart.js
**        JIRA issue : POL-72
**        Author : Ashwin Nair
**        Created Date : 26-10-2021
**        Last Modifiled Date : 26-10-2021
**        Last Modified By : Ashwin Nair
****************************************************************************************************
*/
import axios from 'axios';
import React, { Component } from 'react';
import { Chart } from 'primereact/chart';
import { SelectButton } from 'primereact/selectbutton';
import { Title } from 'chart.js';
import moment from 'moment';
import { Tag } from 'primereact/tag';
// import { Helmet } from 'react-helmet';
let finalvalue = 0
let trial

export class AssistedGraph extends Component {

  constructor(props) {
    super(props);
    this.state = {
      file: [],
      new: [],
      onedaydata: props.onedaydata,
      sevendaydata: props.sevendaydata,
      thirtydaydata: props.thirtydaydata,
      ninetydaydata: props.ninetydaydata,
      onedaytime: props.onedaytime,
      sevendaytime: props.sevendaytime,
      thirtydaytime: props.thirtydaytime,
      ninetydaytime: props.ninetydaytime,
      value2: 0,
      percent:''

    }

    this.setState = this.setState.bind(this)
    this.options = ['Off', 'On'];
    this.paymentOptions = [
      { name: '1 D', value: 0 },
      { name: '1 W', value: 1 },
      { name: '1 M', value: 2 },
      { name: '3 M', value: 3 }
    ];
  //  Sending Data to Chart
    this.basicData = [
      {

        labels: props.onedaytime.map((t) => moment(t).format('dddd') + " " + moment(t).format('h:mm a')),
        datasets: [
          {
            data: props.onedaydata,
            fill: false,
            borderColor: '#3333FF',
            tension: 0,
            borderWidth: 1,
            pointRadius: 0,
          },
        ]
      },
      {

        labels: props.sevendaytime.map((t) => moment(t).format('dddd') + " " + moment(t).format('h:mm a')),
        datasets: [
          {

            data: props.sevendaydata,
            fill: false,
            borderColor: '#3333FF',
            tension: 0,
            borderWidth: 1,
            pointRadius: 0
          },
        ]
      },

      {

        labels: props.thirtydaytime.map((t) => moment(t).format('dddd') + " " + moment(t).format('MMM Do')),
        datasets: [
          {
            data: props.thirtydaydata,
            fill: false,
            borderColor: '#3333FF',
            tension: 0,
            borderWidth: 1,
            pointRadius: 0
          },
        ]
      },

      {

        labels: props.ninetydaytime.map((t) => moment(t).format('dddd') + " " + moment(t).format('MMM Do')),
        datasets: [
          {
            data: props.ninetydaydata,
            fill: false,
            borderColor: '#3333FF',
            tension: 0,
            borderWidth: 1,
            pointRadius: 0
          },
        ]
      },


    ];

    this.options = this.getLightTheme();
    this.getprice = props.getprice;
  }


  componentDidUpdate = () => {
    this.getLightTheme()
  }
  getLightTheme() {

    let value2 = this.state.value2
    trial = value2
    finalvalue = this.state.onedaydata[this.state.onedaydata.length - 1].toFixed(2)


    let onedayvalues = this.state.onedaydata
    let sevendayvalues = this.state.sevendaydata
    let thirtydayvalues = this.state.thirtydaydata
    let ninetydayvalues = this.state.ninetydaydata
    let percentchange 

    let basicOptions = {
      options: {
        scales: {
           yAxes: [{
              gridLines: {
                 drawBorder: false,
              },
           }]
        },
     },
     maintainAspectRatio: false,
     aspectRatio: .6,
      plugins: {
        legend: false,
        
        // Tooltip Value for hovering
        tooltip: {
          intersect: false,
          callbacks: {
            afterFooter: function (chart) {
 
              const time = document.getElementById('time')

              time.innerText = chart[0].label

              const value = document.getElementById('value')
              value.innerText = '$ ' + chart[0].parsed.y.toFixed(2)
              // Checking on which chart page it is
              if (trial === 0) {
                percentchange = ((chart[0].parsed.y - onedayvalues[0]) / onedayvalues[0]) * 100
              }
              if (trial === 1) {
                percentchange = ((chart[0].parsed.y - sevendayvalues[0]) / sevendayvalues[0]) * 100
              }
              if (trial === 2) {
                percentchange = ((chart[0].parsed.y - thirtydayvalues[0]) / thirtydayvalues[0]) * 100
              }
              if (trial === 3) {
                percentchange = ((chart[0].parsed.y - ninetydayvalues[0]) / ninetydayvalues[0]) * 100
              }

              const change = document.getElementById('percentchange');

              percentchange = percentchange.toFixed(2)
              if (percentchange > 0) {
                change.innerText = '🡡 '+percentchange +'%'
                change.style.color = 'green'
              }
              if (percentchange < 0) {
                change.innerText = '🡣 '+percentchange +'%';
                change.style.color = 'red'
              }

            },

          }

        }

      },
      scales: {
        x: {
          
          ticks: {
            callback: function(val, index) {
              // Hide the label of every 2nd dataset
              return index!== 0 ? this.getLabelForValue(val) : '';
            },
            color: '#495057',
            maxTicksLimit: 9,
            maxRotation: -40,

          },
          grid: {
            color: '#ebedef'
          }
        },
        y: {
          ticks: {
            // color: '#495057'
            display: false
          },
          grid: { display:false,
            color: '#ebedef'
          }
        }
      }

    };

    return {
      basicOptions,

    }
  }



  render() {
    console.log(this.props,'propssszz')
    const { basicOptions, multiAxisOptions } = this.options;
    const loading = false;
    const data = this.state.data;
  
    // Update hover value to default when taken out of chart
    function mouseout() {
      let a = document.getElementById('time')
      a.innerText = 'Current Price'
      let b = document.getElementById('value')
      b.innerText = '$ ' + finalvalue
      let c = document.getElementById('percentchange')
      c.innerText = ''

    }

    return (
      <div>
       
        <div className="d-flex jc-between">
          <div id='hoverval'>
            <div id='time' >Current Price</div>
            <div id='value'>${finalvalue}</div>
            <div

              id='percentchange' ></div>

          </div>
          <div className='col-11 align-right'>
          <SelectButton value={this.state.value2} options={this.paymentOptions} onChange={(e) => this.setState({ value2: e.value })} optionLabel="name" />
          </div>
        </div>
        <div className="card">
          <div onMouseOut={mouseout} >
            <Chart type="line" data={this.basicData[this.state.value2]} options={basicOptions} />

          </div>

        </div>
      </div>
    )
  }
}

export default AssistedGraph;

