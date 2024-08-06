<!--
<template>
  <div>
    <svg :style="{width: width, height: height}">
      <use xlink:href="prefix + name" :fill="color"></use>
    </svg>
  </div>
</template>

<script setup lang="ts">
//接收父组件传递过来的参数
defineProps({
  //xlink:href属性值的前缀
  prefix:{
    type: String,
    default: '#icon-'
  },

  //svg矢量图的名字
  name:{
    type: String,
    default: ''
  },

  //svg图标的颜色
  color:{
    type: String,
    default: ''
  },

  //svg宽度
  width:{
    type: String,
    default: '16px'
  },

  //svg高度
  height:{
    type: String,
    default: '16px'
  }
})
</script>

<style>

</style>-->
<template>
  <div>
    <svg
      :style="{ width: width, height: height }"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <use :xlink:href="prefix + name" :fill="color"></use>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

// 接收父组件传递过来的参数
const props = defineProps({
  // xlink:href 属性值的前缀
  prefix: {
    type: String,
    default: '#icon-',
  },
  // svg 矢量图的名字
  name: {
    type: String,
    required: true,
  },
  // svg 图标的颜色
  color: {
    type: String,
    default: 'currentColor',
  },
  // svg 宽度
  width: {
    type: String,
    default: '16px',
  },
  // svg 高度
  height: {
    type: String,
    default: '16px',
  },
})
</script>

<style></style>
