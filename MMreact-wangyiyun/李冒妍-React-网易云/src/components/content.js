import React,{Component} from 'react';
import $jquery from 'jquery';



class Content extends React.Component{
	
	constructor(){
		super()
		this.state={
			arr:[]
		}
	}
	componentDidMount (){
		this.res = $jquery.get(this.props.source,function(res){
			console.log(res)
			this.setState({
				arr:res
			})
			
		}.bind(this))
	}
	
	render(){
		return <div>
		<div className="Hot_top">
		<div className="Hot_bg"></div>
		<p>更新日期：10月25日</p>
		
		</div>
		
		<ul className="newest hotmusic">{this.state.arr.map((item,index)=>{
			
			return <a href="" >
				<p className="title">{item.title}<span className="banben">{item.banben}</span></p>
				<p className="actor"><div className="blo-i"></div><span>{item.actor}</span></p>
				<i className="start"></i>
				<div className="No">{item.No}</div>
				</a>;	
			})}
		
		</ul>
		
		<a href="" className="findmore">查看完整榜单></a>
		
		
		
		
		
		
		
		
		
		
		</div>
	}
}
Content.defaultProps={
		source:'http://localhost:3000/datahot.json',
		
	}
export default Content;