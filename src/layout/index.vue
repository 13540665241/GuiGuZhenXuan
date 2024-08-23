<template>
  <div class="layout-container">
    <!--左侧菜单-->
    <div class="layout-slider">
      <Logo></Logo>
      <!--展示菜单-->
      <!--滚动组件-->
      <el-scrollbar class="scrollbar">
        <!--菜单组件-->
        <el-menu
          :default-active="$route.path"
          background-color="#001529"
          text-color="white"
        >
          <!--根据路由动态生成组件-->
          <Menu :menuList="userStore.menuRoutes"></Menu>
        </el-menu>
      </el-scrollbar>
    </div>

    <!--顶部菜单-->
    <div class="layout-tabbar">
      <!-- layout顶部导航组件 -->
      <Tabbar></Tabbar>
    </div>

    <!--内容展示区域-->
    <div class="layout-main">
      <Main></Main>
    </div>
  </div>
</template>

<script lang="ts" setup>
//引入左侧菜单logo子组件
import Logo from './logo/index.vue'
// 引入菜单组件
import Menu from './menu/index.vue'
// 右侧内容展示区
import Main from './main/index.vue'
// 引入顶部Tabbar组件
import Tabbar from './tabbar/index.vue'
// 获取用户相关的小仓库
import useUserStore from '@/stores/modules/user'
// 获取路由对象
import { useRoute } from 'vue-router'

let userStore = useUserStore()
// 获取路由对象
let $route = useRoute()
</script>

<style lang="scss" scoped>
//引入全局SCSS变量
@import '@/styles/variable.scss';

.layout-container {
  width: 100%;
  height: 100vh;

  .layout-slider {
    color: white;
    width: $base-menu-width;
    height: 100vh;
    background: $base-menu-background;

    .scrollbar {
      width: 100%;
      height: calc(100vh - #{$base-menu-logo-height});

      .el-menu {
        border-right: none;
      }
    }
  }

  .layout-tabbar {
    position: fixed;
    //插入变量值，而不进行单位的计算。CSS 将正确处理 100% 和 260px 的减法运算。
    width: calc(100% - #{$base-menu-width});
    height: $base-tabbar-height;
    top: 0;
    left: $base-menu-width;
  }

  .layout-main {
    position: absolute;
    width: calc(100% - #{$base-menu-width});
    height: calc(100vh - #{$base-tabbar-height});
    background: orange;
    top: $base-tabbar-height;
    left: $base-menu-width;
    padding: 20px;
    overflow: auto;
  }
}
</style>
