import React from "react";
import { render } from 'react-dom'
import { Button, Modal } from 'react-bootstrap'
import LoginModalContent from './LoginModalContent'

export default class LoginButton extends React.Component {
  constructor(props){
    super(props)

    this.state = { showModal: false}
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  render() {

    return(
      <div className="centeredPrompt">
        <Button onClick={this.open} id="logInBtn" bsStyle="success navButton" bsSize="small">Log Ins</Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title className="text-center">Log In</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <LoginModalContent />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
