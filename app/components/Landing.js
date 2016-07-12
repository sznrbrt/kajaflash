import React from "react";
import { render } from 'react-dom'
import {  } from 'react-bootstrap';
import LandingFoodImage from './LandingFoodImage';
import LandingActionBox from './LandingActionBox'


export default class Landing extends React.Component {
  constructor(props){
    super(props)

  }

  render() {

    return(
      <div className="container-fluid noPad">
        <div className="row noMarPad">
          <div className="hidden-xs col-md-6 noMarPad">
            <LandingFoodImage />
          </div>
          <div className="col-xs-12 col-md-6 noMarPad">
            <LandingActionBox/>
          </div>
        </div>
      </div>
    );
  }
}
