<template>
  <el-sub-menu v-if="route.children.length > 0" :index="route.path">
    <template #title>
      <menu-item
        :title="route.meta.title"
        :icon="route.meta.icon"
        y="123"
      ></menu-item>
    </template>
    <!-- // 循环渲染children -->
    <sidebaritem
      v-for="item in route.children"
      :key="item.path"
      :route="item"
    ></sidebaritem>
  </el-sub-menu>
  <el-menu-item :index="route.path" v-else>
    <menu-item :title="route.meta.title" :icon="route.meta.icon"></menu-item>
  </el-menu-item>
</template>

<script setup>
import menuItem from './menuItem.vue'
import { defineProps } from 'vue'

defineProps({
  route: {
    type: Object,
    required: true
  }
})
</script>

<style lang="scss" scoped></style>
