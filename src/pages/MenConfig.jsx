import React from "react";
import {
  UserOutlined,
  VideoCameraOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import Dashboard from "./dashboard/Dashboard";
import GoodForm from "./goods/GoodForm";
import GoodList from "./goods/GoodList";
import User from "./user/User";
import Home from "./home/Home";
import Login from "./login/Login";

//不需要权限的路由
export const constantRoutes = [
  {
    path: "/",
    element: <Home />,
    children: [],
  },
  {
    path: "/login",
    element: <Login />,
    children: [],
  },
];

//路由配置表
export const asyncRoutes = [
  {
    key: 1001,
    path: "/dashboard",
    label: "首页大屏",
    icon: <MenuFoldOutlined />,
    element: <Dashboard />,
    meta: {
      roles: ["admin", "editor"],
    }
  },
  {
    key: 1002,
    icon: <VideoCameraOutlined />,
    label: "商品管理",
    children: [
      {
        key: 100201,
        path: "/good/list",
        icon: null,
        label: "商品列表",
        element: <GoodList />,
      },
      {
        key: 100202,
        path: "/good/add",
        icon: null,
        label: "商品新增",
        element: <GoodForm />,
      },
      {
        key: 100203,
        path: "/good/edit",
        icon: null,
        label: "商品编辑",
        element: <GoodForm />,
      },
    ],
  },
  {
    key: 1003,
    path: "/user",
    element: <User />,
    icon: <UserOutlined />,
    label: "用户管理",
    meta: {
        roles: ["admin", "editor"],
      }
  },
];
