import React from "react";
import { render } from 'react-dom'
import { Row, Col, Panel } from 'react-bootstrap';


export default class LandingGuide extends React.Component {
  constructor(props){
    super(props)

  }

  render() {

    return(
      <div id="landingGuide">
        <Row className="noMarPad text-center">

          <Col xs={12} md={4}>
            <Panel className="guidePanelItem">
              <img src="./assets/icon/animat-responsive-color.gif" alt="" className="guideIcon" />
              <h2>Ordering</h2>
              <h5>The ordering platforms feature a clean and contemporary design for a quick & seamless ordering, tracking and payment experience</h5>
            </Panel>
          </Col>
          <Col xs={12} md={4}>
            <Panel className="guidePanelItem">
              <img id="foodIcon" src="./assets/icon/food.svg" alt="" className="guideIcon" />
              <h2 id="yourTasteLabel">Your taste</h2>
              <h5 id="yourTasteTxt">Enjoy a variety of delicious food provided by our handpicked vendors.</h5>
            </Panel>
          </Col>
          <Col xs={12} md={4}>
            <Panel className="guidePanelItem">
              <img src="./assets/icon/animat-rocket-color.gif" alt="" className="guideIcon" />
              <h2>Delivery</h2>
              <h5>We provide a superfast delivery within 34 Minutes. Extra 4 mins (30 + 4) are incorporated to ensure rider and road safety.</h5>
            </Panel>
          </Col>

        </Row>
      </div>
    );
  }
}
