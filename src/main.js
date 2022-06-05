import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-plus/dist/index.css'
// 初始化样式表
import '@/style/index.scss'

createApp(App).use(store).use(router).mount('#app')
