<template>
  <div>
    <el-menu
      :active-text-color="variables.menuActiveText"
      :background-color="variables.menuBg"
      :text-color="variables.menuText"
      :default-active="activeMenu"
      :collapse="$store.state.appModule.sidebarOpened"
      uniqueOpened
      router
    >
      <sidebar-item
        v-for="item in routes"
        :key="item.path"
        :route="item"
      ></sidebar-item>
    </el-menu>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
// import { filterRouters, generateMenus } from '@/utils/route'
import variables from '@/style/variables.scss'
import sidebarItem from './sidebaritem.vue'
const router = useRouter()
console.log(router)
// 计算路由表
// const routes = computed(() => {
//   const filterRoute = filterRouters(router.getRoutes())
//   return generateMenus(filterRoute)
// })
// 默认激活项
const route = useRoute()
const activeMenu = computed(() => {
  const { path } = route
  return path
})
</script>

<style lang="scss" scoped></style>
