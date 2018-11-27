import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {NavLink} from 'react-router-dom';
import Router from './Router'

class App extends Component {
  render() {
  	return(
	  	<div className='App'>
		  	<NavLink to='/' exact>点击前往Home</NavLink>
		  	<NavLink to='/c'>点击前往Content</NavLink>
		  	
		  	<Router></Router>
  		</div>
    );
     
    
  }
}

export default App;
