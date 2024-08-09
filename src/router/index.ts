//通过vue-router创建路由实例
import {
  createRouter,
  createWebHashHistory,
} from 'vue-router'
import { constantRoutes } from './routes'

//创建路由器
const router:any = createRouter({
  // 路由hash模式
  history: createWebHashHistory(),
  routes: constantRoutes,
  //滚动行为
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

export default router;