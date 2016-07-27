import React from "react";
import { render } from 'react-dom'
import { Button, Modal } from 'react-bootstrap'
import LoginModalContent from './LoginModalContent'
import { browserHistory } from 'react-router'
import auth from '../../auth'

export default class LogoutButton extends React.Component {
  constructor(props){
    super(props)

    this.onLogoutSubmit = this.onLogoutSubmit.bind(this);
  }

  onLogoutSubmit() {
    event.preventDefault();
    auth.logout((isLoggedout) => {
      if(isLoggedout) {
        console.log('logout');
      }
    });
  }

  render() {

    return(
      <div className="centeredPrompt">
        <Button onClick={this.onLogoutSubmit} id="logInBtn" bsStyle="success navButton" bsSize="small">Log Out</Button>
      </div>
    );
  }
}
