import React from "react";
import { render } from "react-dom"
import { Col, Row } from 'react-bootstrap'

export default class RestaurantPage extends React.Component {
  constructor(props){
    super(props)

  }

  componentDidMount() {
    let _height = window.innerHeight;
    document.getElementById('basketPanel').style.height = _height - 60 + 'px';
  }

  render() {

    return(
      <div>
        <Col xs={9}>
          Menu
        </Col>
        <Col xs={3} className="" id="basketPanel">
          Basket
        </Col>
      </div>
    );
  }
}
