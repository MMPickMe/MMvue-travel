<template>
  <div class="main" @mousewheel="mousewheel">
  
    <header id="tops">
    	<router-link to='/' class="iconfont icon-back"></router-link>
    	
    	<div class="choose">选择城市</div>
    	<input type="text" id="startSearch" v-model="mess" @keyup="finds" placeholder="输入城市名或拼音" value="" />
    
    </header>
    
    <div class="kong"></div>
    
    
    
   
    	
   
    <!--==================================================-->
    <div id="ff" class="find">
				<ul>
					<li v-show="findlist.length==0">不好意思！没找到</li>
					<li v-for="item in findlist" @click="changeCurrect(item.name)">{{item.name}}</li>
				</ul>
		</div>
    <!--==================================================-->
    
    
    
     <div id="theWholeOne" class="">
     	
     	
    <div class="now" id="BBB">
    	<div class="biaoti">当前城市</div>
    	<a href="">{{city}}</a>
    </div>
   	<div class="hot">
    	<div class="biaoti">热门城市</div>
	    	<div class="haveA" v-for="item,index in hotsubmit.hotCities">
	    		<p @click="changeCurrect(item.name)">{{item.name}}</p>
	    	</div>
    </div>
    
    <!--==================================================-->
    
    
    <!--abcdefg-->
    <div id="list">
    	<ul class="Abc" v-for="item,key,index in hotsubmit.cities" :id="key">
    	
	    	<div class="biaoti" >{{key}}</div>
	    	<li v-for="item2,key2,index2 in item" :id="item2.spell">
	    		<p @click="changeCurrect(item2.name)">{{item2.name}}</p>
	    	</li>
	    	
	    	
    	</ul>
    </div>
    
    <div class="right" id="nav">
    	<p class="" :id="key" v-for="item,key,index in hotsubmit.cities" @click.stop="clic(index)">
    		{{key}}
    	</p>
	    		
	   </div>
   
    
  </div>
  
  
  
   </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'City',
  data:function(){
		  return {
		  	msg:'city',
		  	mess:'',
		  	dist:[],//ABCD
				fist:[],
				tops:[],
		  	hotsubmit:[],
		  	currentCity:'北京',
		  	firstValue:[],
		  	arrValue:[],
		  	findlist:[],
		  	}
	  },
 computed:{
 	...mapState(['city'])
 	
 },
	    
	  methods:{
	  	clic(index){
	  		var top=list.children[index].offsetTop-parseFloat(window.getComputedStyle(tops).height);
	  		document.documentElement.scrollTop= top;

				for(var i=0;i<this.tops.length;i++){
					document.getElementsByClassName('right')[0].children[i].className='';
		
				}
				document.getElementsByClassName('right')[0].children[index].className='rgba';
	  	},
	  	changeCurrect(name){
	  		this.$store.dispatch('changeCurrect',name)
	  		this.$router.push('/')
	  		
	  
	  	},
	  	finds:function(){
	  		
	  		theWholeOne.className="disnone"
	  		
	  		
			if(this.mess!=''){
				this.findlist=[];
				document.getElementById('ff').style.display='block';
				
				for(var i=0;i<this.fist.length;i++){
					for(var n=0;n<this.fist[i].length;n++){
	
						this.k=this.fist[i][n].spell.slice(0,this.mess.length).indexOf(this.mess);
						this.m=this.fist[i][n].name.indexOf(this.mess);
						if(this.k!=-1 || this.m!=-1){
							this.findlist.push(this.fist[i][n]);
						}
					}
				}
				
			}else{
				document.getElementById('ff').style.display='none';
			}
			
			
		},
		mousewheel(ev){
			//console.log(ev)
			var t2= parseFloat(window.getComputedStyle(tops).height)
			var arrAlls=Array.from(new Set(document.getElementById('list').children));
//				console.log(arrAlls);				
			if(this.tops.length==0){
				var len=arrAlls.length;
				for(var j=0;j<len;j++){
					var List=document.getElementById('list');
					var tt=List.children[j];	
					this.tops.push(arrAlls[j].offsetTop-t2);	
				}	
			}

			var t=ev.pageY-t2
			var arrs1=[].concat(this.tops)
			arrs1.push(t);
			for(var k=0;k<arrs1.length;k++){
				for(var kk=0;kk<arrs1.length;kk++){
					var ex='';
					if(arrs1[k]<arrs1[kk]){
						ex=arrs1[k];
						arrs1[k]=arrs1[kk];
						arrs1[kk]=ex;
					}
				}
			}
			var p=arrs1.indexOf(t);
			if(p==0){
				p=0;
			}else{
				p=p-1;
			}
			for(var i=0;i<this.tops.length;i++){
				document.getElementsByClassName('right')[0].children[i].className='';
			}
			document.getElementsByClassName('right')[0].children[p].className='rgba';	
		}
//	  	{
//	  		var len=this.dist.length
//	  				for(var i=0;i<len;i++){
//	  					var obj={numb:0,name:'',top:0,arrs:[]}
//	  				console.log(i)
//				  	obj.numb=i;
//				  	var headTop=parseFloat(window.getComputedStyle(tops).height)
//				  	var top=list.children[i].offsetTop-headTop;	
//	  				obj.top=top;
//	  				var num=list.children[i].id;
//	  				obj.name=num;
//	  				obj.arrs=citiesABC[num];
//	  				this.arrValue.push(obj);
//	  				console.log(this.arrValue)
//	  				}
//	  		
//	  		
//	  	}{}
	  	
	  	
	  
	  },
	 
  mounted(){
		this.$axios('../../static/data/city.json').then((res)=>{
			this.hotsubmit=res.data.data
				//console.log(this.hotsubmit)				
				for(var item in this.hotsubmit.cities){
					this.dist.push(item);
					this.fist.push(this.hotsubmit.cities[item]);
					var List=document.getElementById('list')
					//console.log(List)
				}

			
				

			})

			
		
		}
}
</script>

