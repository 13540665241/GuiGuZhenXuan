//创建用户相关小仓库
import { defineStore } from 'pinia'
// 引入接口
import { reqLogin } from '@/api/user'
// 引入类型
import type { loginFormData } from '@/api/user/type'

//创建小仓库
let useUserStore = defineStore('user', {
  // 仓库存储数据的地方
  state: () => {
    return {
      token: localStorage.getItem('TOKEN'), //存储用户唯一标识的token
      menu: [],
      userInfo: {},
    }
  },
  //   异步逻辑的地方
  actions: {
    async userLogin(data: loginFormData) {
      // 登录请求
      let result = await reqLogin(data)
      // 登录成功200
      if (result.code == 200) {
        // 将token存储到本地
        this.token = result.data
        // 将token存储到本地
        localStorage.setItem('TOKEN', result.data)
        // 返回结果
        return 'ok'
      } else {
        return Promise.reject(new Error(result.data))
      }
    },
  },
  getters: {},
})

export default useUserStore
