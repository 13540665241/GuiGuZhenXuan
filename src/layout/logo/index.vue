<template>
  <div v-if="setting.logoHidden" class="logo">
    <img :src="setting.logo" alt="" />
    <p>{{ setting.title }}</p>
  </div>
</template>

<script lang="ts" setup>
// 引入logo和标题设置文件
import setting from '@/setting'
</script>

<script lang="ts">
export default {
  name: 'Logo',
}
</script>

<style lang="scss" scoped>
@import '../../styles/variable.scss';

.logo {
  /* 定义Logo组件的样式 */
  width: 100%; //Logo组件宽度设置为100%，使其充满可用空间
  height: $base-menu-logo-height; //Logo组件的高度使用变量$base-menu-logo-height，保持一致性
  color: white; //文本颜色设置为白色，确保Logo文字在任何背景色上都能清晰显示
  display: flex; //使用flex布局，以便在水平和垂直方向上居中Logo
  align-items: center; //垂直居中Logo图标和文本
  padding: 5px; //给Logo组件添加10像素的内边距，增加点击区域和视觉效果

  img {
    width: 40px;
    height: 40px;
    flex-shrink: 0; // 不允许图片缩小
    min-width: 40px; // 确保图片最小宽度
  }

  p {
    font-size: $base-logo-title-font-size;
    margin-left: 10px;
    flex-grow: 1; // 文本部分占据剩余空间
    white-space: nowrap; // 防止文本换行
    overflow: hidden; // 隐藏溢出的文本
    text-overflow: ellipsis; // 使用省略号表示溢出的文本
  }
}
</style>
