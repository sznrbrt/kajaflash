import React from "react";
import { render } from 'react-dom'
import { Col, Row, Panel } from 'react-bootstrap'

export default class IWantToOrderButton extends React.Component {
  constructor(props){
    super(props);
  }

  handleClick() {
    console.log('ORDERRRRRRRRR!');
  }

  render() {
    return(
      <div className="fullWidth">
        <Panel onClick={ this.handleClick }>
          I WANT TO ORDER!
        </Panel>
      </div>
    );
  }
}
