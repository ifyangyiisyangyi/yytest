import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index.vue'
import Tools from '../components/Tools.vue'
import QaReport from '../components/QaReport.vue'
import Home from '../components/Home.vue'
import Echarts from '../components/Echarts.vue'
import Login from '../components/Login.vue'


Vue.use(Router)

export default new Router({
  routes: [
    { path:'/', redirect :'/index'},
    { path: '/index', component: Index },
    { path: '/tools', component: Tools },
    { path: '/qaReport', component: QaReport },
    { path: '/home', component: Home },
    { path: '/echarts', component: Echarts },
    { path: '/login', component: Login },

  ]
})
