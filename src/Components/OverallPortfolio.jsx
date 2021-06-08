import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class OverallPortfolio extends React.Component{
    constructor(props){
        super(props);        
    }   
    render(){
        
        var unrealisedGain=this.props.totalPortfolioValue-this.props.totalInvestedAmount;        

        var className=unrealisedGain>0?"profit":"Loss";
        var changeFromLastDayClass=this.props.changeFromLastDay>=0?"profit":"loss";
        var changeFromLastDayLabel=this.props.changeFromLastDay>=0?"1 Day Profit":"1 Day Loss";
        var changeFromStartOfMonthClass=this.props.changeFromStartOfMonth>=0?"profit":"loss";
        return(
            <React.Fragment>
                <div className="item heading">
                    <b>Overall Portfolio Details</b>
                </div>
                <div className="customCard portFolioCard">
                    <div style={{fontSize:"20px", marginBottom:"5px"}} className="subHeading">Value as of <b>{this.getCurrentDate()}</b></div>
                    <div>₹{this.props.totalPortfolioValue}</div>
                    <div style={{display:"flex", fontSize:"15px", marginBottom:"8px"}}><div className={changeFromLastDayClass}>{Math.round(this.props.changeFromLastDay*100)/100}</div> &nbsp; {changeFromLastDayLabel}</div>

                    <div className="row">
                        <div className="col-sm-4">
                            <div className="subHeading"><b>Invested</b></div>
                            <div>₹{this.props.totalInvestedAmount}</div>
                        </div>  
                        <div className="col-sm-4">
                            <div className="subHeading"><b>Unrealised Gain</b></div>
                            <div className={className}>₹{Math.round(unrealisedGain*100)/100}</div>
                        </div>  
                        <div className="col-sm-4">
                            <div className="subHeading"><b>Change From Start of Month</b></div>
                            <div className={changeFromStartOfMonthClass}>₹{Math.round(this.props.changeFromStartOfMonth*100)/100}</div>
                        </div>  
                    </div>
                                 
                </div>
            </React.Fragment>
        );
    }

    getCurrentDate=(separator='/')=>{

        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        
        return `${date}${separator}${month<10?`0${month}`:`${month}`}${separator}${year}`
        }

}

export default OverallPortfolio;