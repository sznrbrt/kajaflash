import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import Main from "./components/Main.js"
import Landing from './components/Landing'
import UserMain from "./components/UserMain.js"
import Ordering from "./components/Ordering.js"

require('./main.css');

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Landing} />
      <Route path="/mainpage" component={UserMain}/>
      <Route path="/ordering" component={Ordering}/>
    </Route>
  </Router>,
  document.getElementById('root'));
