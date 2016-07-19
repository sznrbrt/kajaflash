import React from "react";
import { render } from 'react-dom'
import { Col, Row, Panel } from 'react-bootstrap'

export default class CurrentOrders extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div className="fullWidth">
        <Panel header="Ongoing orders">
          <div className="centeredPrompt">
            You don't have any ongoing order.
          </div>
        </Panel>
      </div>
    );
  }
}
