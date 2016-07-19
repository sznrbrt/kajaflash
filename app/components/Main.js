import React from "react";
import ReactDOM from 'react-dom'
import NavBar from './NavBar'
import Landing from './Landing'
import UserMain from './UserMain'
import auth from '../auth'

// Regex to hide react-bootstrap props error logs ^((?!Unknown props).)+$

export default class Main extends React.Component {
  constructor(props){
    super(props);

    this.state = { loggedIn: auth.loggedIn() }
    this.updateAuth = this.updateAuth.bind(this)
  }

  updateAuth(loggedIn) {
    this.setState({
      loggedIn
    })
  }

  componentWillMount() {
    auth.onChange = this.updateAuth;
    auth.authenticate();
  }

  render() {
    return(
      <div>
        <NavBar isLoggedIn={this.state.loggedIn} />
        {this.props.children}
      </div>
    );
  }
}
