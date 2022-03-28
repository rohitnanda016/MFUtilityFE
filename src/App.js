import React from 'react';
import Header from './header/header'
import './App.css';
import './Card.css';
import Loader from "react-loader-spinner";
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css'
import MutualFundComponent from './Components/MutualFunds/MutualFundComponent';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      totalPortfolioValue:0,
      totalInvestedAmount:0,
      changeFromLastDay:0,
      changeFromStartOfMonth:0,
      schemeDetails:[],
      tabIndex:0
    };
  }

  compo

  render(){

    return(
      <React.Fragment>
        <Header/>

        <Tabs selectedIndex={this.state.tabIndex} onSelect={index => this.setState({tabIndex: index })}>
          <TabList>
            <Tab>Mutual Fund Portfolio</Tab>
            <Tab>Stock Portfolio</Tab>
            <Tab>Fixed Deposits</Tab>
            </TabList>
            <TabPanel>
              <MutualFundComponent 
                totalPortfolioValue={this.state.totalPortfolioValue} 
                totalInvestedAmount={this.state.totalInvestedAmount} 
                changeFromLastDay={this.state.changeFromLastDay} 
                changeFromStartOfMonth={this.state.changeFromStartOfMonth}
                schemeDetails={this.state.schemeDetails}
              />
            </TabPanel>
            <TabPanel>
              <h1>Stocks Info Coming Up Soon.</h1>
            </TabPanel>
            <TabPanel>
              <h1>FD Info Coming Up Soon.</h1>
            </TabPanel>          
        </Tabs>
        
        
      </React.Fragment>
      
    );    
  }

  componentDidMount(){
    fetch("https://mfdetailsapi20211026184645.azurewebsites.net/api/MFUtilityFunction")
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
