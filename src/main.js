// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Router from 'vue-router'
import mintUi from 'mint-ui';
import vueResource from 'vue-resource';
import moment from 'moment';
import VuePreview from 'vue-preview'


import App from './App'
// import router from './router'

import 'mint-ui/lib/style.min.css'
import '../static/mui/css/mui.css'


import  home from './components/home.vue'
import shopcar from './components/shopcar.vue'
import newslist from './components/news-list.vue'
import newsinfo from './components/news-info.vue'
import picturelist from './components/picture.vue'
import picturein from './components/pircturein.vue'
import productlist from './components/productlist.vue'
import productdesc from './components/productdesc.vue'
import introducepic from './components/introducepro.vue'
import prodctcomm from './components/prodcomment.vue'

Vue.use(mintUi);
Vue.use(Router);
Vue.use(vueResource);
Vue.use(VuePreview)

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
    },
    {
      path:'/photo/photolist',
      component:picturelist
    },
    {
      path:'/photos/photolistin/:cateid',
      component:picturein
    },
    {
      path:'/product/productslist',
      component:productlist
    },
    {
      path:'/prodtct/prodesc/:id',
      component:productdesc
    },
    {
      path:'/picture/introducepic/:id',
      component:introducepic
    },
    {
      path:'/product/productcomm/:id',
      component:prodctcomm
    }
  ]
})

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
