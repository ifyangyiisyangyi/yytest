import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index.vue'
import Tools from '../components/Tools.vue'
import QaReport from '../components/QaReport.vue'
import Home from '../components/Home.vue'
import Echarts from '../components/Echarts.vue'
import Login from '@/components/Login.vue'


Vue.use(Router)


const routes = [
  { path: '/', component: Home },
  { path: '/home', redirect: '/' },
  { path: '/index', component: Index },
  { path: '/tools', component: Tools },
  { path: '/qaReport', component: QaReport },
  { path: '/login', component: Login },
  { path: '/echarts', component: Echarts },
]


const router = new Router({
  mode: 'history',
  routes
})

// 导航守卫


export default router