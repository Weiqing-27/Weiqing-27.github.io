import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

// 页面路由
const routes = [
  { path: '/', component: Home },
  { path: '/pages/calculator', component: () => import('../views/pages/Calculator.vue') },
]

export default createRouter({
  history: createWebHistory(),
  routes
})