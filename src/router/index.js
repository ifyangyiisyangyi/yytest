import Vue from 'vue'
import Router from 'vue-router'
import QaReport from '../components/QaReport.vue'
import Home from '../components/Home.vue'
import Echarts from '../components/Echarts.vue'
import Login from '@/components/Login.vue'
import Main from '@/components/Main.vue'


Vue.use(Router)


const routes = [
  {
    path: '/login',
    component: Login

  },
  // { path: '/login', redirect: '/' },
  {
    path: '/',
    component: Main,
    redirect : '/home',
    meta: {
      requireAuth: true
    },
    children: [
      {
        path: '/home',
        component: Home,
        meta: {
          requireAuth: true
        },
      },
      { path: '/qaReport', component: QaReport },
      {
        path: '/echarts', component: Echarts
      }
    ]
  }
]


const router = new Router({
  mode: 'history',
  routes
})

// 导航守卫


export default router