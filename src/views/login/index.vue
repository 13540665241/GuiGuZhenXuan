<template>
  <div class="login-container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form
          ref="loginForms"
          :model="loginForm"
          :rules="rules"
          class="login-form"
        >
          <h1>Hello</h1>
          <h2>后台管理系统</h2>

          <!-- 用户名输入框-->
          <el-form-item prop="username">
            <el-input
              v-model="loginForm.username"
              :prefix-icon="User"
              placeholder="请输入您的账号"
            ></el-input>
          </el-form-item>

          <!-- 密码输入框-->
          <el-form-item prop="password">
            <el-input
              v-model="loginForm.password"
              :prefix-icon="Lock"
              placeholder="请输入您的密码"
              show-password
              type="password"
            ></el-input>
          </el-form-item>

          <!-- 登录按钮-->
          <el-form-item>
            <el-button
              :loading="loading"
              class="login-btn"
              size="default"
              type="primary"
              @click="login"
            >
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { Lock, User } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'
// 引入用户相关接口
import useUserStore from '@/stores/modules/user'
// 引入路由
import { useRoute, useRouter } from 'vue-router'
// 提示框
import { ElNotification } from 'element-plus'
// 引入获取当前时间的函数
import { getTime } from '@/utils/time'

// 定义变量控制按钮加载
let loading = ref(false)
let useStore = useUserStore()
// 收集表单响应式数据
let loginForm = reactive({ username: 'admin', password: '111111' })
// 获取路由器
let $router = useRouter()
// 获取表单元素
let loginForms = ref()
// 获取路由对象
let $route = useRoute()

// 登录方法
const login = async () => {
  //获取全部表单校验通过再发请求
  await loginForms.value.validate()
  // 控制加载按钮
  loading.value = true
  // 编程式导航展示数据首页
  try {
    // 调用用户登录方法
    await useStore.userLogin(loginForm)
    // 判断是否有query参数，如果有，就往query参数页面跳转
    let redirect: string = $route.query.redirect as string
    // 跳转路由
    $router.push({ path: redirect || '/' })
    // 登录成功提示
    ElNotification({
      title: `HI,${getTime()}好`,
      message: '欢迎回来',
      type: 'success',
    })
    // 登录成功，控制按钮消失
    loading.value = false
  } catch (error) {
    // 加载失败，控制按钮消失
    loading.value = false
    // 登录失败提示
    ElNotification({
      title: '账号或密码不正确',
      // message: rules.password.message,
      type: 'error',
    })
  }
}

// 自定义校验规则需要的函数
// 验证账号规则
const validatorUsername = (rule: any, value: any, callback: any) => {
  if (value.length === 0) {
    callback(new Error('账号不能为空'))
  } else {
    callback()
  }
}
// 验证密码规则
const validatorPassword = (rule: any, value: any, callback: any) => {
  if (value.length === 0) {
    callback(new Error('密码不能为空'))
  } else if (value.length < 6 || value.length > 16) {
    callback(new Error('密码应为6~16位的任意组合'))
  } else {
    callback()
  }
}

// 定义表单按钮需要配置的对象
const rules = {
  username: [
    // 定义一个对象，用于校验账号长度是否符合要求
    { trigger: 'change', validator: validatorUsername },
  ],
  password: [{ trigger: 'change', validator: validatorPassword }],
}
</script>

<style lang="scss" scoped>
/* 背景图*/
.login-container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;
  padding: 20px;
}

/* 登录表单*/
.login-form {
  position: relative;
  width: 80%;
  top: 30vh;
  background: url('@/assets/images/login_form.png') no-repeat;
  background-size: cover;
}

/* 标题 */
h1 {
  color: white;
  font-size: 40px;
}

/* 小标题*/
h2 {
  color: white;
  font-size: 20px;
  margin: 20px 0;
}

.login-btn {
  width: 100%;
  height: 50px;
  font-size: 20px;
  background-color: #5de2c9;
  border: none;
  border-radius: 25px;
  margin-top: 20px;
}
</style>
