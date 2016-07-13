import React from "react";
import { render } from 'react-dom'
import { Col, Row } from 'react-bootstrap'

export default class Footer extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div id="footer">
        <Col xs={12} className="text-center">
          <Row>
            <Col xs={12}>
              <h5 className="footerTitle">YUM YUM @ 2016</h5>
              <hr className="footerHr hidden-md hidden-lg" />
            </Col>
            <Col xs={12} md={4}>
              <span>THE PROJECT</span>
              <hr className="footerHr"/>
              <h6 className="footerLink"><a href="https://github.com/Reflecti" target="_blank">Github repository</a></h6>
            </Col>
            <Col xs={12} md={4}>
              <hr className="footerHr hidden-md hidden-lg" />
              <span>THE AUTHOR</span>
              <hr className="footerHr"/>
              <h6 className="footerLink"><a href="">Github</a></h6>
              <h6 className="footerLink"><a href="">LinkedIn</a></h6>
              <h6 className="footerLink"><a href="">Twitter</a></h6>
            </Col>
            <Col xs={12} md={4}>
              <hr className="footerHr hidden-md hidden-lg" />
              <span>CONTACTS</span>
              <hr className="footerHr"/>
              <h6 className="footerLink"><a href="">Send email</a><br/></h6>
              <h6 className="footerLink">
                <a href="/privacypolicy" target="_blank">Legal Information</a>
              </h6>
            </Col>
          </Row>
        </Col>
      </div>
    );
  }
}
