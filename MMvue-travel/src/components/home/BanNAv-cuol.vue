<template>
  <div class="main">
	  <div class="banNAv">
	  	  <div class="swiper-container" id="swiper1">
	        <div class="swiper-wrapper">
	            <div class="swiper-slide" v-for="item in iconList">
	            	
	            		<a href="" >
	            			<img :src="item.imgUrl"/>
	            			<p>景点门票</p>
	            		</a>
		            	
		            	
	            	
	            	
	            	
	            </div>
	           <div class="swiper-slide" v-for="item in iconList">
	            	
	            		<a href="" >
	            			<img :src="item.imgUrl"/>
	            			<p>景点门票</p>
	            		</a>
		            	
		            	
	            	
	            	
	            	
	            </div>
	          
	            
	        </div>
	        
	         <!-- Add Pagination -->
         <div class="swiper-pagination" id="swiper-p1"></div>
	    </div>
	  </div>
   
   
    
  </div>
</template>



<script>
	import Swiper from 'swiper';
	export default {
	  name: 'BanNAvCuol',
	 
	  data:function(){
		  return {
		  	
		  	iconList:[]
		  	}
	  },
	   mounted(){
	  	this.slider(),
	  	this.$axios('../../../static/data/index.json').then((res)=>{
						this.iconList=res.data.data.iconList
							console.log(this.iconList)				
							console.log(this.iconList[0].imgUrl)
						})
	  },
	  methods:{
	  	slider:function(){
	  		var swiper1 = new Swiper('#swiper1', {
		       pagination: '.swiper-pagination',
		        slidesPerView: 4,
		        slidesPerColumn: 2,
		        paginationClickable: true,
		        spaceBetween: 30
		    });    
	  	}
	  }
	  
	}

</script>



	

	
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

	.banNAv{
		width: 100%;
		height: 16rem;
	
	}
.swiper-slide{
	height: 7rem;
	width: 25%;
}
	.banNAv  a{
		display: inline-block;
		width: 100%;
		height: 7rem;
		
		position: relative;
	}
	.banNAv  a img{
		
		width: 64%;
		position: absolute;
		left: 18%;
		top: 12%;
		
	}
	.banNAv a p{
		width: 100%;
		text-align: center;
		font-size: 0.8rem;
		position: absolute;
		left: 0%;
		top: 70%;
		
	}
 	.banNAv .swiper-container {
        width: 100%;
        height: 16rem;
        
    }
   
.swiper-container-horizontal>.swiper-pagination-bullets {
	bottom: 0.4rem;
   
}
  
</style>
