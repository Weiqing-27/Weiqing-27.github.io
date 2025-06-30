import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
//本地样式
import '@/assets/css/global.scss'
import "@/assets/css/style/index.scss";

createApp(App).use(router).mount('#app')