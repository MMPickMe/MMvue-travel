<template>
  <div class="main">
  <header class="header">
  	 <i class="iconfont icon-back"></i>
  	 <input type="search" name="" id="" value="" placeholder="输入城市、景点、游玩主题"/>
  	 <i class="iconfont icon-search"></i>
  	 <span>{{city}}</span>
  	 <router-link to="/city" class="iconfont icon-down"></router-link>
  </header>
   <Banner></Banner>
   <BanNAv></BanNAv>
   <HotSubmit></HotSubmit>
   <Week></Week>
    
  </div>
</template>

<script>
import Banner from './home/Banner'
import BanNAv from './home/BanNAv'
import HotSubmit from './home/HotSubmit'
import Week from './home/Week'
import {mapState} from 'vuex'
export default {
  name: 'Home',
  components:{
  	Banner,
  	BanNAv,
  	HotSubmit,
  	Week,
  	
  },
 computed:{
 	...mapState(['city'])
 	
 }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("../assets/css/public.css");
	.header{
		width: 100%;
		height: 2rem;
		background: #00bcd4;
		position: relative;
	}
	input{
		width: 70%;
		height: 1.4rem;
		border: 0;
		position: absolute;
		top: 0.3rem;
		left: 2rem;
		border-radius: 0.3rem;
		text-indent: 1.6rem;
		}
	.icon-back{
		color: #fff;
		font-size: 1.6rem;
		line-height: 2rem;
		height: 2rem;
		width:5%;
		position: absolute;
	}
	.icon-search{
		color: #ccc;
		font-size: 1rem;
		position: absolute;
		left: 2.2rem;
		top: 0.5rem;
	}
	.icon-down{
			color: #fff;
		font-size: 1rem;
		position: absolute;
		top: 0.5rem;
		right: 0.3rem;
	}
	span{
		width: 3rem;
		height: 0.8rem;
		line-height: 0.8rem;
		color: #fff;
		font-size: 0.6rem;
		position: absolute;
		text-align: center;
		right:6%;
		top: 0.5rem;
		
	}

</style>
