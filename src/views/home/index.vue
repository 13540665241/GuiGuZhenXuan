<template>
  <div>
    <h1>一级路由展示登录成功后的数据{{ userStore.userInfo() }}</h1>
  </div>
</template>

<script lang="ts" setup>
import useUserStore from '@/stores/modules/user'
import { onMounted } from 'vue'
//获取存储用户信息的仓库对象
let userStore = useUserStore()

// 首页挂载完毕请求获取用户信息
onMounted(() => {
  userStore.userInfo()
})
</script>

<style lang="scss" scoped></style>
