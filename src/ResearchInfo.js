import React, { useEffect, useState } from 'react';
import axios from 'axios'
import moment from 'moment';
import { Button } from 'primereact/button';
const ResearchInfo = (props) => {
    const [tokenInfo, settokenInfo] = useState('');
    const [currentPrice, setCurrentPrice] = useState('');
    const [tradeVolume, setTradeVolume] = useState('');
    const [percentchange, setPercentchange] = useState('');
    // const [prtchange, setPrtchange] = useState('');
    const [circulating_supply, setCirculating_supply] = useState('');
    const [totalSupply, setTotalSupply] = useState('');
    const [ath, setAth] = useState('');
    const [atl, setAtl] = useState('');
    const [ath_date, setAth_date] = useState('');
    const [atl_date, setAtl_date] = useState('');
    const [symbol, setSymbol] = useState('');
    




    useEffect(() => {
        
        const removeTags = (str) => {
            if ((str === null) || (str === ''))
                return false;
            else
                str = str.toString();
            return str.replace(/(<([^>]+)>)/ig, '');
        }
        const funct = async () => {
            settokenInfo(removeTags(props.data.description.en))
            setCurrentPrice(props.data.market_data.current_price.usd)
            setTradeVolume(props.data.market_data.total_volume.usd)
            setPercentchange(props.data.market_data.price_change_percentage_24h)
            setCirculating_supply(100000000)
            setTotalSupply(props.data.market_data.total_supply)
            setAth(props.data.market_data.ath.usd)
            setAtl(props.data.market_data.atl.usd)
            setAth_date(props.data.market_data.ath_date.usd)
            setAtl_date(props.data.market_data.atl_date.usd)
            setSymbol(props.data.symbol.toUpperCase())
            console.log(props.data.symbol.toUpperCase(),'xcvvvv')
        }
        funct()


    }, [])
    
    const getNumberUnits = (num) => {
        if (num > 99999) {
            var units = ["Million", "Billion", "Trillion", "Quadrillion", "Quintillion", "Sextillion"]
            var unit = Math.floor((num / 1.0e+1).toFixed(0).toString().length)
            var r = unit % 3
            var x = Math.abs(Number(num)) / Number('1.0e+' + (unit - r)).toFixed(2)
            return x.toFixed(2) + ' ' + units[Math.floor(unit / 3) - 2]
        }
        else { return num?.toLocaleString() }
    }
    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "long", day: "numeric" }
        let epoch = moment(dateString).unix();
        return new Date(dateString).toLocaleDateString(undefined, options)
        
    }
    console.log(props.data.market_data?.current_price.usd,'kkkkkkkk')
    return (
        <div className='p-4'>
            <h3>{props.data.name} Price and Market Data</h3>
            <div>{props.data.name} price today is ${currentPrice.toLocaleString()} with a 24-hour trading volume of ${tradeVolume.toLocaleString()}. {symbol} price is {percentchange > 0 ? 'up' : 'down'} {parseFloat(percentchange).toFixed(2)}% in the last 24 hours. It has a circulating supply of {getNumberUnits(circulating_supply)} {symbol} coins and a total supply of {getNumberUnits(totalSupply)}.</div>
            <h3>What was the highest price for {props.data.name}?</h3>
            <div>{props.data.name} hit an all time high of ${ath.toLocaleString()} on {formatDate(ath_date)} ({moment(ath_date, "YYYYMMDD").fromNow()})</div>
            <h3>What was the lowest price for {props.data.name}?</h3>
            <div>{props.data.name} hit an all time high of ${atl.toLocaleString()} on {formatDate(atl_date)} ({moment(atl_date, "YYYYMMDD").fromNow()})</div>
            <h3>What is {props.data.name}? </h3>
            <div>{tokenInfo}</div>
            
            {/* <Button label="Plain" onClick={()=> window.open(, "_blank")} className="p-button-raised p-button-text p-button-plain" /> */}
        </div>
    )

}

export default ResearchInfo;