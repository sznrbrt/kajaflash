import React from "react";
import { render } from 'react-dom'
import { Button, Navbar, Nav, Modal, OverlayTrigger } from 'react-bootstrap';
import Logo from './MainPage/Logo'
import LoginButton from './MainPage/LoginButton'
import RegisterButton from './MainPage/RegisterButton'
import LogoutButton from './MainPage/LogoutButton'
import { Link } from 'react-router'

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
    let loggedIn = this.props.isLoggedIn;
    let loginBtn = <li><LoginButton /></li>;
    let registerBtn = <li><RegisterButton /></li>;
    let logoutBtn = <li><LogoutButton /></li>;
    let buttons;
    if(!loggedIn) {
      buttons = [loginBtn, registerBtn];
    } else {
      buttons = [logoutBtn];
    }

    return(
      <div>
        <Navbar staticTop fluid>
          <Navbar.Header>
            <Logo />
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              {/*<li>
                <Link to="/mainpage">Mainpage</Link>
              </li>*/}
              {buttons}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
