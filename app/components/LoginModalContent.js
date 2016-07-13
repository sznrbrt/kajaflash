import React from "react";
import { render } from 'react-dom'
import { Button, Modal, Form, FormGroup, Col, FormControl, Checkbox, ControlLabel, Well } from 'react-bootstrap'

export default class LoginModalContent extends React.Component {
  constructor(props){
    super(props)
  }


  render() {

    return(
      <div className="loginModalContent">
        <Form horizontal>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Email
            </Col>
            <Col sm={10}>
              <FormControl type="email" placeholder="Email" />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={2}>
              Password
            </Col>
            <Col sm={10}>
              <FormControl type="password" placeholder="Password" />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={4}>
              <Checkbox>Remember me</Checkbox>
            </Col>
            <Col sm={6} className="text-right">
              <Button bsStyle="link" id="forgotPassword">Forgot password?</Button>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col sm={12}>
              <Button type="submit" id="submitButton" bsStyle="success">
                Log In
              </Button>
            </Col>
            <Col sm={12} className="text-center">
              <div className="orSeparator">or</div>
            </Col>
            <Col sm={12}>
              <Well className="centeredPrompt" id="newUserWell">
                New User? <br />
                <Button bsStyle="link">Register</Button>
              </Well>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
}
