import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Avatar } from "antd";
import {
  AppstoreOutlined,
  HomeOutlined,
  FileDoneOutlined,
  SyncOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Row, Col } from "antd";
import Logo from "../assert/eco.jpg";
const SiderComponents = ({ collapsed, screenWidth, setBreakPointState }) => {
  const { Sider } = Layout;
  const { SubMenu } = Menu;

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
        <SubMenu key="sub1" icon={<AppstoreOutlined />} title="Master Data">
          <Menu.Item key="2">Goods</Menu.Item>
          <Menu.Item key="3">Stock of Goods</Menu.Item>
          <Menu.Item key="5">Price of Goods</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<SyncOutlined />} title="History">
          <Menu.Item key="6">Sales History</Menu.Item>
        </SubMenu>
        <SubMenu key="sub3" icon={<FileDoneOutlined />} title="PDF Print">
          <Menu.Item key="7">PDF Sales History</Menu.Item>
        </SubMenu>
        <Menu.Item key="8" icon={<UserOutlined />}>
          <Link to="users">Users Account</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SiderComponents;
