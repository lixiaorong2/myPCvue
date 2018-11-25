<template>
    <ul class="mui-table-view">
      
				<li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							<h4>{{item.title}}</h4>
							<p class='mui-ellipsis'>
                <span>发表时间：{{item.add_time | dateFormat }}</span> <!-- dateFormat（'YY-MM-DD'）指定年月日 -->
                <span>点击：{{item.click}}次</span>
              </p>
						</div>
					</a>
				</li>
				


			</ul>
</template>

<script>
import { Toast } from 'mint-ui'

export default {
  name: "Info_class",
  data() {
    return {
      newslist:[
        {id:1,title:'革命胜利了',add_time:'2018-09-25T18:32:28.000Z',click:2,img_url:'https://avatars1.githubusercontent.com/u/177226?s=60&v=4'},
        {id:2,title:'革命胜利了',add_time:'2018-09-25T18:32:28.000Z',click:2,img_url:'https://avatars1.githubusercontent.com/u/177226?s=60&v=4'},
        {id:3,title:'革命胜利了',add_time:'2018-09-25T18:32:28.000Z',click:2,img_url:'https://avatars1.githubusercontent.com/u/177226?s=60&v=4'},
        {id:4,title:'革命胜利了',add_time:'2018-09-25T18:32:28.000Z',click:2,img_url:'https://avatars1.githubusercontent.com/u/177226?s=60&v=4'},
        {id:5,title:'革命胜利了',add_time:'2018-09-25T18:32:28.000Z',click:2,img_url:'https://avatars1.githubusercontent.com/u/177226?s=60&v=4'},
        {id:6,title:'革命胜利了',add_time:'2018-09-25T18:32:28.000Z',click:2,img_url:'https://avatars1.githubusercontent.com/u/177226?s=60&v=4'},
        {id:7,title:'革命胜利了',add_time:'2018-09-25T18:32:28.000Z',click:2,img_url:'https://avatars1.githubusercontent.com/u/177226?s=60&v=4'},
        {id:8,title:'革命胜利了',add_time:'2018-09-25T18:32:28.000Z',click:2,img_url:'https://avatars1.githubusercontent.com/u/177226?s=60&v=4'},
        {id:9,title:'革命胜利了',add_time:'2018-09-25T18:32:28.000Z',click:2,img_url:'https://avatars1.githubusercontent.com/u/177226?s=60&v=4'},
      ] 
    }
  },
    created() {
      this.getNewlist();
    },
    methods: {

      getNewlist() {
         this.$http.get('').then(result=>{// api/getnewslist
           if(result.body.status === 0){
             this.newslist = result.body.message;
           }else{
            Toast("获取数据失败。。。。");
          }
         })
      }


    }
      
    
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mui-ellipsis{
  font-size: 14px;
  margin-top: 2px;
   display: flex;
   justify-content: space-between;
}
.mui-media-body h4{
color: #ffaa00;
}

</style>
