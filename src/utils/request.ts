//进行axios二次封装:使用请求与拦截器
import axios from 'axios';
import { ElMessage } from "element-plus";

//利用axios对象的create方法,去创建axioss实例
let request = axios.create({
  //   基础路径
  baseURL:import.meta.env.VITE_APP_BASE_URL,
})

//第二步:request实例添加请求与响应拦截器
request.interceptors.request.use((config)=>{
  //请求拦截器
  // 返回配置对象
  return config;
},()=>{
  //请求拦截器错误处理
  return Promise.reject()
})

//第三步：响应拦截器
request.interceptors.response.use((response)=>{
  //响应拦截器
  return response.data;
},(error)=>{
  //响应拦截器错误处理
  //处理网络错误
  let msg = '';
  let status = error.response.status;
  switch (status) {
    case 401:
      msg = "token过期";
      break;
    case 403:
      msg = '无权访问';
      break;
    case 404:
      msg = "请求地址错误";
      break;
    case 500:
      msg = "服务器出现问题";
      break;
    default:
      msg = "无网络";

  }
  ElMessage({
    type: 'error',
    message: msg
  })
  return Promise.reject(error);
})

//第四步：导出request实例
export default request;