import React from "react";
import { render } from 'react-dom'
import { Col, Row, Button } from 'react-bootstrap'
import { browserHistory } from 'react-router'

export default class IWantToOrderButton extends React.Component {
  constructor(props){
    super(props);
  }

  handleClick() {
    console.log('wtf');
    browserHistory.push('/ordering');
  }

  render() {
    return(
      <div className="fullWidth">
        <Button className="iWantToOrderButton" bsStyle="success" onClick={this.handleClick}>
          I WANT TO ORDER
        </Button>
      </div>
    );
  }
}
