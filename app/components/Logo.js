import React from "react";
import { render } from 'react-dom'
import { Navbar } from 'react-bootstrap';

export default class Logo extends React.Component {
  constructor(props){
    super(props)

  }

  render() {

    return(
      <div>
        <Navbar.Brand>
          <a href="#" id="logo">YUM YUM</a>
        </Navbar.Brand>
      </div>
    );
  }
}
