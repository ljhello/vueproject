// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Router from 'vue-router'
import mintUi from 'mint-ui';
import vueResource from 'vue-resource';
import moment from 'moment';

import App from './App'
// import router from './router'

import 'mint-ui/lib/style.min.css'
import '../static/mui/css/mui.css'


import  home from './components/home.vue'
import shopcar from './components/shopcar.vue'
import newslist from './components/news-list.vue'
import newsinfo from './components/news-info.vue'


Vue.use(mintUi)
Vue.use(Router)
Vue.use(vueResource);


Vue.filter('datafmt',function(input,fmtgeshihua){
    return moment(input).format(fmtgeshihua);
})

var router=new Router({
  linkActiveClass:'mui-active',
  routes: [
    {
      path: '/',
      redirect:'/home'
  
    },
    {
      path: '/home',
      component: home
    },
    {
      path:'/shopcar',
      component:shopcar
    },
    {
      path:'/news/newslist',
      component:newslist
    } ,
    {
      path:'/news/newsinfo/:id',
      component:newsinfo
    }
  ]
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
