import React from "react";
import { render } from 'react-dom'
import NavBar from './NavBar'
import Landing from './Landing'

// Regex to hide react-bootstrap props error logs ^((?!Unknown props).)+$

export default class Main extends React.Component {
  constructor(props){
    super(props);

  }

  render() {
    return(
      <div>
        <NavBar />
        <Landing />
      </div>
    );
  }
}
