<template>
  <div class="header">
    <p>{{ msg }}</p>
   
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.header{
		width: 100%;
		height: 2rem;
		background: #00bcd4;
	}

</style>
