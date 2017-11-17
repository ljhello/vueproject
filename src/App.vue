<template>
  <div id="app">
    <mt-header fixed title="小熊看世界"></mt-header>
		<div class="gutohome" v-if="isshow">
			<a href="javacsript:;" @click="gotoback">返回</a>
		</div>
		
    <router-view id="toggle"></router-view>


       <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/tabbar-with-chat">
				<span class="mui-icon mui-icon-email"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-contact"><span id="gwcco" class="mui-badge">{{str}}</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/tabbar-with-map">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
  </div>
</template>

<script>

import vm from './kits/vm.js'
import { Header } from 'mint-ui';
import {getItem} from './kits/localStr.js'
export default {
   created:function(){
			var arr=getItem();
			var countlist=0;
			for(var i=0;i<arr.length;i++){
				countlist+=arr[i].numval;
			
			}


			this.str=countlist;

		 var that=this;
		 vm.vm.$on('countstr',function(input){
				//  var strcount=document.getElementById('gwcco');
				//  strcount.innerHTML=  parseInt(strcount.innerText)+input;
				
       that.str+=input;

		 })
	 },
	 data:function(){
		 return {
			 str:0,
			 isshow:false
		 }
	 },
	 methods:{
		 gotoback:function(){
			 this.$router.go(-1);
		 }
	 },
	 watch:{
		 "$route":function(newroute,oldroute){
		//	 console.log(newroute,oldroute)
			 if(newroute.path=="/home"){
				 this.isshow=false;
			 }else{
				 this.isshow=true;
			 }
		 }
	 }

}
</script>

<style scoped>
.gutohome{
	width: 60px;
	position: fixed;
	top: 10px;
	left:5px;
	z-index: 101;
}
.gutohome a{
	color: white;
	font-size: 16px;
	
}

.mint-header-title{
  font-size: 20px;
}
h1{
  height: 30px;
  line-height: 30px;
  
}
body{
  background-color:white;
}
.mint-header{
  background-color:#f32c68;
}
.mui-bar-tab .mui-tab-item.mui-active{
  color: #f32c68;
}

#toggle{
  margin-top: 40px;
  margin-bottom: 50px;
}

</style>
