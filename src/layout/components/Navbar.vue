<template>
  <div class="navbar">
    <div @click="isOpen" style="height: 50px; width: 50px">😶‍🌫️</div>
    <div class="right-menu">
      <el-dropdown class="avatar-container" trigger="click">
        <div class="block">
          <el-avatar
            shape="square"
            :size="50"
            :src="$store.state.userModule.userInfo?.avatar"
          />
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <router-link to="/">
              <el-dropdown-item>首页</el-dropdown-item>
            </router-link>
            <router-link to="/">
              <el-dropdown-item>菜单管理</el-dropdown-item>
            </router-link>
            <el-dropdown-item divided> 退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
const store = useStore()
const isOpen = () => {
  store.commit('appModule/triggerSidebarOpened')
}
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  justify-content: space-between;
}
</style>
