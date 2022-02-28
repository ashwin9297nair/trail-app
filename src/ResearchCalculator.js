import React, { Component } from 'react';
import { InputNumber } from 'primereact/inputnumber';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';

export class ResearchCalculator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            valueincr1: 0,
            valueincr2: 0,
           conversion:props.data.market_data.current_price.usd,
           name:props.data.symbol.toUpperCase()
        //    trial:props.data


        };
    }
    USDconverter=(e)=>{
        console.log(this.state.conversion,'oppoopo')
        console.log(this.state.trial,'opp')

        this.setState({valueincr1: e})
        this.setState({valueincr2: (e*this.state.conversion).toFixed(6)})
        // setValue1(e)
        // setValue2(e*5)

    }
    tokenconverter=(e)=>{
        this.setState({valueincr2: e})
        this.setState({valueincr1: (e/this.state.conversion).toFixed(6)})
        // setValue2(e)
        // setValue1(e/5)

    }

    render() {
        return (
            <div className='col-8 col-offset-2'>
                {/* <div className="card">
                    <div className="grid p-fluid">
                        <div className="field col-12 md:col-3">
                            <label htmlFor="stacked">Increment</label>
                            <InputNumber inputId="stacked" value={this.state.valueincr1} onValueChange={(e) => this.setState({valueincr1: e.value})} showButtons mode="currency" currency="USD" />
                        </div>
                    </div>
                </div> */}
                <div className="card exchange p-3">
                    <div className="grid p-fluid">
                        <div className="col-5">
                            <div className="p-inputgroup">
                                <span className="p-inputgroup-addon">{this.state.name}</span>
                                <InputNumber inputId="stacked" min={0} prefix="$" value={this.state.valueincr1} onValueChange={(e) =>this.USDconverter(e.target.value)} onChange={(e) =>this.USDconverter(e.value)} showButtons />
                            </div>
                        </div>
                        <div className="col-2 text-center">
                            <i className="pi pi-arrow-left"></i><br/>
                            <i className="pi pi-arrow-right"></i>
                        </div>
                        <div className="col-5">
                            <div className="p-inputgroup">
                                <span className="p-inputgroup-addon">USD</span>
                                <InputNumber inputId="stacked" min={0} prefix="$"value={this.state.valueincr2} onValueChange={(e) =>this.tokenconverter(e.target.value)} onChange={(e) =>this.tokenconverter(e.value)} onChangeshowButtons showButtons/>
                                {/* <InputNumber inputId="stacked" value={this.state.valueincr2} onValueChange={(e) => this.setState({valueincr2: e.value})} showButtons /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ResearchCalculator;