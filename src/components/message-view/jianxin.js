import React, { Component } from 'react'

export default class Mjianxin extends Component {
  render() {
    return (
      <div>
        我是jianxin页面,{this.props.match.url}
      </div>
    )
  }
}
