//创建用户相关小仓库
import { defineStore } from 'pinia'
// 引入接口
import { reqLogin, reqUserInfo } from '@/api/user'
// 引入类型
import type {
  loginFormData,
  loginResponseData,
  userInfoResponseData,
} from '@/api/user/type'
import type { UserState } from '@/stores/modules/types/type'
//引入本地存储工具方法
import { GET_TOKEN, SET_TOKEN } from '@/utils/token'
// 引入常量路由
import { constantRoutes } from '@/router/routes'

//创建小仓库
let useUserStore = defineStore('user', {
  // 仓库存储数据的地方
  state: (): UserState => {
    return {
      token: GET_TOKEN(), //存储用户唯一标识的token
      menuRoutes: constantRoutes, //仓库存储菜单需要的数组（路由）
      username: '',
      avatar: '',
    }
  },
  // 修改仓库数据的方法
  actions: {
    async userLogin(data: loginFormData) {
      // 登录请求
      let result: loginResponseData = await reqLogin(data)

      // 登录成功200
      if (result.code == 200) {
        /* 这里之前错误的写成了this.token = result.data.token as string，导致无法获取到token
         * 如果 reqLogin 的返回数据 result.data 是一个字符串（即 token 本身），那么应该使用 this.token = result.data as string
         * 如果 result.data 是一个对象，并且这个对象中包含 token 字段，应该使用 this.token = result.data.token as string
         * */
        // 将token存储到本地
        this.token = result.data as string
        // 将token存储到本地
        // localStorage.setItem('TOKEN', (result.data.token as string))
        SET_TOKEN(result.data as string)
        // 返回结果
        return 'ok'
      } else {
        return Promise.reject(new Error(result.data.message))
      }
    },

    //获取用户信息的方法
    async userInfo() {
      //获取用户信息存储在仓库中
      const result: userInfoResponseData = await reqUserInfo()
      console.log('result的值：', result)

      //如果获取用户信息成功
      if (result.code == 200) {
        this.username = result.data.name as string
        this.avatar = result.data.avatar as string
      }
    },
  },

  getters: {},
})

export default useUserStore
