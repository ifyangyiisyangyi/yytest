import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index.vue'
import Tools from '../components/Tools.vue'
import Home from '../components/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path:'/', redirect :'/index'},
    { path: '/index', component: Index },
    { path: '/tools', component: Tools },
    { path: '/home', component: Home },
  ]
})
