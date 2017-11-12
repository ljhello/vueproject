<template>
  <div id="picall">
   <div id="totalall">
       <div class="titleall">
          <h4>{{msg.title}}</h4>
          <div>{{msg.add_time| datafmt('YYYY-MM-DD HH:mm:ss')}}</div>
          <p></p>
       </div>
       
       <div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" v-for="(item, index) in list">
                     <img class="preview-img" :src="item.src" height="100" @click="$preview.open(index, list)">  
                    </li>
    
		        </ul> 
		</div>




       <div v-html="msg.content" id="xxxi"></div>
   </div>

   <div class="comment-ft">
      <comment :id='cataid'></comment>
   </div>
  </div>
</template>
<script>
import comment from './comment.vue'
import common from '../kits/common.js'
export default {
    components:{
       comment
    },
  data:function(){
      return {
          cataid:this.$route.params.cateid,
          msg:{},
          list: []
      }
  },
  created:function(){
     this.getpicinfo();
     this.getphotos();
  },
  methods:{
      getpicinfo:function(){
          var url=common.apicommon+'/api/getimageInfo/'+this.cataid;
          this.$http.get(url).then(function(res){
              
              this.msg=res.body.message[0];

          })
      },
      getphotos:function(){
          var url=common.apicommon+'/api/getthumimages/'+this.cataid;
          this.$http.get(url).then(function(res){

               res.body.message.forEach(function(item){
                   var img=document.createElement('img');
                   img.src=item.src;
                   item.h=img.height;
                   item.w=img.width;
               })


              this.list=res.body.message;
              
          })
      }
  }
}
</script>
<style scoped>
#totalall{
    padding: 10px;
}
#totalall h4{
    color:#f32c68;
}
#totalall div{
    color: #ccc;
    padding: 10px 0px;
}
#totalall p{
    width: 100%;
    border-bottom: 1px solid #ccc;
}
#totalall #xxxi{
    color: #f32c68;
}

    .mui-content{
        background-color: white;
    }
    .mui-content ul{
        background-color: white;
       
    }
    
    .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        border: none;
    }
    .mui-grid-view.mui-grid-9{
         border: none;
    }
</style>