<style scoped>
	.main{
		position: relative;
	}
	
	header{
		position: fixed;
		width: 100%;
		height: 4rem;
		z-index: 10;
		background: #00bcd4;
			color: #fff;
	}
	.disnone{
		display: none;
	}
	.kong{
		width: 100%;
		height: 4rem;
	}
	.choose{
		width: 100%;
		height: 2.1rem;
		font-size: 1.4rem;
		text-align: center;
	}
	.icon-back{
		height: 2.1rem;
		width: 1.5rem;
		font-size: 1.6rem;
		text-align: center;
		color: #fff;
		text-decoration: none;
		position:absolute;
		
	}
	

	input::-webkit-input-placeholder{
		 /* placeholder颜色  */
		 color: #757575;
		 /* placeholder字体大小  */
		 font-size: 0.6rem;
		 /* placeholder位置  */
		text-align: center;
	}
	input{
		width: 90%;
		margin: 0 5%;
		height: 1.7rem;
		border: 0;
		outline: none;
		border-radius: 0.3rem;
	}
	.biaoti{
		width: 100%;
		height: 1.4rem;
		line-height: 1.4rem;
		font-size: 0.8rem;
		text-indent: 0.5rem;
		border-top: 0.1rem solid #ccc;
		border-bottom: 0.1rem solid #ccc;
		background: #eee;
		
		
	}
	.haveA{
		display: inline-block;
		width: 28%;
		margin: 0.5rem 0 0.5rem 2% ;
	}
	.haveA p{
	
		height: 1.4rem;
		width: 100%%;
		
	
		color: #000;
		text-align: center;
		border-radius: 0.3rem;
	
		border: 0.08rem solid #ccc;
	}
	.now a {
		display: block;
		height: 1.4rem;
		width: 30%;
		
		margin: 0.5rem 2%;
		color: #000;
		text-align: center;
		border-radius: 0.3rem;
		text-decoration: none;
		border: 0.08rem solid #ccc;
	}
	li{
		width: 100%;
		height: 1.8rem;
		line-height: 1.8rem;
		font-size: 0.8rem;
		text-indent: 0.5rem;
	
		border-bottom: 0.05rem solid #ccc;
	
	}

	.Abc{
		position: relative;
	}
	.right{
		position: fixed;
		right: 0.3rem;
		top: 4.8rem;
		width: 1rem;
		height: 1rem;
		display: flex;
		flex-wrap: wrap;
	}
	.right>p{
		
		width: 1rem;
		height: 1.3rem;
		color: #87dfff;
		text-align: center;
	}
	
	.rgba{
		background: #ccc;
	}
	
	.find{
		display: none;
		width:100%;

	}
	.find li{
		line-height: 2rem;
		color: #000;
		
		border-bottom: 1px solid #ccc;
	}
</style>


<!--//	  	startSearch(){
////	  			this.firstValue.push(startSearch.value.substr(startSearch.value.length-1,1));
//
//	  	this.firstValue.push(startSearch.value);
//	  	
//	  			var citiesABC=this.hotsubmit.cities
////---this.arrValue  obj={numb:0,name:'',top:0,arrs:[]}----------------------
//	  			if(this.arrValue.length==0){
//	  				//console.log("this.arrValue.length==0");
//	  				var len=document.getElementsByClassName('Abc').length
//	  				for(var i=0;i<len;i++){
//	  					var obj={numb:0,name:'',top:0,arrs:[]}
//	  	//console.log(i)
//				  	obj.numb=i;
//				  	var headTop=parseFloat(window.getComputedStyle(tops).height)
//				  	var top=list.children[i].offsetTop-headTop;	
//	  				obj.top=top;
//	  				var num=list.children[i].id;
//	  				obj.name=num;
//	  				obj.arrs=citiesABC[num];
//	  				this.arrValue.push(obj);
//	  				}
//	  				
//	  				//console.log(this.arrValue);
//	  			}
//	  			//console.log(this.firstValue)
//	  			//console.log(this.arrValue[0].name,this.firstValue[0])
//	  			for(var i in this.arrValue){
//	  				if(this.arrValue[i].name==this.firstValue[0].toUpperCase()){
//	  					
//	  					document.documentElement.scrollTop= this.arrValue[i].top;
//	  					
//	  					//console.log(this.arrValue[i].numb)
//	  					//console.log(this.arrValue[i].arrs)
//	  					var sh=0;
//	  					if(this.firstValue[1]){
//	  						for(var j in this.arrValue[i].arrs){
//	  						//console.log(j)
//	  						var zimu=this.arrValue[i].arrs;
//	  						//*this.arrValue[i].numb alashanmeng
//	  						var oneLiTop=alashanmeng.offsetTop-akesu.offsetTop;
//	  							if(zimu[j].spell.substr(0,2)==this.firstValue[1]){
//	  								sh++;
//	  					}
//	  							console.log("aaa==========="+sh)
//	  							document.documentElement.scrollTop= this.arrValue[i].top+oneLiTop*(j-sh)+aba.offsetTop;
//	  						//console.log(zimu[j].spell.substr(0,2))
//	  						}
//	  						
//	  						
//	  					}
//	  					
//	  				}
//	  				
//	  			}	  			
//	  		}-->
