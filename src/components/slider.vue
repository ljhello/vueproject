<template>
  <div>
 <mt-swipe :auto="4000">
 
  <mt-swipe-item v-for="item in imgs">
    <!-- <img :src="item.img"> -->
    <img v-if="item.img!=null" :src='item.img'>
    <img v-if="item.src!=null" :src='item.src'>
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
		height: 230px;
	}
    .mint-swipe-item img{
		width: 100%;
    height:100%;
	}
</style>
