<template>
  <!--顶部右侧-->
  <el-button
    circle
    icon="Refresh"
    size="small"
    @click="updateRefsh"
  ></el-button>
  <el-button
    circle
    icon="FullScreen"
    size="small"
    @click="fullScreen"
  ></el-button>
  <el-button circle icon="Setting" size="small"></el-button>
  <img
    :src="userStore.avatar"
    alt=""
    style="width: 24px; height: 24px; margin: 0 10px; border-radius: 50%"
  />

  <!--        下拉菜单-->
  <el-dropdown>
    <span class="el-dropdown-link">
      {{ userStore.usernmae }}
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router'
import { ArrowDown } from '@element-plus/icons-vue'
import useLayOutSettingStore from '@/stores/modules/setting'
// 获取用户信息仓库
import useUserStore from '@/stores/modules/user'

let userStore = useUserStore()
let LayOutSettingStore = useLayOutSettingStore()
// 刷新页面
const updateRefsh = () => {
  LayOutSettingStore.refsh = !LayOutSettingStore.refsh
}

// 全屏按钮点击回调
const fullScreen = () => {
  // 获取全屏元素
  let full = document.fullscreenElement
  if (!full) {
    //利用requestFullscreen方法实现全屏
    document.documentElement.requestFullscreen()
  } else {
    // 退出全屏
    document.exitFullscreen()
  }
}

// 退出登录
// 获取路由器对象
const $router = useRouter()
// 获取路由对象
const $route = useRoute()
const logout = () => {
  // 第一件事：向服务器发请求「退出登录接口」
  // 第二件事：清除本地存储的token|username|password
  userStore.userLogout()
  // 第三件事：跳转登录页面
  $router.push({
    path: '/login',
    query: { redirect: $route.path },
  })
}
</script>

<script lang="ts">
export default {
  name: 'Setting',
}
</script>
<style scoped></style>
