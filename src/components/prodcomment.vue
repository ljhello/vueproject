<template>
  <div>
    <comment :id="id"></comment>
  </div>
</template>
<script>
import comment from './comment.vue'
export default {
    components:{
       comment
    },
  data:function(){
      return {
          id:0
      }
  },
  created:function(){
      this.id=this.$route.params.id;
  }
}
</script>
<style scoped>

</style>
