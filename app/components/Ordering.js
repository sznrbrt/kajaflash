import React from "react";
import { render } from "react-dom"
import { Row, Col, Panel } from 'react-bootstrap';

export default class Ordering extends React.Component {
  constructor(props){
    super(props)

  }

  render() {

    return(
      <div className="container">
        <Col xs={12}>
          <Panel header="Restaurants" id="restaurantsPanel">
            Hello
          </Panel>
        </Col>
      </div>
    );
  }
}
