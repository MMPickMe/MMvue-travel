<template>
  <div class="main">
	  <div class="week">周末去哪儿</div>
   	<ul class="sub">
   		<li v-for="item in weekendList">
   			<router-link to="/dalian" href="">
   				<img :src="item.imgUrl"/>
   			
   			
   				<h3>{{item.title}}</h3>
   				<p>{{item.desc}}</p>
   				
   			</router-link>
   			
   			
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
	  name: 'Week',
	 
	  data:function(){
		  return {
		  	msg:'hello vue',
		  	weekendList:[]
		  	}
	  },
	    
	  
	 
	  mounted(){
					this.$axios('../../../static/data/index.json').then((res)=>{
						this.weekendList=res.data.data.weekendList
							//console.log(this.weekendList)				
							
						})
					
					}

	  
	}

</script>



	

	
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.week{
	width: 100%;
	height: 3rem;
	line-height: 3rem;
	background: #eee;
	text-indent: 1rem;
}
	.sub li{
		width: 100%;

	}
	.sub li>a{
		display: block;
		text-decoration: none;
		color: #000;
		
	}
	.sub li img{
		display: block;
		width:100%;
		
	}
 
  .sub li h3{
  	font-weight: normal;
  	font-size: 1.1rem;
  	margin-top: 0.5rem;
  	text-indent: 0.5rem;
  }
  .sub li p{
  	font-size: 0.8rem;
  	margin: 0.7rem 0;
  	color: #ccc;
  	text-indent: 0.5rem;
  }
  
</style>
