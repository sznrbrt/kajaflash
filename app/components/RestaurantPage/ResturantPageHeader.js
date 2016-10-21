import React from "react";
import { render } from "react-dom"
import { Col, Row, Panel, Image} from 'react-bootstrap'

export default class ResturantPageHeader extends React.Component {
  constructor(props){
    super(props)

  }

  render() {
    return(
      <div>
        <Col xs={6}>
          <h3>{ this.props.name }</h3>
          <h6>{ this.props.address }</h6>
          <h6>Tel.: { this.props.phoneNumber }</h6>
          <h6>Open: { this.props.deliveryhours }</h6>
        </Col>
        <Col xs={6} className="text-right">
          <Image src={ this.props.logo } className="resturantPageHeaderImage" />
        </Col>
      </div>
    );
  }
}
