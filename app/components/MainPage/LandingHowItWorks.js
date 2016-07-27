import React from "react";
import { render } from 'react-dom'
import { Glyphicon } from 'react-bootstrap';

export default class LandingHowItWorks extends React.Component {
  constructor(props){
    super(props)

  }

  render() {

    return(
      <div className="centeredPrompt">
        <h3 id="howItWorksText">
          HOW IT WORKS?
        </h3>
        <Glyphicon className="howItWorksDown" glyph="chevron-down" />
      </div>
    );
  }
}
