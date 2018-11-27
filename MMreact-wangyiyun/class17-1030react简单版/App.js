import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {NavLink} from 'react-router-dom';
import Router from './Router'

class App extends Component {
  render() {
  	return(
	  	<div className='App'>
	  	 <header>网易云音乐</header>	
		  	<NavLink to='/' exact activeClassName='act'>点击前往Home</NavLink>
		  	<NavLink to='/c' activeClassName='act'>点击前往Content</NavLink>
		  	
		  	<Router></Router>
  		</div>
    );
     
    
  }
}

export default App;
