<template>
  <!-- 顶部左侧静态 -->
  <el-icon style="margin-right: 10px" @click="changeIcon">
    <!-- 根据 fold 的值动态选择组件 -->
    <component :is="LayOutSettingStore ? 'Fold' : 'Expand'"></component>
  </el-icon>

  <!--顶部左侧面包屑-->
  <el-breadcrumb :separator-icon="ArrowRight">
    <!--    动态展示路由名字和标题-->
    <el-breadcrumb-item
      v-for="(item, index) in $route.matched"
      v-show="item.meta.title"
      :key="index"
      :to="{ path: item.path }"
    >
      <!--      图标-->
      <el-icon>
        <component :is="item.meta.icon"></component>
      </el-icon>
      <!--      显示标题-->
      <span style="margin: 0 5px">{{ item.meta.title }}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import useLayOutSettingStore from '@/stores/modules/setting'

// 定义响应式数据控制图标切换
let $route = useRoute()

// 获取配置仓库
let LayOutSettingStore = useLayOutSettingStore()
// 点击图标的方法
const changeIcon = () => {
  LayOutSettingStore.fold = !LayOutSettingStore.fold
}
</script>

<script lang="ts">
export default {
  name: 'Breadcrumb',
}
</script>

<style scoped></style>
