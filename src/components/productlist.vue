<template>
  <div>
    	<div class="mui-content" style="background-color:#fff" id="mui-content">
		    
		    <ul class="mui-table-view mui-grid-view">
		        <li class="mui-table-view-cell mui-media mui-col-xs-6" v-for='item in list'>
		            <router-link :to="'/prodtct/prodesc/'+item.id">
		                <img class="mui-media-object" :src="item.img_url">
		                <div class="mui-media-body">{{item.title}}</div>
                        <div class="decs">
                         <div class="price">
                             <span class="hou">￥{{item.sell_price}}</span>
                             <s class="yuan">￥{{item.market_price}}</s>
                         </div>
                         <div class="bott">
                             <h6 class="left">热卖中</h6>
                             <h6 class="right">剩余{{item.stock_quantity}}件</h6>
                         </div>
                        </div>
                    </router-link>
                        
                </li>
		        
		    </ul>  
            <mt-button type="danger" size="large" plain @click="getmore">加载更多</mt-button>  
		</div>
  </div>
</template>
<script>
import common from '../kits/common.js'
export default {
    data:function(){
        return {
            list:[],
            catesid:1
        }
    },
    created:function(){
       this.getlist();
    },
    methods:{
        getlist:function(){
            var url=common.apicommon+'/api/getgoods?pageindex='+this.catesid;
            this.$http.get(url).then(function(res){
                this.list=this.list.concat(res.body.message);
            })
        },
        getmore:function(){
          this.catesid++;
          this.getlist();

        }
    }
};
</script>
<style scoped>

#mui-content li{
    border: 1px solid #bbb;
    padding: 4px; 
    margin-left:2px;
}
#mui-content ul{
    margin: 0px;
    padding: 0px;
}
#mui-content a{
    padding: 0px;
    margin: 0px;
}
#mui-content .mui-media-body{
    color:cornflowerblue;
    margin-bottom:5px;
}
#mui-content .decs{
    height:60px;
    background:rgba(0, 0,0, .2);
}
.hou{
    color: red;
    margin-right: 20px;

}
.yuan{
    color: black;
    font-size: 14px;
}
.decs .price{
 text-align: left;
padding:5px 8px;
}
.left{
    float:left;

}
.right{
    float:right;
}
.bott{
    padding: 0px 10px;
}
</style>
