import React, { useState } from "react";
import "./css/home.css";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, theme } from "antd";
import LeftSider from "./LeftSider";
import { Outlet } from "react-router-dom";
import HeaderBread from "./HeaderBread";


const { Header, Sider, Content } = Layout;
export default function Home() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <div className="ml-layout">
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <LeftSider value={collapsed}/>
        </Sider>

        <Layout className="site-layout">
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
             {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: () => setCollapsed(!collapsed),
              }
            )} 
            {/* <div onClick={() => setCollapsed(!collapsed)} className="trigger">
              {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </div> */}
            <HeaderBread/>
            
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            <Outlet></Outlet>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}
