import React from 'react';
import SchemeDetails from '../SchemeDetails'
import OverallPortfolio from '../OverallPortfolio'
import '../../CSS/App.css';
import '../../CSS/Card.css';
import 'react-tabs/style/react-tabs.css'

class MutualFundComponent extends React.Component{
    constructor(props){
        super(props);        
    }
    render(){
        return(
            <React.Fragment>
                <OverallPortfolio totalPortfolioValue={this.props.totalPortfolioValue} totalInvestedAmount={this.props.totalInvestedAmount} changeFromLastDay={this.props.changeFromLastDay} changeFromStartOfMonth={this.props.changeFromStartOfMonth}/>
                <div>
                    <div className="item heading">
                        <b>Scheme Details</b>
                    </div>
                    { this.props.schemeDetails.map(schemeDetails => <SchemeDetails schemeDetails={schemeDetails} />) }
                </div>
            </React.Fragment>
        )
    }    
}
export default MutualFundComponent;
