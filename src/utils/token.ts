// 封装本地存储数据和读取数据方法
export const SET_TOKEN = (token: string) => {
  localStorage.setItem('TOKEN', token)
  console.log('设置了 TOKEN:', token)
}

// 存储本地获取数据
export const GET_TOKEN = () => {
  const token = localStorage.getItem('TOKEN')
  console.log('TOKEN 的值:', token)
  return token
}

// 删除本地存储的方法
export const REMOVE_TOKEN = () => {
  localStorage.removeItem('TOKEN')
  console.log('删除了 TOKEN')
}
