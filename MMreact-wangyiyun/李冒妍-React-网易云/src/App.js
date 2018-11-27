import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import $jquery from 'jquery';

import { NavLink } from 'react-router-dom';
import Router from './Router';

class App extends Component {
    render() {
        return ( 
        	<div className = 'App' >
            <div className = "topfixed" >
            <header >
            <i className = "iconfont icon-wangyiyunyinle" > < /i> 
            <span > 网易云音乐 < /span> 
            <span className = 'download' > 下载APP < /span> 
            </header>

            <div className = 'nav' >
            <NavLink to = '/' exact activeClassName = 'act' > 推荐音乐 </NavLink>
            <NavLink to = '/hot' activeClassName = 'act' > 热歌榜 < /NavLink> 
            <NavLink to = '/search'activeClassName = 'act' > 搜索 < /NavLink> 
            </div>

            </div>
            <Router></Router >
            </div>
        );


    }
}

export default App;