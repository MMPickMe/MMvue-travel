<template>
  <div class="main">
	  <div class="banNAv">
	  	  <div class="swiper-container" id="swiper1">
	        <div class="swiper-wrapper">
	            <div class="swiper-slide">
	            	<div class="whole8">
	            		
		            	<a href="">
	            			<img src="../../assets/img/c_01.jpg"/><p>景点门票</p>
	            		</a>
	            		<a href="">
	            			<img src="../../assets/img/c_02.jpg"/><p>滑雪季</p>
	            		</a>
	            		<a href="">
	            			<img src="../../assets/img/c_03.jpg"/><p>泡温泉</p>
	            		</a>
	            		<a href="">
	            			<img src="../../assets/img/c_04.jpg"/><p>动植园</p>
	            		</a>
	            		
	            		<a href="">
	            			<img src="../../assets/img/c_05.jpg"/><p>游乐园</p>
	            		</a>
	            		<a href="">
	            			<img src="../../assets/img/c_6.jpg"/><p>必游榜单</p>
	            		</a>
	            		<a href="">
	            			<img src="../../assets/img/c_7.jpg"/><p>演出</p>
	            		</a>
	            		<a href="">
	            			<img src="../../assets/img/c_8.png"/><p>城市观光</p>
	            		</a>
		            	
	            	</div>
	            	
	            	
	            </div>
	            <div class="swiper-slide">
	            	<div class="whole8">
	            		<a href="">
	            			<img src="http://img1.qunarzz.com/piao/fusion/1611/a9/ffc620dbda9b9c02.png"/><p>一日游</p>
	            		</a>
	            		<a href="">
	            			<img src="../../assets/img/c_01.jpg"/><p>景点门票</p>
	            		</a>
	            	</div>
	            </div>
	          
	            
	        </div>
	        
	         <!-- Add Pagination -->
         <div class="swiper-pagination" id="swiperp1"></div>
	    </div>
	  </div>
   
   
    
  </div>
</template>



<script>
	import Swiper from 'swiper';
	export default {
	  name: 'BanNAv',
	 
	  data:function(){
		  return {
		  	
		  	iconList:[]
		  	}
	  },
	   mounted(){
	  	this.slider(),
	  	this.$axios('../../../static/data/index.json').then((res)=>{
						this.iconList=res.data.data.iconList
							//console.log(this.iconList)				
							//console.log(this.iconList[0].imgUrl)
						})
	  },
	  methods:{
	  	slider:function(){
	  		var swiper1 = new Swiper('#swiper1', {
		      spaceBetween: 0,
		       
       
        paginationClickable: true,
      
		     pagination: '#swiperp1',
		    });    
	  	}
	  }
	  
	}

</script>



	

	
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

	.banNAv{
		width: 100%;
		height: 15rem;
	
	}
	.banNAv .whole8{
		width: 100%;
		height: 14rem;
		display: flex;
		flex-wrap: wrap;
		
		
	}
	.banNAv .whole8 a{
		display: block;
		width: 25%;
		height: 7rem;
		
		position: relative;
	}
	.banNAv .whole8 a img{
		display: block;
		width: 64%;
		position: absolute;
		left: 18%;
		top: 12%;
		
	}
	.banNAv .whole8 a p{
		width: 100%;
		text-align: center;
		font-size: 0.8rem;
		position: absolute;
		left: 0%;
		top: 70%;
		
	}
 	.banNAv .swiper-container {
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
    }
  

  
</style>
