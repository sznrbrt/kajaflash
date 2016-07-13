import React from "react";
import { render } from 'react-dom'
import { Button, Modal } from 'react-bootstrap'
import RegisterModalContent from './RegisterModalContent'

export default class RegisterButton extends React.Component {
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
        <Button id="registerBtn" bsStyle="success navButton" bsSize="small" onClick={this.open}>Register</Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title className="text-center">Register</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <RegisterModalContent />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
