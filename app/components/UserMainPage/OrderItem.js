import React from "react";
import { render } from "react-dom"
import { Col, Row, ListGroupItem, Image } from 'react-bootstrap'
import moment from 'moment'

export default class OrderItem extends React.Component {
  constructor(props){
    super(props)

  }

  sayHello() {
    console.log('hello');
  }

  render() {
    let createdAt = moment(this.props.date).fromNow();

    return(
      <div>
        <ListGroupItem onClick={this.sayHello} className="previousOrderItem">
          <Col xs={2}>
            <Image src={this.props.vendorAvatar}  className="vendorAvatar" circle />
          </Col>
          <Col xs={10}>
            <Row className="menuItemTopRow">
              <Col xs={6} className="vendorName text-left">
                {this.props.vendorName} - <span className="createdAt">{createdAt}</span>
              </Col>
              <Col xs={6} className="text-right">
                <span className="ellapsedTime">{this.props.totalAmount} Ft</span>
              </Col>
            </Row>
          </Col>
        </ListGroupItem>
      </div>
    );
  }
}
