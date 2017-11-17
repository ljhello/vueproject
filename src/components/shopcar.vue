<template>
  <div>
    <div v-for="(item,index) in datalist" class="rowlist">
        <mt-switch v-model="value[index]" class="switch"></mt-switch>
        <img :src="item.thumb_path" alt="">
        <div class="bottomlist">
        <h4>{{item.title}}</h4>
        <ul id="uuull">
          <li style="color:red">￥{{item.sell_price}}</li>
          <li style="margin-left:5px">
             <carsoncount :initcount="item.cou" :goodsid="item.id" v-on:carcontobj="getinputnum"></carsoncount>
          </li>
          <li class="zuihou"> <a href="javascript:;" @click="removeitem(item.id,index)">删除</a> </li>
        </ul>
        </div>
    </div>
    <div id="decs">
      <ul>
        <li>总计:（不含运费）</li>
        <li>以勾选商品{{totalprice}}件，总价：￥{{totalAmount}}元</li>
      </ul>

      <div class="buotton">
        <mt-button type="danger" size="small">去结算</mt-button>
      </div>
    </div>

    <div v-show="false">{{totalcount}}</div>
  </div>  
</template>

<script>
import carsoncount from "./carsoncount.vue";
import { getgoodsObj, updateData, removeloca } from "../kits/localStr.js";
import vm from "../kits/vm.js";
import common from "../kits/common.js";
export default {
  components: {
    carsoncount
  },
  computed: {
    totalcount: function() {
      var countarr = this.value.filter(function(item) {
        return item;
      });

      //计算商品总价格

      var amount = 0;
      var priceall=0;

      this.value.forEach((item, index) => {
        if (item) {
          var count = this.datalist[index].cou;
          var price = this.datalist[index].sell_price;
          var itemamount = count * price;
          amount += itemamount;
          priceall+=count;
        }
      });

      this.totalAmount = amount;
       this.totalprice=priceall;
      return countarr.length;
    }
  },
  data: function() {
    return {
      datalist: [],
      value: [],
      totalAmount: 0,
      totalprice:0
    };
  },
  created: function() {
    this.getobjlist();
  },
  methods: {
    getinputnum: function(resobj) {
     // console.log("******",resobj);

      updateData(resobj);

      for (var i = 0; i < this.datalist.length; i++) {
        if (this.datalist[i].id == resobj.goodsid) {
          if (resobj.type == "add") {
            this.datalist[i].cou = this.datalist[i].cou + 1;
          } else {
            this.datalist[i].cou = this.datalist[i].cou - 1;
          }
          break;
        }
      }
    },
    getobjlist: function() {
      var obj = getgoodsObj();

      var idstring = "";

      for (var key in obj) {
        idstring += key + ",";
      }
      idstring = idstring.substring(0, idstring.length - 1);

      var url = common.apicommon + "/api/goods/getshopcarlist/" + idstring;

      this.$http.get(url).then(function(res) {
        res.body.message.forEach(item => {
          item.cou = obj[item.id];

          this.value.push(false);
        });

        this.datalist = res.body.message;
      });
    },
    removeitem: function(goodsid, index) {
      this.value.splice(index, 1);
      this.datalist.splice(index, 1);
      // console.log(goodsid,index)
      removeloca(goodsid);

     
      
     
    }
  }
};
</script>
<style scoped>
.rowlist {
  height: 100px;
  border-bottom: 1px solid #ccc;
  display: flex;
}
.rowlist img {
  width: 75px;
  height: 75px;
  flex: 0 0 75px;
}
.zuihou {
  margin-left: 20px;
}
.rowlist h4 {
  color: crimson;
  height: 38px;
  overflow: hidden;
}
#uuull {
  margin: 0px;
}
.switch {
  flex: 0 0 52px;
}
.rowlist ul {
  padding: 4px;
}
.rowlist ul li {
  list-style: none;
  display: inline-block;
}
.bottomlist {
  flex: 1;
}
#decs {
  background-color: rgba(0, 0, 0, 0.3);
  height: 120px;
}
#decs ul {
  margin: 0px;
  padding-left: 10px;
  list-style: none;
  float: left;
  margin-top: 30px;
  font-size: 14px;
}
#decs .buotton {
  float: right;
  padding: 30px 20px;
}
</style>

