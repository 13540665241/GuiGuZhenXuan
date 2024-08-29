<template>
  <!--顶部右侧-->
  <el-button circle icon="Refresh" size="small"></el-button>
  <el-button circle icon="FullScreen" size="small"></el-button>
  <el-button circle icon="Setting" size="small"></el-button>
  <img
    alt=""
    src="../../../../public/logo.png"
    style="width: 24px; height: 24px; margin: 0 10px"
  />

  <!--        下拉菜单-->
  <el-dropdown>
    <span class="el-dropdown-link">
      admin
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup>
import { ArrowDown } from '@element-plus/icons-vue'
</script>

<script lang="ts">
export default {
  name: 'Setting',
}
</script>
<style scoped></style>
