<template>
  <div class="main">
	  <div class="banner">
	  	  <div class="swiper-container" id="swiper0">
	        <div class="swiper-wrapper">
	            <div class="swiper-slide" v-for="item in a"><img :src="item.imgUrl"/></div>
	            
	            
	        </div>
	      
	         <!-- Add Pagination -->
         <div class="swiper-pagination" id="swiperp0"></div>
	    </div>
	  </div>
   

    
  </div>
</template>



<script>
	import axios from 'axios';//局部的写法

	import Swiper from 'swiper';
	export default {
	  name: 'Banner',
	  data:function(){
		  return {
		  	
		  	a:[]
		  	}
	  },
	  mounted(){
	  	this.slider(),

	  		this.$axios('../../../static/data/index.json').then((res)=>{
						this.a=res.data.data.swiperList
						//console.log(res.data.data)
						})
	  	
	  	
	  },
	  
	  
	  methods:{
	  	slider:function(){
	  		setTimeout(function(){
	  			var swiper0 = new Swiper('#swiper0', {
		      spaceBetween: 0,
		      loop:true,
 					autoplay: 3000,
        	autoplayDisableOnInteraction: false,
 
		      pagination: '#swiperp0',
		    });
	  		},1)
	  		    
	  	}
	  }
	  
	}

</script>



	

	
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

	.banner{
		width: 100%;
		
		
	}
.banner .swiper-container {
        width: 100%;
       
        position: relative;
        overflow: hidden;
    }
   
   .banner .swiper-slide>img{
    	width: 100%;
    	
    }
#swiperp0 .swiper-pagination-bullet-active {
    opacity: 1;
    background: #ccc;
}
</style>
