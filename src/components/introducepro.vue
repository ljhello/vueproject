<template>
  <div>
      <h4 class="titlepic">{{list.title}}</h4>
      <p class="linepic"></p>
      <p v-html="list.content" class="contentpic"></p>
  </div>
</template>
<script>
import common from '../kits/common.js'
export default {
   data:function(){
       return {
           id:0,
           list:{}
       }
   },
   created:function(){
       this.id=this.$route.params.id;
       this.getcomment();
   },
   methods:{
       getcomment:function(){
           var url=common.apicommon+'/api/goods/getdesc/'+this.id;
           this.$http.get(url).then(function(res){
               this.list=res.body.message[0];
           })
       }
   }
}
</script>
<style scoped>
.titlepic{
    color:crimson;
    padding: 5px;
}
.linepic{
    height: 1px;
    border-bottom: 1px solid #ccc;
}
.contentpic{
    padding: 5px;
}
</style>
