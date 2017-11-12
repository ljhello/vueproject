<template>
  <div class="total">
    <div class="div" @click="reduce()">-</div>
    <div v-text="count" class="div"></div>
    <div class="div" @click="add()">+</div>
  </div>
</template>
<script>
export default {
  data:function(){
      return {
          count:1
      }
  },
  methods:{
      add:function(){
          this.count++;
          this.setcount()
      },
      reduce:function(){
          if(this.count<=1){
              this.count=1;
              return;
          }
          this.count--;
          this.setcount()
      },
      setcount:function(){
          this.$emit('contobj',this.count);
      }
  }
}
</script>
<style>
.total .div{
    height: 25px;
    width: 40px;
    border: 1px solid #ccc;
    display: inline-block;
    text-align:center;
    line-height: 25px;
}

</style>
