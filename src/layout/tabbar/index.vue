<template>
  <div class="tabbar">
    <!-- 顶部左侧 -->
    <div class="tabbar_left">
      <Breadcrumb></Breadcrumb>
    </div>

    <!--顶部右侧-->
    <div class="tabbar_right">
      <Setting></Setting>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Breadcrumb from './breadcrumb/index.vue'
import Setting from './setting/index.vue'
</script>

<script lang="ts">
export default {
  name: 'Tabbar',
}
</script>

<style lang="scss" scoped>
.tabbar {
  width: 100%;
  height: 100%;
  display: flex;
  // 盒子左右分布
  justify-content: space-between;
  background-image: linear-gradient(to right, #788dd3, #9ed1c7);

  .tabbar_left {
    display: flex;
    align-items: center;
    margin-left: 20px;
  }

  .tabbar_right {
    display: flex;
    align-items: center;
    margin-right: 20px;
  }
}
</style>
