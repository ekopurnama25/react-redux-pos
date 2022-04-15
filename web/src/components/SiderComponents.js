import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Avatar } from "antd";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { Row, Col } from "antd";
import Logo from "../assert/eco.jpg";
const SiderComponents = ({ collapsed, screenWidth, setBreakPointState }) => {
  const { Sider } = Layout;

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      breakpoint="lg"
      collapsedWidth={screenWidth < 480 ? 0 : 80}
      onBreakpoint={(broken) => {
        setBreakPointState(broken);
      }}
      className="sider"
    >
      <div className="logo" />

      <Row justify="center" align="top">
        <Col style={{ margin: 18 }}>
          {!collapsed ? (
            <Avatar size={screenWidth / 15} src={Logo} />
          ) : (
            <Avatar size={screenWidth / 25} src={Logo} />
          )}
        </Col>
      </Row>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
        <Menu.Item key="1" icon={<HomeOutlined />}>
          <Link to="/">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="8" icon={<UserOutlined />}>
          <Link to="/users">Users Account</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SiderComponents;
