//创建用户相关小仓库
import { defineStore } from 'pinia'
// 引入接口
import { reqLogin } from '@/api/user'
// 引入类型
import type { loginFormData, loginResponseData } from '@/api/user/type'
import type { UserState } from '@/stores/modules/types/type'
//引入本地存储工具方法
import { SET_TOKEN, GET_TOKEN } from '@/utils/token'
// 引入常量路由
import { constantRoutes } from '@/router/routes'

//创建小仓库
let useUserStore = defineStore('user', {
  // 仓库存储数据的地方
  state: (): UserState => {
    return {
      token: GET_TOKEN(), //存储用户唯一标识的token
      menuRoutes: constantRoutes, //仓库存储菜单需要的数组（路由）
    }
  },
  // 修改仓库数据的方法
  actions: {
    async userLogin(data: loginFormData) {
      // 登录请求
      let result: loginResponseData = await reqLogin(data)
      // 登录成功200
      if (result.code == 200) {
        // 将token存储到本地
        this.token = result.data.token as string
        // 将token存储到本地
        // localStorage.setItem('TOKEN', (result.data.token as string))
        SET_TOKEN(result.data.token as string)
        // 返回结果
        return 'ok'
      } else {
        return Promise.reject(new Error(result.data.message))
      }
    },
  },
  getters: {},
})

export default useUserStore
