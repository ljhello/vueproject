<template>
  <div>
     <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in list">
					<router-link :to="'/news/newsinfo/'+item.id">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							{{item.title}}
							<p class='mui-ellipsis'>{{item.zhaiyao}}</p>
                            <div class="fot">
                                <span>发表时间：{{item.add_time|datafmt('YYYY-MM-DD HH:mm:ss')}}</span>
                                <span class="click">点击数：{{item.click}}</span>
                            </div>
						</div>
					</router-link>
				</li>
				

			</ul> 
  </div>
</template>
<script>
import common from '../kits/common.js'
export default {
  data: function() {
    return {
      list: []
    };
  },
  created() {
    this.getlist();
  },
  methods: {
    getlist: function() {

        var url=common.apicommon+'/api/getnewslist'

        this.$http.get(url).then(function(res){
            
            var data=res.body;
            this.list=data.message;
        })

    }
  }
};
</script>
<style scoped>
.mui-media img{
    height: 80px;
    width: 80px;
}
.mui-table-view .mui-media-object{
    max-width: 80px;
}
.fot{
    margin-top: 20px;
    font-size: 14px;
    color:brown;
}
.click{
    margin-right: 10px;
    float: right;
}
</style>
