import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'vant/lib/index.css';
import { ImagePreview } from 'vant';
import { Lazyload } from 'vant';
// 本地样式
import '@/assets/css/global.scss'
import "@/assets/css/style/index.scss";

// ✅ 创建 app 实例
const app = createApp(App);

// 挂载组件
app.use(ImagePreview);
app.use(Lazyload);
// ✅ 挂载
app.use(router).mount('#app');