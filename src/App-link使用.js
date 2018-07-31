import React, { Component } from 'react';
import {Link} from 'react-router-dom'
// 导航 a标签 中写上路径
// 路径对应的组件

/* 
  Link 组件 生成导航标签 a的

    传参
      to 目标导航路径 string '/about'
      to 目标导航对象 object 
        pathname 目标导航路径
        search  ?
        hash  #
*/

class App extends Component {
  
  render() {
    
    return (
      <div>
        <ul>
          <li>
            <Link to="/?a=1#456">首页</Link>
          </li>
          <li>
            <Link to={{
              pathname: '/about',
              search: '?sort=name',
              hash: '#the-hash'
            }}>about</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default App
