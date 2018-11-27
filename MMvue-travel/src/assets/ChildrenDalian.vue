<template>
  <div class="main">
  <div class="">
  	
  	
  	
  	
  </div>
  
  
   <div class="swiper-container banner" id="swiper2">
   	<router-link to='/' class="iconfont icon-back"></router-link>
        <div class="swiper-wrapper">
            <div class="swiper-slide"><img :src="hotsubmit.gallaryImgs[0]"/></div>
            <div class="swiper-slide"><img :src="hotsubmit.gallaryImgs[1]"/></div>
            <div class="swiper-slide"><img :src="hotsubmit.gallaryImgs[2]"/></div>
            <!--<div class="swiper-slide">Slide 2</div>
            <div class="swiper-slide">Slide 3</div>
            -->
           
            
        </div>
        <i class="iconfont icon-tu"></i>
        <p>{{hotsubmit.sightName}}</p>
        <!-- Add Pagination -->
        <div class="swiper-pagination" id="swiper2P"></div>
        
    </div>
  
  
  
  
    <ul>
    	<li v-for="item,index in hotsubmit.categoryList" @click="ccc(index,item)">
    		<i class="iconfont icon-piaoyuan"></i>
    		<span >{{item.title}}</span>
    		<div class="hr"></div>
		    	
		    	<div class="childrenli" v-for="item2,index2 in item.children" v-show="item.flag" @click.stop="ccc(index2,item2)">
			    		<i class="iconfont icon-piaoyuan"></i>
			    		<span >{{item2.title}}</span>
			    		<div class="hr"></div>
							    	<div v-show="item2.flag" class="childrenli3" v-for="item3,index3 in item2.children">
							    		<i class="iconfont icon-piaoyuan"></i>
							    		<span>{{item3.title}}</span>
							    		<div class="hr"></div>
							    	</div>	
			    </div>	
		    	
			    	
			   
    	</li>
    	
    </ul>
   
    
  </div>
</template>

<script>
export default {
  name: 'ChildrenDalian',
   data:function(){
		  return {
		  	msg:'hello vue',
		  	hotsubmit:[],
		  	flag2:true,
		  	flag3:true
		  	
		  	}
	  },
	      mounted(){
	  	this.slider(),
					this.$axios('../../static/data/detail.json').then((res)=>{
						this.hotsubmit=res.data.data,
							//console.log(this.hotsubmit)				
							
						})
					
					},
					
			  methods:{
			  	ccc:function(i,item){
			  	console.log(item.flag);
			  		item.flag=!item.flag
		
			  		
			  	},
			  	
	  	slider:function(){
	  		setTimeout(function(){
	  			var swiper2 = new Swiper('#swiper2', {
		       
			        pagination: '.swiper-pagination',
			        paginationType: 'fraction'
					    });
	  		},1)
	  		    
	  	}
	  },
	 
	
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import url("../assets/css/swiper.min.css");
	@import url("../assets/css/public.css" );
	.banner{
		position: relative;
	} 
		#swiper2 {
        width:100%;
        height: 13rem;
        position: relative;
       
    }
    #swiper2 .swiper-slide {
 				height: 13rem;
        background: red;
        
    }
     #swiper2 .swiper-slide img{
     	width: 100%;
     	height: 100%;
     	display: block;
     }
    #swiper2P{
    	border-radius: 0.5rem;
    	width: 3.2rem;
    	height: 1rem;
    	position: absolute;
    	font-size:0.6rem;
    	left:85%;
    	bottom: 0.5rem;
    	color: white;
    	text-align: right;
    	background-color: rgba(0,0,0,0.5);
    	
    }
    
    
	
	.icon-back{
		width: 2rem;
		height: 2rem;
		border-radius: 50%;
		position: absolute;
		left: 0.5rem;
		top: 0.5rem;
		color: #fff;
		font-size: 1.8rem;
		background: rgba(0,0,0,0.8);
		text-decoration: none;
		z-index: 22;
	}
	.banner p{
		position: absolute;
		left: 0.5rem;
		bottom: 0.3rem;
		color: #fff;
		font-size:1rem;
		z-index: 22;
	}/**/
	.icon-tu{
		
		position: absolute;
		left: 87%;
		bottom: 0.6rem;
		color: white;
		font-size: 0.6rem;
		z-index: 222;
		
	}
	.hr{
		width: 100%;
		height: 0.1rem;
		background: #eaeaea;
		
	}

	.childrenli:nth-last-child>.hr{
		display: none;
		
	}
	li:nth-last-child>.hr{
		display: none;
		
	}
	li,.childrenli,.childrenli3{
		width: 100%;
		
		/*border-bottom: 0.1rem solid #eaeaea;*/
		line-height: 2rem;
		font-size: 1rem;
	}
	.childrenli{
		margin-left: 3%;
	}
	.childrenli3{
		margin-left: 6%;
	}
.icon-piaoyuan{
		display: inline-block;
		width: 1rem;
		height: 1rem;
		line-height: 1rem;
		font-size: 0.3rem;
		text-align: center;
		border-radius: 50%;
		background: #00bcd4;
		margin-left: 1rem;
		margin-top: 0.5rem;
		color: #fff;
		transform: rotate(30deg);
		
	}

</style>
