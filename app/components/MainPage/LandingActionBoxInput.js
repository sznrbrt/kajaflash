import React from "react";
import { render } from 'react-dom'
import { FormGroup, InputGroup, FormControl } from 'react-bootstrap';
import places from 'places.js'

export default class LandingFoodImage extends React.Component {
  constructor(props){
    super(props)

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    var placesAutocomplete = places({
      container: document.querySelector('#address-input')
    });
  }


  render() {

    return(
      <div>
        <input type="search" id="address-input" placeholder="Enter your address" />
        {/*<FormGroup bsSize="large">
          <InputGroup className="addressSearchBoxHolder">
            <FormControl className="addressSearchBox" type="text" placeholder="🔎 Enter your address" />
          </InputGroup>
        </FormGroup>*/}
      </div>
    );
  }
}
