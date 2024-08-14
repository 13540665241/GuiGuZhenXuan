//封装本地存储数据和读取数据方法
export const SET_TOKEN = (token:string) => localStorage.setItem('TOKEN',token)

// 存储本地获取数据
export const GET_TOKEN = () => localStorage.getItem('TOKEN')