import React from 'react';
import { Chart } from 'primereact/chart';

const LineChartDemo = (props) => {
    const basicData = {
        labels:props.data,
        datasets: [
            {
                label: 'First Dataset',
                data: props.data,
                fill: false,
                borderColor: props.chartcolor,
                tension: .2,
                pointRadius: 0,
                spanGaps: true,
            },
        ]
    };

    const getLightTheme = () => {
        let basicOptions = {
            maintainAspectRatio: false,
            events: [],
            // borderColor: borderColor,
            borderWidth: 1.5,
            responsive: true,
            aspectRatio: .6,
            plugins: {
                legend: {
                    display: false,
                    labels: {
                      display: false
                    }
                  },
                  tooltips: {
                    display: false
                  }
            },
            scales: {
                x: {
                    display: false,
                  },
                  y: {
                    display: false,
                  }
            }
        };

        return {
            basicOptions,
        }
    }

    const { basicOptions } = getLightTheme();

    return (
        
            
        <div className='mini_chart'> 
                <Chart type="line" data={basicData} options={basicOptions} />
      </div>
    )
}
export default LineChartDemo;