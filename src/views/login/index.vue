<template>
  <div class="login-container">
    <el-form
      class="login-form"
      :model="loginForm"
      :rules="rules"
      ref="validatorRef"
    >
      <div class="title-container">
        <h3 class="title">用户登录</h3>
      </div>
      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon="user"></svg-icon>
        </span>
        <el-input
          placeholder="username"
          name="username"
          v-model="loginForm.username"
        >
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon="password"></svg-icon>
        </span>
        <el-input
          placeholder="password"
          name="password"
          v-model="loginForm.password"
          show-password
        >
        </el-input>
      </el-form-item>

      <el-button
        type="primary"
        style="width: 100%; margin-bottom: 30px"
        @click="handleLogin"
        :loading="loading"
        >登录</el-button
      >
    </el-form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { validatePassword } from './rules'
const store = useStore()
// 数据源
const loginForm = ref({
  username: 'super-admin',
  password: '123456'
})
// 验证规则
const rules = ref({
  username: [
    {
      required: true,
      message: '用户名是必填项',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      trigger: 'blur',
      validator: validatePassword()
    }
  ]
})
// 登录
const validatorRef = ref(null)
let loading = ref(false)
const handleLogin = () => {
  // 表单校验
  validatorRef.value?.validate((value) => {
    if (!value) return
    // 登录操作
    loading.value = true
    store
      .dispatch('user/login', loginForm.value)
      .then((data) => {
        loading.value = false
        console.log(data)
      })
      .catch((err) => {
        loading.value = false
        console.log(err)
      })
    console.log(store)
    // 登陆后操作
  })
}
</script>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    text-align: center;
    width: 520px;
    height: 100%;
    padding: 5px;
    border-radius: 10px;

    ::v-deep .el-form-item {
      // border: 1px solid rgba(255, 255, 255, 0.1);
      background-color: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;

      .el-input__inner {
        border: 0;
      }
    }

    ::v-deep .el-input {
      background-color: transparent !important;
      // display: flex;
      height: 47px;
      width: 90%;
      border: 0px;
      border-radius: 0px;

      .el-input__wrapper,
      input {
        background-color: transparent;
        width: 100%;
        border-radius: 0px;
        box-shadow: none;
        border: 0px;
        padding: 12px 0px 12px 15px;
        color: $light_gray;
        caret-color: $cursor;
      }
    }
  }
  .title-container {
    color: $light_gray;
    margin-bottom: 5px;
  }
  .svg-container {
    padding: 12px 5px 12px 15px;
  }
}
</style>
