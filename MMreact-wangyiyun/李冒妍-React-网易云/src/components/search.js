import React,{Component} from 'react';
class Search extends React.Component{
	
	constructor(){
		super()
		this.state={
			arr:[{name:"李荣浩贝贝"},{name:"昨日青空王一博"},{name:"金庸"},{name:"张杰新歌"},{name:"花粥"},{name:"不染"},{name:"光年之外"},{name:"歌神伯乐"},{name:"Justin Bieber"},{name:"凉生"}],
			
			classNameDis:'dis AChaCha',
			jiluArr:[],
			One:'',
			hotSearch:'hotSearch'
			
		}
	}
	arrNew=[];
	newOne='';
	keyup(event){
		this.setState({
			classNameDis:'AChaCha'
		})
		console.log(event.target.value);
		this.newOne=event.target.value;
		
		this.setState({
				One:this.newOne,
				hotSearch:'dis'
			})	
			
		if(event.keyCode==13){
			console.log(event.target.value)
			this.arrNew.push(event.target.value);
			this.setState({
				jiluArr:this.arrNew,
				One:'',
				hotSearch:'hotSearch'
			})	
			event.target.value='';
		}
		//
		//console.log(this.state.jiluArr)
	}
	clearOne(event){
		event.target.previousElementSibling.previousElementSibling.value='';
		this.setState({
			One:'',
			hotSearch:'hotSearch'
		})	

		
	}
	click(index){
		this.arrNew.splice(index,1);
		this.setState({
				jiluArr:this.arrNew
			})	
	}
	render(){
		return <div className="poiRel">
		
		
		<input type="text" className="search" placeholder="搜索歌曲、歌手、专辑" onKeyUp={this.keyup.bind(this)} />
		
		<i className="iconfont icon-search searchI"></i>
		<div className={this.state.classNameDis}  onClick={this.clearOne.bind(this)}>X</div>
		
		
		<p className="searchIng">{this.state.One}</p>
		
		
		
		
		
		
		
		
		
		<div className={this.state.hotSearch}>
			<p>热门搜索</p>
			<div>{this.state.arr.map((item)=>{
				return <a href="" className="searchMore">{item.name}</a> 	
				})
				
			}
				
			</div>
		
		</div>
		
		
		
		
			<ul>{
			this.state.jiluArr.map((item,index)=>{
				return <li className="history">
				
				
						<i className="iconfont icon-shijian "></i>
						<p>{item}</p>
						
						<i className="iconfont icon-close " onClick={this.click.bind(this,index)}></i>
					</li>
				})
			}
			</ul>
		
		</div>
	}
}
export default Search;