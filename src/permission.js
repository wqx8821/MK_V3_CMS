import router from '@/router'
import store from '@/store'
// 白名单
const whiteList = ['/login', '/404']
// 路由前置守卫
router.beforeEach((to, from, next) => {
  if (store.getters.token) {
    // 用户已登录
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else {
    // 未登录
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})
