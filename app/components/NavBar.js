import React from "react";
import { render } from 'react-dom'
import { Button, Navbar, Nav, Modal, OverlayTrigger } from 'react-bootstrap';
import Logo from './Logo'
import LoginButton from './LoginButton'
import RegisterButton from './RegisterButton'

export default class NavBar extends React.Component {
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
      <div>
        <Navbar staticTop fluid>
          <Navbar.Header>
            <Logo />
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <li>
                <LoginButton />
              </li>
              <li>
                <RegisterButton />
              </li>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
