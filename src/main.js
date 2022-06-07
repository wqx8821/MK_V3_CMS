import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-plus/dist/index.css'
// 初始化样式表
import '@/style/index.scss'
// 导入 svg
import installIcon from '@/icons'
// 导入路由鉴权
import '@/permission.js'
const app = createApp(App)
installIcon(app)

app.use(store).use(router).mount('#app')
