import React from "react";
import { render } from "react-dom"
import { Col, Row, ListGroupItem, Image } from 'react-bootstrap'
import moment from 'moment'
import ProgressBar from './ProgressBar'

export default class CurrentOrderItem extends React.Component {
  constructor(props){
    super(props)

  }

  render() {
    let createdAt = moment(this.props.date).fromNow();

    return(
      <div>
        <ListGroupItem>
          <Row>
            <Col xs={2} className="">
              <Image src={this.props.vendorAvatar}  className="vendorAvatar2" circle />
            </Col>
            <Col xs={8} className="text-left">
              <span className="vendorName2">{this.props.vendorName}</span>
              <ProgressBar />
            </Col>
            <Col xs={2} className="centeredPrompt">
              <div className="currentOrderPrice centeredPrompt">
                1000 Ft
              </div>
              <div className="centeredPrompt">
                <span className="currentOrderTime">{createdAt}</span>
              </div>
            </Col>
          </Row>
        </ListGroupItem>
      </div>
    );
  }
}
