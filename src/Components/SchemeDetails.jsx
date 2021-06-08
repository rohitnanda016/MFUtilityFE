import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class SchemeDetails extends React.Component{
    constructor(props){
        super(props);        
    }   
    render(){     
        
        var unrealisedGain=this.props.schemeDetails.currentValue-this.props.schemeDetails.investedAmount;

        var className=unrealisedGain>0?"profit":"Loss";
        return(
            <div className="customCard row">
                <div className="items col-sm-6">
                    <div><b className="subHeading">Scheme Name: </b>{this.props.schemeDetails.schemeName}</div>
                    <div><b className="subHeading">Units: </b>{this.props.schemeDetails.units}</div>
                    <div><b className="subHeading">Invested Amount: </b>₹{this.props.schemeDetails.investedAmount}</div>

                </div>
                <div className="items col-sm-6">
                    <div><b className="subHeading">NAV: </b>{this.props.schemeDetails.navDetails.latestNAV}</div>
                    <div><b className="subHeading">Current Value: </b>₹{this.props.schemeDetails.currentValue}</div>
                    <div style={{display:"flex"}}><b className="subHeading">Gain/Loss: </b><div className={className}>&nbsp;{Math.round((this.props.schemeDetails.currentValue-this.props.schemeDetails.investedAmount)*100)/100}</div></div>

                </div>
            </div>
        );
    }

}

export default SchemeDetails;