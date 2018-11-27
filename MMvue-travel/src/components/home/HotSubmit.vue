<template>
  <div class="main">
	  <div class="hot">热销推荐</div>
   	<ul class="sub">
   		<li v-for="item in hotsubmit">
   			<img :src="item.imgUrl"/><!--:src="hotsubmit[0].url"-->
   			
   			<div>
   				<h3>{{item.title}}</h3>
   				<p>{{item.desc}}</p>
   				<a href="">查看详情</a>
   			</div>
   			
   			
   		</li>
   	</ul>
   
    
  </div>
</template>



<script>
//	import axios from 'axios'//局部的写法
//axios.get('../../../static/data/home.json').then((res)=>{
//		console.log(res.data)				
//							
//	})
	export default {
	  name: 'HotSubmit',
	 
	  data:function(){
		  return {
		  	msg:'hello vue',
		  	hotsubmit:[]
		  	}
	  },
	    
	  
	 
	  mounted(){
					this.$axios('../../../static/data/index.json').then((res)=>{
						this.hotsubmit=res.data.data.recommendList
							//console.log(this.hotsubmit)				
							
						})
					
					}
			
	  
	
	  
	}

</script>



	

	
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hot{
	width: 100%;
	height: 3rem;
	line-height: 3rem;
	background: #eee;
	text-indent: 1rem;
}
	.sub li{
		width: 100%;
		height: 6.1rem;
		box-sizing: border-box;
		padding: 0.4rem;
	
		border-bottom: 0.1rem solid #eaeaea;
		display: flex;
		
	}
	.sub li>img{
		display: block;
		width: 25%;
		
	}
  .sub li>div{
   	margin-left: 0.5rem;
  } 
  .sub li>div>h3{
  	font-size: 1.1rem;
  	margin-top: 0.3rem;
  }
  .sub li>div>p{
  	font-size: 0.8rem;
  	margin: 0.6rem 0;
  	color: #ccc;
  }
  .sub li>div>a{
  	display: block;
  	width: 5.5rem;
  	height: 1.6rem;
  	line-height: 1.6rem;
  	font-size: 1.0rem;
  	background: #ff9300;
  	color: #fff;
  	text-decoration: none;
  	text-align: center;
  	border-radius: 0.3rem;
  	
  	
  }
</style>
