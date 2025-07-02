import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

// 页面路由
const routes = [
  { path: '/', component: Home },
  { path: '/calculator', component: () => import('../views/pages/Calculator.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})


export default router