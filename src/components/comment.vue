<template>
  <div>
      <div id="cotenttitle">
          <h4>提交评论</h4>
          <p></p>
          <textarea v-model="content" placeholder="请输入评论信息..."></textarea>
          <mt-button type="danger" size="large" @click="setcontent()" :disabled="content==''">发表</mt-button>
          <h4 class="pllist">评论列表</h4>
          <p></p>
           <div v-for="(item,index) in list" :key="index">
               <div class="content-title">
                   <span>第{{index+1}}楼</span>
                   <span>名称：{{item.user_name}}</span>
                   <span>时间：{{item.add_time | datafmt('YYYY-MM-DD')}}</span>
               </div>  
                <div class="content-nr">
                    <ul>
                        <li>{{item.content==''?'用户评论信息为空':item.content}}</li>
                    </ul>
                </div>
               
               
           </div> 
         

      <mt-button type="danger" size="large" plain @click="getmore()">加载更多</mt-button>


      </div>
      
  </div>
</template>
<script>
import { Toast } from 'mint-ui';
import common from '../kits/common.js'
export default {
  props:['id'],
  data:function(){
      return {
          pageindex:1,  //代表获取第几页的数据
          content:'',
          list:[]
      }
  },
  created:function(){
    this.getcontent(this.pageindex);
  },
  methods:{
      getmore:function(){
        this.pageindex++;
        this.getcontent(this.pageindex);
      },

     getcontent:function(pageindex){
        pageindex=pageindex || 1;
       var url=common.apicommon+'/api/getcomments/'+this.id+'?pageindex='+pageindex;
       this.$http.get(url).then(function(res){
           this.list=this.list.concat(res.body.message);
       })


     },

      setcontent:function(){
          var url=common.apicommon+'/api/postcomment/'+this.id;
          this.$http.post(url,{content:this.content},{emulateJSON:true}).then(function(res){
                   
                  Toast(res.body.message);
                 
                //将最新的评论数据展示追加在评论的最顶部

           this.list=[{
                   'user_name':'xxxx',
                   "add_time":new Date(),
                   'content':this.content
               }].concat(this.list);
                        
                this.content='';

          })
      }

  }
}
</script>
<style scoped>
 #cotenttitle{
     padding: 8px;
 }
 #cotenttitle h4{
     color: #f32c68;
 }
  #cotenttitle p{
      margin-top: 4px;
      border-top: 1px solid #ccc;
  }
  .pllist{
      margin: 20px 0px;
  }
  .content-title{
      height: 40px;
      line-height: 40px;
      background-color: #ccc;
  }
  .content-title span{
      margin-right: 20px;
  }
  .content-nr{
      height: 50px;
  }
</style>
