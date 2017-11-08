<template>
  <div>
    <div id="titt">
       <h3>{{msg.title}}</h3>
       <p>
           <span>发表时间：{{msg.add_time | datafmt('YYYY-MM-DD')}}</span>
           <span class="fffft">浏览量：{{msg.click}}</span>
       </p>
    </div>
    <div id="content" v-html="msg.content">

    </div>
  </div>
</template>
<script>
import common from '../kits/common.js'
export default {
  data:function(){
      return {
          id:0,
          msg:{}
      }
  },
  created:function(){
      this.id=this.$route.params.id;
      this.getinfo();
  },
  methods:{
       getinfo:function(){
           var url=common.apicommon+'/api/getnew/'+this.id;
           this.$http.get(url).then(function(res){
               //console.log(res.body.message);
               this.msg=res.body.message[0];
           })
       }
  }
}
</script>
<style scoped>
#titt,#content{
    padding: 8px;
}
#titt h3{
    color:brown;
}
#titt p{
    margin-top: 16px;
}
#titt p span{
    color: #bbb;
}
.fffft{
    margin-left: 16px;
}


</style>
