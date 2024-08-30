<template>
  <!--路由组件出口的位置-->
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <!--渲染layout一级路由子路由-->
      <component :is="Component" v-if="flag" />
    </transition>
  </router-view>
</template>

<script lang="ts" setup>
import { nextTick, ref, watch } from 'vue'
import useLayOutSettingStore from '@/stores/modules/setting'

// 获取配置仓库
let LayOutSettingStore = useLayOutSettingStore()
// 控制当前组建是否销毁重建
let flag = ref(true)
// 监听仓库内部数据是否发生变化，如果发生变化，说明用户点击过刷新按钮
watch(
  () => LayOutSettingStore.refsh,
  (newValue) => {
    /*    if (newValue) {
          // 重新加载页面
          location.reload()
        }*/
    flag.value = false
    // 页面加载完成后，重新加载页面
    nextTick(() => {
      flag.value = true
    })
  },
)
</script>

<style scoped>
.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 0.5s;
}

.fade-enter-to {
  opacity: 1;
}
</style>
