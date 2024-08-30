<template>
  <div>
    <h1>一级路由展示登录成功后的数据{{ userStore.username }}</h1>
  </div>
</template>

<script lang="ts" setup>
import useUserStore from '@/stores/modules/user'
//获取存储用户信息的仓库对象
let userStore = useUserStore()
</script>

<style lang="scss" scoped></style>
