import { BrowserRouter, Route, } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import Permission from "./Permission";

//动态创建路由器,可访问路由
function createRoutes(accessRoutes) {
  let res = [];
  //遍历路由表
  accessRoutes.forEach((route) => {
    //没有孩子
    if (route.path && route.element) {
      res.push(
        <Route
          key={route.key}
          path={route.path}
          element={route.element}
        ></Route>
      );
    }
    //有孩子
    if (route.children) {
      route.children.forEach((route) => {
        res.push(
          <Route
            key={route.key}
            path={route.path}
            element={route.element}
          ></Route>
        );
      });
    }
  });
  return res;
}



function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {/* <Link to="/">首页</Link>
      <Link to="/login">登陆</Link> */}
        {/* <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes> */}
        <Permission />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
