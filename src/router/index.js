import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

//将页面路由注册在这里
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  //这样就能添加一个新的页面了
  {
    path:'/new',
    name:'New',
    component: () => import('../views/NewView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
