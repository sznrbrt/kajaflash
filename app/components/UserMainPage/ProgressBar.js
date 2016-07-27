import React from "react";
import { render } from "react-dom"
import { ButtonGroup, Button } from 'react-bootstrap'

export default class CurrentOrderItem extends React.Component {
  constructor(props){
    super(props)

  }

  render() {

    return(
      <div>
        <ButtonGroup>
          <Button className="orderStatusTrue">Processed</Button>
          <Button className="orderStatusTrue">Cooked</Button>
          <Button className="orderStatusFalse">Delivery</Button>
          <Button className="orderStatusFalse">Arrived</Button>
        </ButtonGroup>
      </div>
    );
  }
}
