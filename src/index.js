import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter } from 'react-router-dom'

// BrowserRouter 是一个组件 可以使用history模式
//  必须把应用放在BrowserRouter这个组件中否则后续的一些路由组件功能不能使用

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();