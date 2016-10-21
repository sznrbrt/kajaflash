import React from "react";
import { render } from "react-dom"
import { Col, Row } from 'react-bootstrap'

export default class Basket extends React.Component {
  constructor(props){
    super(props)

  }

  componentDidMount() {
    let _height = window.innerHeight;
    document.getElementById('basketPanel').style.height = _height - 60+ 'px';
  }

  render() {

    return(
      <Col xs={4} className="" id="basketPanel">
        <h4>My basket:</h4>
        <hr/>
        <Row>
          <Col xs={12} className="text-center">
            Your Basket is empty.
          </Col>
        </Row>
        <hr/>
        <Row>
          <Col xs={6}>
            Total
          </Col>
          <Col xs={6} className="text-right">
            0 Ft
          </Col>
        </Row>
      </Col>
    );
  }
}
