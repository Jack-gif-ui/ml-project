//封装API接口

import http from "./http";

//封装注册接口
export function register(name, pwd) {
  return http.post("/api/v1/user/register", {
    loginName: name,
    password: pwd,
  });
}

//封装登陆接口
export function login(username, pwd) {
  return http.get("/address", {
    loginName: username,
    // passwordMd5: md5(pwd)
    passwordMd5: pwd,
  });
}
