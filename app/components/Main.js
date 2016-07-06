import React from "react";
import { render } from 'react-dom'
import Hello from './Hello/Hello'

export default class Main extends React.Component {
  constructor(props){
    super(props);

  }

  render() {

    return(
      <div>
        <Hello />
      </div>
    );
  }
}
