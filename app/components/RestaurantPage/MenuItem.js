import React from "react";
import { render } from "react-dom"
import { Col, Row, Panel, Image, Button} from 'react-bootstrap'

export default class MenuItem extends React.Component {
  constructor(props){
    super(props)

  }

  render() {
    console.log('PROPS:', this.props);
    return(
      <div className="menuItem">
        <Panel header={this.props.name}>
          <Col xs={2}>
            <Image src={this.props.image} className="menuItemImage" />
          </Col>
          <Col xs={8} className="text-center menuItemDesc">
            {this.props.desc}
          </Col>
          <Col xs={2} className="text-center menuItemPrice">
            {this.props.price} Ft <br/>
          <Button bsStyle="success" bsSize="small" className="addToBasket">Add to basket</Button>
          </Col>
        </Panel>
      </div>
    );
  }
}
