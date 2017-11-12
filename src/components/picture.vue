<template>
  <div>
    <div id="navbar">
       <ul :style="{width:ulwidth+'px'}">
           <li @click="getimgs(0)">全部</li>
           <li v-for="item in cates" @click="getimgs(item.id)">
               {{item.title}}
            </li>
            
       </ul>
    </div>
    <div id="photolist">
      <ul>
            
          <li v-for="(item,index) in list" :key='index'>
              <router-link :to="'/photos/photolistin/'+item.id"> 
             <img v-lazy="item.img_url">
             <div id="zhezhao">
                 <h4>{{item.title}}</h4>
                 <p>{{item.zhaiyao}}</p>
             </div>
              </router-link>
          </li>
         

     </ul>
    </div>
  </div>
</template>
<script>
import common from '../kits/common.js'
export default {
  data:function(){
      return {
          ulwidth:375,
          cates:[],
          list:[],
          cateid:0
      }
  },
  created:function(){
    this.getcates();
    this.getimgs(this.cateid);
  },
  methods:{
      getcates:function(){
        var url=common.apicommon+'/api/getimgcategory';
        this.$http.get(url).then(function(res){
                
             this.cates=res.body.message;
             var count=res.body.message.length+1;
             this.ulwidth=count*78;
        })
      },
      getimgs:function(cateid){
         var cateid=cateid||0;
          var url=common.apicommon+'/api/getimages/'+cateid;
          this.$http.get(url).then(function(res){
              var data=res.body;
              if(data.status!=0){
                  return;
              }
              this.list=data.message;
          })
      }

  }
}
</script>
<style scoped>
#navbar{
    width: 375px;
    max-width: 375px;
    overflow-x: auto;
}
#navbar ul{
    width: 2000px;
    padding-left: 10px;
}
#navbar ul li{
    display: inline-block;
    list-style: none;
    cursor: pointer;
    padding-left: 10px;
    color: #f32c68;
}

#photolist ul{
  padding-left: 0px;
}
#photolist ul li{
    list-style: none;
    position: relative;
}
#photolist ul li img{
    width: 100%;
    height: 300px;
}

#zhezhao{
    background-color:rgba(0,0,0,.3);
    width: 100%;
    padding: 10px;
    position:absolute;
    bottom: 4px;
    left: 0px;
    color: #ccc;
}
#zhezhao h4{
    font-weight: normal;
}
#zhezhao p{
    padding-top: 10px;
    color: #ccc;
}



image[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}

</style>
