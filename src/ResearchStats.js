import React, { useEffect, useState } from 'react';
import { Card } from 'primereact/card';
import moment from 'moment';

const ResearchStats=(props)=>{
    console.log(props.data.market_data.ath_data?.usd,'zzzz')
    console.log(props.data.market_data.ath_date.usd,'peckkk')
    




    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "long", day: "numeric" }
        let epoch = moment(dateString).unix();
        return new Date(dateString).toLocaleDateString(undefined, options)
        
    }


return(
    <Card className='col-4 m-3 researchcard'>
            <h4>{props.data.name+''}Price and Market Stats</h4>
            <div className=" grid  researchrow">
                <div className='col-6 p-3'>
                    <label htmlFor="username1" className="block socialstats">{props.data.name+''} Price</label>
                </div>
                <div className='col-6 p-3 socialstatsvalue p-text-right'>
                    <strong>${props.data.market_data?.current_price.usd?.toLocaleString()}</strong>
                </div>
            </div>
         
            <div className=" grid  researchrow">
                <div className='col-6 p-3'>
                    <label htmlFor="username1" className="block socialstats">Market Cap</label>
                </div>
                <div className='col-6 p-3 socialstatsvalue p-text-right'>
                    <strong>${props.data.market_data?.market_cap.usd.toLocaleString()}</strong>
                </div>
            </div>
            {/* <div className=" grid  researchrow">
                <div className='col-6 p-3'>
                    <label htmlFor="username1" className="block socialstats">Market Cap Dominance</label>
                </div>
                <div className='col-6 p-3 socialstatsvalue p-text-right'>
                    <strong>1234</strong>
                </div>
            </div> */}
            <div className=" grid  researchrow">
                <div className='col-6 p-3'>
                    <label htmlFor="username1" className="block socialstats">Trading Volume</label>
                </div>
                <div className='col-6 p-3 socialstatsvalue p-text-right'>
                    <strong >${props.data.market_data?.total_volume.usd.toLocaleString()}</strong>
                </div>
            </div>
            <div className=" grid  researchrow">
                <div className='col-6 p-3'>
                    <label htmlFor="username1" className="block socialstats">Volume / Market Cap</label>
                </div>
                <div className='col-6 p-3 socialstatsvalue p-text-right'>
                    <strong>{(props.data.market_data?.total_volume.usd/props.data.market_data?.market_cap.usd).toFixed(4)}</strong>
                </div>
            </div>
            <div className=" grid  researchrow">
                <div className='col-6 p-3'>
                    <label htmlFor="username1" className="block socialstats">24h Low / 24h High</label>
                </div>
                <div className='col-6 p-3 socialstatsvalue p-text-right '>
                    <strong>${props.data.market_data?.high_24h.usd?.toLocaleString()}/${props.data.market_data?.low_24h.usd?.toLocaleString()}</strong>
                </div>
            </div>
            {/* <div className=" grid  researchrow">
                <div className='col-6 p-3'>
                    <label htmlFor="username1" className="block socialstats">7d Low / 7d High</label>
                </div>
                <div className='col-6 p-3 socialstatsvalue p-text-right'>
                    <strong>1234</strong>
                </div>
            </div> */}
            <div className=" grid  researchrow">
                <div className='col-6 p-3'>
                    <label htmlFor="username1" className="block socialstats">Market Cap Rank</label>
                </div>
                <div className='col-6 p-3 socialstatsvalue p-text-right'>
                    <strong>#{props.data.market_data?.market_cap_rank}</strong>
                </div>
            </div>
            <div className=" grid  researchrow">
                <div className='col-6 p-3'>
                    <label htmlFor="username1" className="block socialstats">All-Time High</label>
                </div>
                <div className='col-6 p-3 socialstatsvalue p-text-right'>
                    <strong>${props.data.market_data?.ath.usd.toLocaleString()}</strong><br></br>
                    <small>on {formatDate(props.data.market_data.ath_date.usd)} ({moment(props.data.market_data.ath_date.usd, "YYYYMMDD").fromNow()})</small>
                </div>
            </div>
            <div className=" grid  researchrow">
                <div className='col-6 p-3'>
                    <label htmlFor="username1" className="block socialstats">All-Time Low</label>
                </div>
                <div className='col-6 p-3 socialstatsvalue p-text-right'>
                    <strong>${props.data.market_data?.atl.usd.toLocaleString()}</strong><br></br>
                    <small>on {formatDate(props.data.market_data.atl_date.usd)} ({moment(props.data.market_data.atl_date.usd, "YYYYMMDD").fromNow()})</small>
                </div>
            </div>
            </Card>

);

}
export default ResearchStats