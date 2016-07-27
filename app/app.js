import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import Main from "./components/Main.js"
import Landing from './components/MainPage/Landing'
import UserMain from "./components/UserMainPage/UserMain.js"
import Ordering from "./components/OrderPage/Ordering.js"

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
