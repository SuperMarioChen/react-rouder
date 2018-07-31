import React, { Component } from 'react'
import {Link,NavLink,Route,Redirect,Switch} from 'react-router-dom'

import Pinglun from './message-view/pinglun'
import Jianxin from './message-view/jianxin'
import Guanzhu from './message-view/guanzhu'

export default class Look extends Component {
  render() {
    let { match} = this.props;
    return (
      <React.Fragment>
        <h2>消息页面</h2>
        <div className="content">
          <div className="left-slider">
            <ul className="watch-list">
              <li>
                <NavLink activeClassName='ketang' to={`${match.url}/pinglun`}>
                  <img alt="" src="https://upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120" />
                  <span>评论</span>
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName='ketang' to={`${match.url}/jianxin`}>
                  <img alt="" src="https://upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120" />
                  <span>简信</span>
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName='ketang' to={`${match.url}/guanzhu`}>
                  <img alt="" src="https://upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120" />
                  <span>关注</span>
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="right-slider">
            <h3>展示页</h3>
            <Switch>
              <Route path={`${match.url}/pinglun`} component={Pinglun} />
              <Route path={`${match.url}/jianxin`} component={Jianxin} />
              <Route path={`${match.url}/guanzhu`} component={Guanzhu} />
              <Redirect from={`${match.url}`} to={`${match.url}/pinglun`} />
            </Switch>
 
          </div>
        </div>
      </React.Fragment>
    )
  }
}
