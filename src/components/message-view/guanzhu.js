import React, { Component } from 'react'

export default class MgUanzhu extends Component {
  render() {
    return (
      <div>
        我是关注页面,{this.props.match.url}
      </div>
    )
  }
}
