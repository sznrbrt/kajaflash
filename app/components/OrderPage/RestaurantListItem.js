import React from "react";
import { render } from "react-dom"
import { Col, Row, ListGroupItem, Image, Button } from 'react-bootstrap'
import { browserHistory } from 'react-router'

export default class RestaurantListItem extends React.Component {
  constructor(props){
    super(props)

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    browserHistory.push('/restaurant/' + this.props.id)
  }

  render() {

    return(
      <div>
        <ListGroupItem>
          <Row>
            <Col xs={1} className="">
              <Image src={this.props.logo}  className="vendorAvatar2" />
            </Col>
            <Col xs={9} className="text-left">
              <span className="vendorName2">{this.props.name}</span>
            </Col>
            <Col xs={2} className="centeredPrompt">
              <div className="restaurantDeliveryHour centeredPrompt">
                Open: {this.props.deliveryhours}
              </div>
              <Button bsStyle="success" onClick={this.handleClick}>
                View Menu
              </Button>
            </Col>
          </Row>
        </ListGroupItem>
      </div>
    );
  }
}
