import React from "react";
import { render } from 'react-dom'
import {  } from 'react-bootstrap';
import LandingActionBoxInput from './LandingActionBoxInput'
import FindFoodButton from './FindFoodButton'
import places from 'places.js'

export default class LandingActionBox extends React.Component {
  constructor(props){
    super(props)

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
  }

  render() {
    return(
      <div id="landingActionBox" className="centeredPrompt">
        <h3 className="whiteTxt" id="callToActionTxt">
          ORDER FROM <br />
          RESTURANTS <br />
          AROUND YOU
        </h3>
        <LandingActionBoxInput />
        <FindFoodButton />
      </div>
    );
  }
}
