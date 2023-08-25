import React,{useState} from "react";

// import antd
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import { NavLink, Outlet } from "react-router-dom";
const { Header, Sider, Content } = Layout;
const AdminTemplate = () => {
  // antd
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
      <Layout className="min-h-screen ">
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <UserOutlined />,
                label: <NavLink to='/admin/user'>User</NavLink>,
              },
              {
                key: "2",
                icon: <VideoCameraOutlined />,
                label: <NavLink to='/admin/coures'>Coures</NavLink>,
              },
            ]}
          />
        </Sider>
        <Layout>
          <Header
          className="m-0"
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            {/* Outlet */}
            <Outlet/>
          </Content>
        </Layout>
      </Layout>
  );
};

export default AdminTemplate;
