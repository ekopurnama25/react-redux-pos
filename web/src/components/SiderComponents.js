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
const SiderComponents = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [breakPointState, setBreakPointState] = useState(false);
  const [screenWidth, setScreenWidth] = useState(1000);
  const { Sider } = Layout;
  const { SubMenu } = Menu;
  const DemoBox = (props) => (
    <p className={`height-${props.value}`}>{props.children}</p>
  );

  const toggle = () => {
    setCollapsed((prevState) => !prevState);
  };
  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    breakPointState ? setCollapsed(true) : setCollapsed(false);
  }, [breakPointState]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <Sider
      style={{
        overflow: "auto",
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        bottom: 0,
      }}
      trigger={null}
      collapsible
      collapsed={collapsed}
      collapsedWidth={screenWidth < 480 ? 0 : 80}
      //onCollapse={onCollapse}
      breakpoint="lg"
      onBreakpoint={(broken) => {
        setBreakPointState(broken);
      }}
    >
      <div className="logo" />
      <Row justify="center" align="top">
        <Col style={{ margin: 18 }}>
          <Avatar
            size={{ xs: 50, sm: 52, md: 57, lg: 64, xl: 80, xxl: 100 }}
            src={Logo}
          />
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
