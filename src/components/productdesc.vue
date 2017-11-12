<template>
  <div>
     <div class="lbtitle">
   <slider :imgs='imgs'></slider>
   </div>
  <div class="contentbuy">
    <h3>{{info.title}}</h3>
    <p></p>
    <ul>
        <li>
            市场价：<s>￥{{info.market_price}}</s>  销售价：<span>￥{{info.sell_price}}</span>
        </li>
        <li>
            购买数量：
        </li>
        <li>
           <mt-button type="primary" size="small">立即购买</mt-button>
           <mt-button type="danger" size="small">加入购物车</mt-button>
        </li>
    </ul>
  </div>
   <div class="productcs">
      <div>商品参数</div>
      <p></p>
      <ul>
          <li>商品货号：{{info.goods_no}}</li>
          <li>库存数量：{{info.stock_quantity}}</li>
          <li>上架时间：{{info.add_time | datafmt('YYYY-MM-DD HH:mm:ss')}}</li>
      </ul>
   </div>
    <div>
        <mt-button class="btn" type="primary" size="large" plaint>图文介绍</mt-button>
        <mt-button type="danger" size="large" plain>商品评论</mt-button> 
    </div>
  </div>
</template>
<script>
import common from '../kits/common.js'
import slider from './slider.vue'
export default {
    components:{
        slider
    },
   data:function(){
       return {
           imgs:[
               {img:'http://img5.gomein.net.cn/image/bbcimg/productDesc/descImg/201503/desc04/A0004794664/3997361.jpg'},
               {img:'http://img5.gomein.net.cn/image/prodimg/productDesc/descImg/201503/desc1226/1122290268/1_07.jpg'}
           ],
           id:0,
           info:{}
       }
   },
   created:function(){
       this.id=this.$route.params.id;
       //this.getimgs();
       this.getprodesc();
   },
   methods:{
       getimgs:function(){
           var url=common.apicommon+'/api/getthumimages/'+this.id;
        this.$http.get(url).then(function(res){
            console.log(res.body);
            this.imgs=res.body.message;
        })
       },
       getprodesc:function(){
           var url=common.apicommon+'/api/goods/getinfo/'+this.id;
           this.$http.get(url).then(function(res){
             this.info=res.body.message[0];
           })
       }
   }
}
</script>
<style scope>
.lbtitle,.contentbuy,.productcs{
    border:1px solid #ccc;
    border-radius:5px;
    margin: 2px;
}
.contentbuy,.productcs{
    padding:4px;
}
.contentbuy h3{
    color:brown;
}
.contentbuy p,.productcs p{
    border-bottom: 1px solid #ccc;
}
.contentbuy ul li,.productcs ul li{
    list-style: none;
    padding: 5px 0px;
}
.contentbuy ul,.productcs ul{
    padding: 5px;
}
.contentbuy ul li span{
    color: red;
    
}
.contentbuy ul li s{
    margin-right: 10px;
}
.btn{
    margin: 8px 0px;
}
</style>
