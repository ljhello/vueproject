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
        <li class="rela">
            购买数量：<shopcarcount class="shopcou" v-on:contobj="getcount"></shopcarcount>

            <transition name="show" @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
            <div class="ball" v-if="isshow"></div>
            </transition>
        </li>
        <li>
           <mt-button type="primary" size="small">立即购买</mt-button>
           <mt-button type="danger" size="small" @click="showcount()">加入购物车</mt-button>
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
       <router-link :to="'/picture/introducepic/'+id">
        <mt-button class="btn" type="primary" size="large" plaint>图文介绍</mt-button>
       </router-link>

       <router-link :to="'/product/productcomm/'+id">
        <mt-button type="danger" size="large" plain>商品评论</mt-button> 
       </router-link>
    </div>
  </div>
</template>
<script>
import {setItem} from '../kits/localStr.js'
import common from '../kits/common.js'
import slider from './slider.vue'
import shopcarcount from './shopcarcount.vue'
import vm from '../kits/vm.js'
export default {
    components:{
        slider,
        shopcarcount
    },
   data:function(){
       return {
           imgs:[
              
           ],
           id:0,
           info:{},
           inputcount:1,
           isshow:false
       }
   },
   created:function(){
       this.id=this.$route.params.id;
       this.getimgs();
       this.getprodesc();
       
   },
   methods:{
       getimgs:function(){
           var url=common.apicommon+'/api/getthumimages/'+this.id;
        this.$http.get(url).then(function(res){
            
            this.imgs=res.body.message;

        })
       },
       getprodesc:function(){
           var url=common.apicommon+'/api/goods/getinfo/'+this.id;
           this.$http.get(url).then(function(res){
             this.info=res.body.message[0];
           })
       },
       getcount:function(count){
           this.inputcount=count; 
       },
       showcount:function(){
         vm.vm.$emit('countstr',this.inputcount);
         setItem({goodsid:this.id,numval:this.inputcount});
         this.isshow=!this.isshow;
       },
       beforeEnter:function(el){
         el.style.transform="translate(0px,0px)"
       },
       enter:function(el,done){
         el.offsetWidth;
         el.style.transform="translate(75px,375px)"
         done();
       },
       afterEnter:function(el){
        this.isshow=!this.isshow;
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
    padding: 8px 0px;
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
.rela{
    position: relative;
}
.shopcou{
    position: absolute;
    top: 3px;
    left: 100px;
}
.ball{
    height: 20px;
    width: 20px;
    background: red;
    border-radius: 50%;
    position: absolute;
   left: 150px;
   top: 6px;
   z-index: 100;
   transition: all 0.4s ease;
}
</style>
