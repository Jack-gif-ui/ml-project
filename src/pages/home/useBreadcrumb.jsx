import asyncRoutes from "../MenConfig";
import { useLocation } from "react-router-dom";

function useBreadcrumb() {
  let routes = [...asyncRoutes];
  let { pathname } = useLocation();
  let result = [routes[0]];
  for (let i = 1; i < routes.length; i++) {
    if (routes[i].children) {
      for (let j = 0; j < routes[i].children.length; j++) {
        if (routes[i].children[j].path === pathname) {
          result.push(routes[i]);
          result.push(routes[i].children[j]);
        }
      }
    } else {
      if (pathname === routes[i].path) {
        result.push(routes[i]);
      }
    }
  }
  return result;
}
export default useBreadcrumb;
