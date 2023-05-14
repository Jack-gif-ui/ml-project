import React from "react";
import { Menu } from "antd";

import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.png";
import "./css/logo.css";

import { Link } from "react-router-dom";
import useMenu from "./userMenu";
import { useSelector } from "react-redux";

const Logo = ({ value }) => {
  return (
    <div className={`logo ${value ? "-small" : ""}`}>
      <img src={value ? logo2 : logo1} alt=""></img>
    </div>
  );
};

function getItem(label, key, icon, children, path, type) {
  return {
    key,
    icon,
    children,
    label:path? <Link to={path}>{label}</Link>: label,
    type,
    path,
  };
}

/* const items = [
  getItem("Option 1", "1", <PieChartOutlined />),
  getItem("Option 2", "2", <DesktopOutlined />),
  getItem("Option 3", "3", <ContainerOutlined />),
  getItem("Navigation One", "sub1", <MailOutlined />, [
    getItem("Option 5", "5"),
    getItem("Option 6", "6"),
    getItem("Option 7", "7"),
    getItem("Option 8", "8"),
  ]),
]; */
function createItems(asyncRoutes) {
  let result = [];
  asyncRoutes.forEach((route) => {
    if (!route.children) {
      //没有孩子
      result.push(
        getItem(route.label, route.key, route.icon, null, route.path)
      );
    } else {
      //有孩子
      result.push(
        getItem(route.label, route.key, route.icon, createItems(route.children),route.path)
      )
    }
  });
  return result;
}
//console.log(createItems(asyncRoutes))

export default function LeftSider(props) {
  //使用自定义hook
  const [openKeys,selectedKeys] = useMenu()


  const {accessRoutes} = useSelector((state)=>state.user_reducer)
  return (
    <div>
      <Logo {...props} />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={selectedKeys}
        defaultOpenKeys={openKeys}
        items={createItems(accessRoutes)}
      />
    </div>
  );
}
