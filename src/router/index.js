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
  },
  { 
    path: '/pages/game', 
    component: () => import('../views/pages/game/index.vue'),
    meta: { requiresAuth: true } // 需要认证
  }
]
const router = createRouter({
  history: createWebHistory('/Weiqing-27.github.io/'), 
  routes
})

// 添加全局前置守卫
router.beforeEach((to, from, next) => {
  // 获取存储的认证数据
  const authData = JSON.parse(localStorage.getItem('authData'));
  // 检查认证是否有效（存在且未过期）
  const isAuthenticated = authData && 
                         authData.isAuthenticated && 
                         Date.now() - authData.timestamp < 3600000; // 1小时 = 3600000毫秒
  
  if (to.meta.requiresAuth && !isAuthenticated) {
    // 清除过期认证
    localStorage.removeItem('authData');
    next('/');
  } else if (to.path === '/' && isAuthenticated) {
    next('/Home');
  } else {
    next();
  }
});

export default router