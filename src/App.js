import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';

import SubTotal from './CartComponents/SubTotal';
import PickupSavings from './CartComponents/PickupSavings';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state= {
      total: 100, //place holder till we get an actual backend
      PickupSavings: -385,
    }
  }
  render() {
    return (
      <div className="container">
        <Grid className="purchaseCard">
          <SubTotal price={this.state.total.toFixed(2)} /> {/* adds 2 decimals to any integer*/}
          <PickupSavings price={this.state.PickupSavings} />
        </Grid>
      </div>
    );
  }
}

export default App;
