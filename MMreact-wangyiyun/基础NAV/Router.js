import React,{Component} from 'react';
import {Route,Switch} from 'react-router-dom';


import Home from './components/home';
import Content from './components/content';
class Router extends React.Component{
	render(){
		return <div>
		<Switch>
			<Route exact path='/' component={Home}/>
			<Route  path='/c' component={Content}/>
		</Switch>
		</div>
	}
}
export default Router;