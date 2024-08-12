import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
// 引入element-plus插件与样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 引入模板全局样式
import '@/styles/index.scss'
// 配置国际化
// @ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// SVG插件配置代码
import 'virtual:svg-icons-register'
// 引入自定义插件对象：注册全局组件
import globalComponent from '@/components'
// 引入路由注册
import router from '@/router'
// 引入pinia仓库
import pinia from '@/stores'

// 获取应用实例对象
const app = createApp(App)
app.use(createPinia())
// 安装element-plus插件
app.use(ElementPlus)
//配置国际化
app.use(ElementPlus, {
  locale: zhCn,
})
// 安装自定义插件
app.use(globalComponent)
// 注册模板路由
app.use(router)
// 注册pinia仓库
app.use(pinia)
// 将引用挂载到app上
app.mount('#app')
