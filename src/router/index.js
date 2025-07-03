import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { 
    path: '/', 
    component: () => import('../components/login.vue'),
    meta: { requiresAuth: false } // 标记不需要认证
  },
  { 
    path: '/Home', 
    component: () => import('../views/Home.vue'),
    meta: { requiresAuth: true } // 需要认证
  },
  { 
    path: '/calculator', 
    component: () => import('../views/pages/calculator.vue'),
    meta: { requiresAuth: true } // 需要认证
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 添加全局前置守卫
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'
  if (to.meta.requiresAuth && !isAuthenticated) {
    // 未登录跳转到登录页
    next('/')
  } else if (to.path === '/' && isAuthenticated) {
    // 已登录但访问登录页，则跳转到首页
    next('/Home')
  } else {
    // 否则继续导航
    next()
  }
})

export default router