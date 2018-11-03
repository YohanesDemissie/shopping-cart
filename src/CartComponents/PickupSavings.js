import React, { Component } from 'react';
import { Row, Col, Tooltip, OverlayTrigger} from 'react-bootstrap';

export default class PickupSavings extends Component{
  render(){
    const tooltip = (
    <Tooltip id="tooltip">
      <p>Picking up your order in the store helps cut costs, save you time, and we pass the savings to you.</p>
    </Tooltip>
    );
    return(
      <Row className="show-grid">
        <Col me={6}>
          <OverlayTrigger placement="bototom" overlay={tooltip}>
            <div style={styles.pickupSavings}>Pickup Savings</div>
          </OverlayTrigger>
        </Col>
        <Col style={styles.totalSavings} md={6}> {`$$this.props.price`} </Col>
      </Row>
    )
  }
}

var styles = {
  pickupSavings:{
    textDecoration: 'underline',
  },
  totalSavings: {
    color: 'red',
    fontWeight: '800'
  }
}