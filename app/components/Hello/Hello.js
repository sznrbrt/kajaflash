import React from "react";
import { render } from 'react-dom'

export default class Hello extends React.Component {
  constructor(props){
    super(props);

  }

  render() {

    return(
      <div>
        Hello world!
      </div>
    );
  }
}
