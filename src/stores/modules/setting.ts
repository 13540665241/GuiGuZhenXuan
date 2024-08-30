//小仓库：layout 头部设置
import { defineStore } from 'pinia'

let useLayOutSettingStore = defineStore('SettingStore', {
  state: () => {
    return {
      fold: false, //菜单折叠
      refsh: false, //控制刷新效果
    }
  },
})

export default useLayOutSettingStore
