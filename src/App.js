import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import accessRoutes from "./pages/MenConfig.jsx";

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
        <Routes>
          <Route path="/" element={<Home />}>
            {/* <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/goodform" element={<GoodForm />}></Route>
          <Route path="/good/list" element={<GoodList />}></Route>
          <Route path="/user" element={<User />}></Route> */}
            {createRoutes(accessRoutes)}
          </Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
