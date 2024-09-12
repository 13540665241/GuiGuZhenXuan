//路由鉴权：访问路由，判断是否有权限访问
import router from '@/router'
import nprogress from 'nprogress'
// 引入进度条样式
import 'nprogress/nprogress.css'
// 获取小仓库
import pinia from '@/stores'
import useUserStore from '@/stores/modules/user'

let userStore = useUserStore(pinia)
console.log(userStore)

//全局前置守卫
router.beforeEach((to: any, from: any, next: any) => {
  //to:目标路由对象
  //from:源路由对象
  //next:放行函数
  //判断用户是否登录
  nprogress.start()

  // 获取token，判断用户是否登录
  let token = userStore.token
  if (token) {
    next()
  } else {
    //未登录
    if (to.path == '/login') {
      //去login
      next({ path: '/' })
    } else {
      //用户未登录的判断
      next({
        path: '/login',
        query: {
          redirect: to.path,
        },
      })
    }
  }
})

//全局后置守卫
router.afterEach((to: any, from: any) => {
  //to:目标路由对象
  //from:源路由对象
  //判断是否修改了路由
  nprogress.done()
})
