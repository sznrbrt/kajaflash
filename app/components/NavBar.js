import React from "react";
import { render } from 'react-dom'
import { Button, Navbar, NavItem, NavDropdown, MenuItem, Nav } from 'react-bootstrap';
import Logo from './Logo'

export default class NavBar extends React.Component {
  constructor(props){
    super(props)

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
                <Button id="logInBtn" bsStyle="success navButton" bsSize="small">Log In</Button>
              </li>
              <li>
                <Button id="registerBtn" bsStyle="success navButton" bsSize="small">Register</Button>
              </li>
              {/*<NavItem id="logInBtn" className="navButton" ventKey={1} href="#">Log In</NavItem>
              <NavItem id="registerBtn" className="navButton" ventKey={2} href="#">Register</NavItem>*/}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
