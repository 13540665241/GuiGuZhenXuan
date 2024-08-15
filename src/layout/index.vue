<template>
  <div class="layout-container">
<!--    左侧菜单-->
    <div class="layout-slider">
      <Logo></Logo>
<!--      展示菜单-->
<!--      滚动组件-->
      <el-scrollbar class="scrollbar">
<!--        菜单组件-->
        <el-menu background-color="#001529" text-color="white">
<!--          <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="2">数据大屏</el-menu-item>
&lt;!&ndash;          折叠的菜单&ndash;&gt;
          <el-sub-menu index="3">
            <template #title>权限管理</template>
            <el-menu-item index="3-1">用户管理</el-menu-item>
            <el-menu-item index="3-2">角色管理</el-menu-item>
            <el-menu-item index="3-3">菜单管理</el-menu-item>
          </el-sub-menu>-->
<!--          根据路由动态生成组件-->
          <Menu :menuList="userStore.menuRoutes"></Menu>
        </el-menu>
      </el-scrollbar>
    </div>
<!--    顶部菜单-->
    <div class="layout-tabbar">456</div>
<!--    内容展示区域-->
    <div class="layout-main">
      <p style="height: 10000px">4饿4444</p>
    </div>
  </div>
</template>

<script setup lang="ts">
//引入左侧菜单logo子组件
import Logo from './logo/index.vue'
// 引入菜单组件
import Menu from  './menu/index.vue'
// 获取用户相关的小仓库
import useUserStore from '@/stores/modules/user'

let userStore = useUserStore()
</script>

<style scoped lang="scss">
//引入全局SCSS变量
@import '@/styles/variable.scss';
.layout-container{
  width: 100%;
  height: 100vh;

  .layout-slider{
    width:$base-menu-width;
    height: 100vh;
    background: $base-menu-background;
    .scrollbar{
      width: 100%;
      height: calc(100vh - #{$base-menu-logo-height});
      .el-menu{
        border-right: none;
      }
    }
  }

  .layout-tabbar{
    position: fixed;
    //插入变量值，而不进行单位的计算。CSS 将正确处理 100% 和 260px 的减法运算。
    width:calc(100% - #{$base-menu-width});
    height:$base-tabbar-height;
    background:black;
    top:0;
    left:$base-menu-width;
  }

  .layout-main{
    position:absolute;
    width:calc(100% - #{$base-menu-width});
    height:calc(100vh - #{$base-tabbar-height});
    background:orange;
    top:$base-tabbar-height;
    left:$base-menu-width;
    padding: 20px;
    overflow: auto;
  }
}
</style>