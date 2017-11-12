<template>
  <div>
 <mt-swipe :auto="4000">
 
  <mt-swipe-item v-for="item in imgs">
    <img :src="item.img">
  </mt-swipe-item>
   </mt-swipe>  

  </div>
</template>
<script>
export default {
  props:['imgs']
}
</script>
<style scoped>
   .mint-swipe{
		height: 222px;
	}
    .mint-swipe-item img{
		width: 100%;
	}
</style>
