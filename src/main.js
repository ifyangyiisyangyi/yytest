// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Notification from './components/Notification'

// 引入echarts
import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts

Vue.prototype.$http = axios //修改内部的$http为axios
Vue.config.productionTip = false
Vue.use(ElementUI);

//全局注册消息组件
Vue.component('notification', Notification)
Vue.use(Notification)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
