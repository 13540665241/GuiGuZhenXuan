// 引用项目全部的全局组件
import SvgIcon from '@/components/SvgIcon/index.vue';
import type { App, Component } from 'vue';
const components: { [name: string]: Component } = { SvgIcon };

// 对外暴露对象
export default {
  install(app: App) {
    // 注册项目全部的全局组件
    Object.keys(components).forEach((key: string) => {
      // 注册为全局组件
      app.component(key, components[key]);
    })
  }
}
