//登录接口需要携带参数TS类型
export interface loginForm {
  username: string
  password: string
}

interface dataType {
  token: string
}

//登录接口返回数据类型
export interface loginResponseData {
  code: number
  data: dataType
}

interface userinfo {
  userId: number
  avatar: string //头像
  username: string //用户名
  password: string //密码
  desc: string //个人简介
  role: string[] //角色
  buttons: string[] //按钮权限
  routes: string[] //路由权限
  token: string //token
}

//用户信息接口返回数据类型
interface user {
  checkUser: userinfo
}

export interface userResponseData {
  code: number
  data: user
}
