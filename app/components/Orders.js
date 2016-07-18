import React from "react";
import { render } from 'react-dom'
import { Col, Row, Panel } from 'react-bootstrap'

export default class Orders extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div className="fullWidth">
        <Panel header="Previous orders" id="ordersPanel">
          <div className="centeredPrompt">
            You haven't ordered anything yet.
          </div>
        </Panel>
      </div>
    );
  }
}
