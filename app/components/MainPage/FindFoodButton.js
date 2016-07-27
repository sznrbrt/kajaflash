import React from "react";
import { render } from 'react-dom'
import { Button } from 'react-bootstrap';
import places from 'places.js'

export default class LandingFoodImage extends React.Component {
  constructor(props){
    super(props)

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
  }

  render() {

    return(
      <div>
        <Button id="findFoodBtn" bsStyle="success" bsSize="large">Find food</Button>
      </div>
    );
  }
}
