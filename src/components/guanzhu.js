import React, { Component } from 'react'
import { Link, NavLink,Route } from 'react-router-dom'
import UserInfo from './guanzhu-view/user'
import axios from 'axios'
let url = 'https://www.easy-mock.com/mock/5b4026faf38b6529a0d572a3/jianshu/look'
export default class Look extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list:[]
    };
  }
  
  componentDidMount() {
    axios(url).then(({data}) => {
      this.setState({
        list: data.data.list
      })
    }).catch((e) => {
      console.log(e)
    })
  }
  

  render() {
    let {match} = this.props;
    let {list} = this.state;

    let content = <ul className="watch-list">
      {this.state.list.map((item) => {
        return (
          <li key={item.id}>
            <NavLink activeClassName="ketang" to={`${match.url}/${item.id}`}>
              <img src={item.imgUrl} />
              <span>{item.title}</span>
            </NavLink>
          </li>
        )
      })}
    </ul>

    return (
      <React.Fragment>
        <h2>关注页面</h2>
        <div className="content">
          <div className="left-slider">
            {
              this.state.list.length ? content : <p>loading...</p>
            }
          </div>
          <div className="right-slider">
            <h3>展示页</h3>
            {/* 这种写 /路径/:变量 => /abc/1  /abc/2 */}
            {/* 冒号后面的变量来接收二级路径的值*/}
            {/* params */}
            {/* <Route path={`${match.url}/:abc`} component={UserInfo} /> */}
            {/* 写render渲染的是提供的函数，函数也是组件，内部会把match传给函数的 */}
            <Route path={`${match.url}/:abc`} render={(props) => {//这里的props只是一个形参可以写成任何值
            ////这里的props只是一个形参可以写成任何值component会自动传 render方法需要一个形参接收到这个地址栏信息对象
              let {abc} = props.match.params;
              console.log(abc)
              let item = list.find(item => item.id === +abc);
              console.log(item)
              //每次点击地址栏的二级路径的值变了 abc对应的值变了 筛选对应id的数据 传到下一集 通过改变props来使自己render执行
              return <UserInfo {...item} {...props}></UserInfo>
            }} />
            {/* 不是Route生成的没有match等属性 */}
            <Route exact path={`${match.url}`} render={() => {
              return <h3>这是没有匹配到任何一个人的信息的页面</h3>
            }} />
          </div>
        </div>
      </React.Fragment>
    )
  }
}
