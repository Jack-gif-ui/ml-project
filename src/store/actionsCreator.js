export function switchSize(size) {
  return { type: "APP_SIZE", payload: size };
}

export function switchLang(lang) {
  return { type: "APP_LANG", payload: lang };
}

export function switchColor(color) {
  return { type: "APP_COLOR", payload: color };
}

//一个异步的action creater，在action中发送网络请求

// export function login(data) {
//   return function (despatch) {
//     fetchLogin(data).then(({ token }) => {
//       if (token) {
//         localStorage.setItem("token", token);
//         //派发同步action，将token存入redux-- reducer
//         despatch({ type: "USER_LOGIN", payload: token });
//       }
//     });
//   };
// }
//一个异步的actionCreator,根据token获取用户信息
// export function getInfo() {
//   return (dispatch)=>{
//     fetchUserInfo().then(res=>{
//       //获取用户信息并存储
//       dispatch({type:'USER_INFO',payload:res})
//     })
//   }
// }