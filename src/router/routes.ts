//对外暴露常量配置路由
export const constantRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
  },
  {
    path: '/layout',
    name: 'layout',
    component: () => import('@/views/home/index.vue'),
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404/index.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'any',
    redirect: '/404',
  },
]
