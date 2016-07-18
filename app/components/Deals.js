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
          <div className="centeredPrompt">
            Deals
          </div>
        </Panel>
      </div>
    );
  }
}
