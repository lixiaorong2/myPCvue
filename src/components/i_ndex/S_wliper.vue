<template>
  <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
            <!-- Indicators -->
            <ol class="carousel-indicators">
              <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
              <li data-target="#carousel-example-generic" data-slide-to="1"></li>
              <li data-target="#carousel-example-generic" data-slide-to="2"></li>
            </ol>
          
            <!-- Wrapper for slides -->
            <div class="carousel-inner" role="listbox">

             <!--  ajax请求数据 -->
              <!-- <div class="item active" v-for="item in lunbotulist" :key="item.url">
                <img :src="item.img" alt="..."> -->

              <div class="item active">
                <img src="./../../assets/images/20161129143746064606.png" alt="...">
            </div>
              <div class="item">
                <img src="./../../assets/images/20161129143746064606.png" alt="...">
            </div>
             <div class="item">
                    <img src="./../../assets/images/20161129143789568956.png" alt="...">
                    
             
            </div>
          
            <!-- Controls -->
            <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
              <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
              <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
</template>

<script>
/* 请求失败弹出框
import { toast } from 'mint-ui' */

export default {
  name: "Swliper",
  data() {
    return {
      lunbotulist:[
        
      ]
    }
},
/* 数据请求模块
created(){
  this.getlunbotu();
},
methods:({
  getlunbotu() {
    this.$http.get("api/getlunbo").then(result=>{
    if(result.body.status === 0){
      this.lunbotulist = result.body.message;
    }else{
      Toast("加载数据失败。。。。。")
    }
    })
  }
}) */
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
