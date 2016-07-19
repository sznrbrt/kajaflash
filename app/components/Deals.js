import React from "react";
import { render } from 'react-dom'
import { Col, Row, Panel } from 'react-bootstrap'

export default class Deals extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div className="fullWidth">
        <Panel header="Deals" id="dealsPanel">
          <Col xs={12} className="fullHeight">
            <div className="centeredPrompt placeholder">
              Deals...
            </div>
          </Col>
        </Panel>
      </div>
    );
  }
}
