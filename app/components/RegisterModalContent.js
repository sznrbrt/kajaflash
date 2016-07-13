import React from "react";
import { render } from 'react-dom'
import { Button, Modal, Form, FormGroup, Col, FormControl, Checkbox, ControlLabel, Well } from 'react-bootstrap'

export default class RegisterModalContent extends React.Component {
  constructor(props){
    super(props)
  }


  render() {

    return(
      <div className="">
        <Form horizontal>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={3}>
              Email
            </Col>
            <Col sm={9}>
              <FormControl type="email" placeholder="Email" />
            </Col>
          </FormGroup>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={3}>
              Name
            </Col>
            <Col sm={9}>
              <FormControl type="name" placeholder="Email" />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={3}>
              Password
            </Col>
            <Col sm={9}>
              <FormControl type="password" placeholder="Password" />
            </Col>
          </FormGroup>
          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={3}>
              Password again
            </Col>
            <Col sm={9}>
              <FormControl type="password" placeholder="Password" />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col sm={12}>
              <Button type="submit" id="submitButton" bsStyle="success">
                Register
              </Button>
            </Col>
            <Col sm={12} className="text-center">
              <div className="orSeparator">or</div>
            </Col>
            <Col sm={12}>
              <Well className="centeredPrompt" id="newUserWell">
                Already have an account? <br />
              <Button bsStyle="link">Log In</Button>
              </Well>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
}
