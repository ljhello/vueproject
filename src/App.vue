<template>
  <div id="app">
    <mt-header fixed title="小熊看世界"></mt-header>
		
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
				<span class="mui-icon mui-icon-contact"><span class="mui-badge">0</span></span>
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

import { Header } from 'mint-ui';
export default {
 
}
</script>

<style>


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
