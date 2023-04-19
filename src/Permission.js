import { useRoutes } from "react-router-dom";
import constantRoutes from "./pages/MenConfig";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useMemo } from "react";
import getInfo from "./store/actionsCreator";
import { generateRoutes } from "./store/permission";
import { asyncRoutes } from "./pages/MenConfig";

function Page() {
  const { token, roles, accessRoutes } = useSelector(
    (state) => state.user_reducer
  );
  const despatch = useDispatch();
  useEffect(() => {
    despatch(getInfo());
  }, [token]);

  useEffect(() => {
    if (roles && roles.length > 0) {
      //生成当前用户可访问的路由规则
      dispatchEvent(generateRoutes(asyncRoutes, roles));
    }
  }, [roles]);

  useEffect(() => {
    if (accessRoutes && accessRoutes.length > 0) {
      navigator("/dashboard", { replace: true });
    }
  }, [accessRoutes]);

  //计算出全部的路由规则
  const routes = useMemo(() => {
    const result = [...constantRoutes];
    result[0].children = accessRoutes;
    return result;
  }, [accessRoutes]);
  //这里是所有的路由规则 routes

  const element = useRoutes(constantRoutes);
  return element;
}
export default Page;
