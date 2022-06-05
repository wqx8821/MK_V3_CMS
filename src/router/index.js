import { createRouter, createWebHistory } from 'vue-router'

const publicRoutes = [
  {
    path: '/',
    name: 'login',
    component: () => import('@/views/login')
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: publicRoutes
})

export default router
