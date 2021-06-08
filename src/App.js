import React from 'react';
import Header from './header/header'
import SchemeDetails from './Components/SchemeDetails'
import OverallPortfolio from './Components/OverallPortfolio'
import './App.css';
import './Card.css';
import Loader from "react-loader-spinner";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      totalPortfolioValue:0,
      totalInvestedAmount:0,
      changeFromLastDay:0,
      changeFromStartOfMonth:0,
      schemeDetails:[]
    };
  }

  compo

  render(){

    return(
      <React.Fragment>
        <Header/>
        <OverallPortfolio totalPortfolioValue={this.state.totalPortfolioValue} totalInvestedAmount={this.state.totalInvestedAmount} changeFromLastDay={this.state.changeFromLastDay} changeFromStartOfMonth={this.state.changeFromStartOfMonth}/>
        <div>
          <div className="item heading">
                      <b>Scheme Details</b>
          </div>
          { this.state.schemeDetails.map(schemeDetails => <SchemeDetails schemeDetails={schemeDetails} />) }
        </div>
        
      </React.Fragment>
      
    );    
  }

  componentDidMount(){
    fetch("http://host.docker.internal:7071/api/MFUtilityFunction")
      .then(response=>response.json())
      .then(data=>this.setState(
        {
          totalPortfolioValue:data.totalPortfolioValue,
          schemeDetails:data.schemeDetails,
          totalInvestedAmount:data.totalInvestedAmount,
          changeFromLastDay:data.changeFromLastDay,
          changeFromStartOfMonth:data.changeFromStartOfMonth
        })
      );     
  }
}

export default App;
