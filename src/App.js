import React, { Component } from 'react';
import { Link,NavLink, Route, Redirect, Switch} from 'react-router-dom'
import './style/index.css'

import Find from './components/find'
import Guanzhu from './components/guanzhu'
import Message from './components/message'

class App extends Component {

  render() {

    return (
      <div id="main">
        <div className="header-box">
          <ul className="nav-list">
            <li>
              <NavLink exact activeClassName="miaov" to="/" >发现</NavLink>
            </li>
            <li>
              <NavLink activeClassName="miaov" to="/guanzhu" >关注</NavLink>
            </li>
            <li className="message">
              <NavLink activeClassName="miaov" to="/message" >消息</NavLink>
            </li>
          </ul>
        </div>

        <div className="container">
          <Switch>
            <Route exact path="/" component={Find} />
            <Route path="/guanzhu" component={Guanzhu} />
            <Route path="/message" component={Message} />
            <Redirect to="/" />
          </Switch>
        </div>

      </div>
    );
  }
}

export default App
