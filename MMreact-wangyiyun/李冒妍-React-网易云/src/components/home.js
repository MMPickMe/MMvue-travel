import React,{Component} from 'react';

import $jquery from 'jquery';

class Home extends React.Component{
	constructor(){
		super()
		this.state={
			arr:[],
			music:[
			{
				title:"NEVER SURRENDER",
				banben:"(剧场版《魔法少女奈叶Detonation》主题曲 / 劇場版アニメ「魔法少女リリカルなのは Detonation」主題歌)",
				actor:"水樹奈々-NEVER SURRENDER"
			},
			{
				title:"扑朔迷离 (跑得快)",
				banben:"",
				actor:"Lil Ghost小鬼-扑朔迷离 (跑得快)"
			},
			{
				title:"别BB",
				banben:"",
				actor:"CNBALLER-别BB"
			},
			{
				title:"李扯火",
				banben:"",
				actor:"李斯丹妮-李扯火"
			},
			{
				title:"原来你也在这里",
				banben:"(电视剧《原来你还在这里》主题曲)",
				actor:"周笔畅-原来你也在这里"
			},
			{
				title:"钗头凤",
				banben:"(网剧《医妃难囚》片头曲)",
				actor:"黄龄-钗头凤"
			},
			{
				title:"无尽夏",
				banben:"",
				actor:"苏妙玲-苏妙玲WAN"
			},
			{
				title:"Waste It On Me",
				banben:"",
				actor:"Steve Aoki / BTS (防弹少年团)-Waste It On Me"
			},
			{
				title:"Chain Reaction",
				banben:"",
				actor:"崔开潮-Chain Reaction"
			}
			
			
			]
			
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
		<div className="singList">推荐歌单</div>
		
		
		
		
		<div className="singerP">{this.state.arr.map((item)=>{
			return <a href="" className='singer'>
						<dt><img src={item.imgsrc} width='100%'/></dt>
						<div className="wan"><i class="iconfont icon-erji"></i>{item.num}</div>
						<p className="thisis2">{item.title}</p>
					</a>
		})}
			
		</div>
		
		
		
		<div className="singList">最新音乐</div>
		
		<ul className="newest">{this.state.music.map((item)=>{
			
			return <a href="" >
				<p className="title">{item.title}<span className="banben">{item.banben}</span></p>
				<p className="actor"><div className="blo-i"></div><span>{item.actor}</span></p>
				<i className="start"></i>
				</a>;	
			})}
		
		</ul>	
		
		<a href="" className="musicBottom">
			<h3>
				<i class="iconfont icon-wangyiyunyinle"></i>
				网易云音乐
				
			
			</h3>
			<div className="openApp">打开APP,发现更多好音乐></div>
			
			<p className="copyright">网易公司版权所有©1997-2018   杭州乐读科技有限公司运营</p>
		
		
		
		
		</a>
		
		
		
		</div>
	}
}
	Home.defaultProps={
		source:'http://localhost:3000/data.json',
		
	}
export default Home;  
