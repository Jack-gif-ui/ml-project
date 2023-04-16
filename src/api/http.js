//对axios进行封装
import axios from "axios";

//创建axios实例
const http = axios.create({
  //后者是走开发环境服务器node的端口,且它可能被代理服务器获取后重新定向
  baseURL:
    ProcessingInstruction.env === "production" ? "real-port-http:" : "/api/v1",

  timeout: 5000,
});

//添加请求拦截器
http.interceptors.request.use(
  function (config) {
    //登录时存储的token取出来
    config.headers.Authorization = localStorage.getItem("token-name");
    return config;
  },
  //请求出错时的代码
  function (error) {
    return Promise.reject(error);
  }
);

//添加响应拦截器
http.interceptors.response.use(
  function (response) {
    let data = response.data;
    //判断服务器响应的状态码
    //.....
    if (data.resultCode!==200) {
        //提示用户名不存在
        console.log(data.message)||console.log('系统繁忙')
    }
    return data;
  },
  //响应出错时的代码
  function (error) {
    return Promise.reject(error);
  }
);

export default http