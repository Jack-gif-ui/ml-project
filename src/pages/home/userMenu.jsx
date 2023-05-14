import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import {asyncRoutes} from "../MenConfig";

function useMenu() {
  let { pathname } = useLocation();

  return useMemo(() => {
    let openKeys = "";
    let selectedKeys = "";
    // console.log(asyncRoutes)

    asyncRoutes.forEach((ele) => {
      if (!ele.children) {
        if (ele.path === pathname) {
          selectedKeys = ele.key + "";
        }
      } else {
        ele.children.forEach((ele2) => {
          if (ele2.path === pathname) {
            selectedKeys = ele2.key + "";
            openKeys = ele.key + "";
          }
        });
      }
    });

    return [[openKeys], [selectedKeys]];
  }, [pathname]);
}

export default useMenu;
