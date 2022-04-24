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
const instance = axios.create({
  baseURL: "http://yycode.com.cn:8030",
  timeout: 2000
})
instance.interceptors.request.use(
  config => {
    if (localStorage.getItem('token')) {
      config.headers.token = localStorage.getItem('token');
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
)
export default instance
Vue.config.productionTip = false
Vue.use(ElementUI);

//全局注册消息组件
Vue.component('notification', Notification)
Vue.use(Notification)


// router 拦截器
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (localStorage.getItem('token')) {
      next()
    } else {
      next({ path: '/login' })
    }
  } else {
    next()
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
