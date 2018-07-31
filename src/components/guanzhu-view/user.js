import React, { Component } from 'react'
import Axios from 'axios';

export default class UserInfo extends Component {

  static defaultProps = {
    id: 'XXXXX',
    title: 'XXXXX'
  }

  
  render() {
    console.log(this.props)
    
    return (
      <div>
        <h3>这里展示用户的信息</h3>
        <p>姓名:{this.props.title}</p>
        <p>id:{this.props.id}</p>
      </div>
    )
  }
}
