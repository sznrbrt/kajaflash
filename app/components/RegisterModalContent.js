import React from "react";
import { render } from 'react-dom'
import { Button, Modal, Form, FormGroup, Col, FormControl, Checkbox, ControlLabel, Well } from 'react-bootstrap'
import auth from '../auth'

export default class RegisterModalContent extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      email: '',
      name: '',
      password1: '',
      password2: ''
    }

    this.onRegisterSubmit = this.onRegisterSubmit.bind(this);
  }

  onRegisterSubmit(event) {
    event.preventDefault();
    if (!this.state.email.length || !this.state.password1.length) return;
    if (!this.state.password1 || !this.state.password2) return console.log('Password do not match!');
    auth.register(this.state.name, this.state.email, this.state.password1);
    this.setState({email: '', password: ''})
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
              <FormControl type="email" placeholder="Email" onChange={e => this.setState({email: e.target.value})} />
            </Col>
          </FormGroup>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={3}>
              Name
            </Col>
            <Col sm={9}>
              <FormControl type="name" placeholder="Name" onChange={e => this.setState({name: e.target.value})} />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={3}>
              Password
            </Col>
            <Col sm={9}>
              <FormControl type="password" placeholder="Password" onChange={e => this.setState({password1: e.target.value})} />
            </Col>
          </FormGroup>
          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={3}>
              Password again
            </Col>
            <Col sm={9}>
              <FormControl type="password" placeholder="Password again" onChange={e => this.setState({password2: e.target.value})} />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col sm={12}>
              <Button onClick={this.onRegisterSubmit} id="registerButton" bsStyle="success">
                Register
              </Button>
            </Col>
            <Col sm={12} className="text-center">
              <div className="orSeparator">or</div>
            </Col>
            <Col sm={12}>
              <Well className="centeredPrompt" id="existingUserWell">
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
