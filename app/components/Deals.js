import React from "react";
import { render } from 'react-dom'
import { Col, Row, Panel, Image } from 'react-bootstrap'

export default class Deals extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div className="fullWidth">
        <Panel header="Deals" id="dealsPanel">
          <Col xs={12}>
            <div className="centeredPrompt dealsContainer">
              <Col xs={12}>
                <Image src="http://www.infantil.aquaweb.com.ar/wp-content/uploads/2014/02/pizza-icon-450x450.png" id="freePizza"/>
                <span className="dealsText">FREE PIZZA!</span>
              </Col>
            </div>
          </Col>
        </Panel>
      </div>
    );
  }
}
