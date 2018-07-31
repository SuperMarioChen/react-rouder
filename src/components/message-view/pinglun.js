import React, { Component } from 'react'

export default class Mpinglun extends Component {
  render() {
    // let html = <h2></h2>
    // let arr =[ <h2></h2>, <h2></h2> ]
    return (
      <div>
        我是pinglun页面,{this.props.match.url}
      </div>
    )
  }
}
