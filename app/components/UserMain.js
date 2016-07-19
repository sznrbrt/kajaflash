import React from "react";
import { render } from 'react-dom'
import { Row, Col, Pre } from 'react-bootstrap';
import Footer from './Footer'
import Deals from './Deals'
import Orders from './Orders'
import CurrentOrders from './CurrentOrders'
import IWantToOrderButton from './IWantToOrderButton'

export default class UserMain extends React.Component {
  constructor(props){
    super(props)

  }

  render() {
    console.log(this.props);
    return(
      <div className="container" id="userMainBody">
        <Row className="text-center">
          <Row className="noMarPad">
            <Col xs={12} md={6} className="noMarPad">
              <div className="centeredPrompt">
                <Orders />
              </div>
            </Col>
            <Col xs={12} md={6} className="noMarPad">
              <div className="centeredPrompt">
                <Deals />
              </div>
            </Col>
            <Col xs={12} md={12} className="noMarPad">
              <div className="centeredPrompt">
                <CurrentOrders />
              </div>
            </Col>
            <Col xs={12} md={12} className="noMarPad">
              <div className="centeredPrompt">
                <IWantToOrderButton />
              </div>
            </Col>
            <Col xs={12} md={12} className="noMarPad">
              <Footer />
            </Col>
          </Row>
        </Row>
      </div>
    );
  }
}
