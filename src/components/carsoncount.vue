<template>
  <div class="total">
    <div class="div" @click="reduce()">-</div>
    <div v-text="count" class="div"></div>
    <div class="div" @click="add()">+</div>
  </div>
</template>
<script>
export default {
    props:['initcount','goodsid'],
  data:function(){
      return {
          count:1,
          resobj:{goodsid:0,type:app}
      }
  },
  created:function(){
   this.count=this.initcount;
  },
  methods:{
      add:function(){
          this.count++;
          this.setcount("add")
      },
      reduce:function(){
          if(this.count<=1){
              this.count=1;
              return;
          }
          this.count--;
          this.setcount("jjdd")
      },
      setcount:function(type){
          this.resobj.type=type;
          this.resobj.goodsid=this.goodsid;
          this.$emit('carcontobj',this.resobj);
      }
  }
}
</script>
<style>
.total .div{
    height: 25px;
    width: 30px;
    border: 1px solid #ccc;
    display: inline-block;
    text-align:center;
    line-height: 25px;
}

</style>
