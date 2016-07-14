import React from "react";
import { render } from 'react-dom'
import { Button, Modal, Form, FormGroup, Col, FormControl, Checkbox, ControlLabel, Well } from 'react-bootstrap'
import auth from '../auth'

export default class LoginModalContent extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      email: '',
      password: ''
    }

    this.onLoginSubmit = this.onLoginSubmit.bind(this);
  }

  onLoginSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    if (!this.state.email.length || !this.state.password.length) return;
    auth.login(this.state.email, this.state.password);
    this.setState({email: '', password: ''})
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
              <FormControl type="email" placeholder="Email" onChange={e => this.setState({email: e.target.value})} />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={2}>
              Password
            </Col>
            <Col sm={10}>
              <FormControl type="password" placeholder="Password" onChange={e => this.setState({password: e.target.value})} />
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
              <Button onClick={this.onLoginSubmit} id="submitButton" bsStyle="success">
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
