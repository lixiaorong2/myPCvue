// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//导入路由
import VueRouter from 'vue-router'
import router from './router/router.js'
Vue. use(VueRouter)
//导入UI
import { Tabbar } from 'mint-ui'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
Vue.component(Tabbar.name, Tabbar)

//导入ajax
import VueRource from 'vue-resource'
Vue.use(VueRource)
Vue.http.options.root = ''//全局配置服务器-请求根路径 http://vue.studyit.io

//定义全局的过滤器-处理时间格式- 需要导入  npm i moment -s
import moment from 'moment' //导入时间插件
Vue.filter('dateFormat',function(dataStr,pattern = "YY-MM-DD HH:mm:ss"){
return moment(dataStr).format(pattern) //转化给定的时间
})



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
