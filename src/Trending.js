import { useEffect, useState } from "react"
import { Card } from 'primereact/card';
import axios from 'axios'
import MiniChart from './MiniChart'
import Marquee from "react-fast-marquee";


const Trending = (props) => {

    const trenddata = () => {
        let content = []

        for (const key in props.chart) {
            let percentchange = (((props.chart[key].slice(-1)[0] - props.chart[key][0]) / props.chart[key][0]) * 100).toFixed(1)
            let color = (props.chart[key][0] > props.chart[key].slice(-1)[0]) ? '#FF0000' : '#008000'
            let currentprice = (props.chart[key].slice(-1)[0] > 1) ? props.chart[key].slice(-1)[0].toFixed(2) : props.chart[key].slice(-1)[0].toFixed(7)
            content.push(
                <Card key={key} className='m-2 researchcol' >
                    <div className='grid' >
                        <div className='col-2 p-0'>
                            <img src={props.data[key]?.small} className='researchimg' onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
                        </div>
                        <div className='col-7'>
                            <div className='pl-2' style={{ fontSize: "13px" }}>{props.data[key]?.name}</div>
                            {/* <small style={{fontSize:"15px"}}>{props.data[key].name}</small> */}

                            <div className='pl-2'>${currentprice}</div>
                        </div>
                        <div className='col-2 p-0'>
                            <p style={{ fontSize: "13px" }} className={(props.chart[key][0] > props.chart[key].slice(-1)[0]) ? "textred pt-2" : "textgreen pt-2"}>{percentchange}%</p>

                        </div>
                    </div>
                    <div class="col-12">
                        <MiniChart data={props.chart[key]} chartcolor={color} />
                    </div>

                </Card>


            )
        }

        return content


    }

    return (   
            <div className='col-10 col-offset-1'>
                {/* <div className='m-5 marquee'>
                    <span className="flex">{trenddata()}</span>
                </div> */}
                <Marquee pauseOnHover>
                   {trenddata()}
                   </Marquee>
            </div>
    )
}

export default Trending;