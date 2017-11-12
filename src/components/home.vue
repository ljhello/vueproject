<template>
    <div id="teml">
        
   <slider :imgs='list'></slider>

	<div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="/news/newslist">
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">新闻资讯</div>
                            </router-link>
                            
                    </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                         <router-link to="/photo/photolist">
		                    <span class="mui-icon mui-icon-email"></span>
		                    <div class="mui-media-body">图片分享</div>
                            </router-link>
                            
                    </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                         <router-link to="/product/productslist">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">商品购买</div>
                            </router-link>
                    </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                         <router-link to="/news/newslist">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">留言反馈</div>
                            </router-link>
                    </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                         <router-link to="/news/newslist">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">视频专区</div>
                            </router-link>
                    </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="/news/newslist">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">联系我们</div>
                            </router-link>
                    </li>
		        
		        </ul> 
		</div>
 

</div>
</template>
<script>
import slider from './slider.vue'
import common from '../kits/common.js'
import { Toast } from 'mint-ui';
import { Swipe, SwipeItem } from 'mint-ui';
export default {
    components:{
      slider
    },
    
  data:function(){
      return {
          msg:"首页",
          list:[]
      } 
  },
  created:function(){
     this.getimgs();
  },
  methods:{
      getimgs:function(){
        var url=common.apicommon+'/api/getlunbo';
        this.$http.get(url).then(function(res){
            console.log(res.body);

            var data=res.body;
          if(data.status!=0){
              
              Toast(data.message);
              return;
          }


            this.list=data.message;
        })
      }
  }

}
</script>
<style scoped>

.mui-content > .mui-table-view:first-child{
    margin:0px;
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

    .mui-icon-home:before,
    .mui-icon-email:before,
    .mui-icon-chatbubble:before,
    .mui-icon-location:before,
    .mui-icon-search:before,
    .mui-icon-phone:before{
        content: "";
        background-image: url('../../static/imgs/1.png');
        display: inline-block;
        background-repeat: round;
        width: 50px;
        height: 50px;
    }
    .mui-icon-email:before{
         background-image: url('../../static/imgs/2.png');
    }
   .mui-icon-chatbubble:before{
       background-image: url('../../static/imgs/3.png');
   }
   .mui-icon-location:before{
        background-image: url('../../static/imgs/4.png');
   }
   .mui-icon-search:before{
       background-image: url('../../static/imgs/5.png');
   }
   .mui-icon-phone:before{
         background-image: url('../../static/imgs/6.png');
   }
</style>
