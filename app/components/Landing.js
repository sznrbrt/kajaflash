import React from "react";
import { render } from 'react-dom'
import { Row, Col } from 'react-bootstrap';
import LandingFoodImage from './LandingFoodImage';
import LandingActionBox from './LandingActionBox'
import LandingHowItWorks from './LandingHowItWorks'
import LandingGuide from './LandingGuide'
import Footer from './Footer'


export default class Landing extends React.Component {
  constructor(props){
    super(props)

  }

  render() {

    return(
      <div className="container-fluid noPad">
        <Row className="noMarPad">
          <div className="hidden-xs col-md-6 noMarPad">
            <LandingFoodImage />
          </div>
          <Col xs={12} md={6} className="noMarPad">
            <LandingActionBox />
            </Col>
          <Col xs={12} md={12} className="noMarPad">
            <LandingHowItWorks />
            </Col>
          <Col xs={12} md={12} className="noMarPad">
            <LandingGuide />
            </Col>
          <Col xs={12} md={12} className="noMarPad">
            <Footer />
            </Col>
        </Row>
      </div>
    );
  }
}
