import React from "react";
import { Layout, Avatar, Col, Typography, Row } from "antd";
import {
  UserOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";

const HeaderComponents = ({ collapsed, toggle }) => {
  const { Header } = Layout;
  const { Title } = Typography;
  return (
    <Header
      className="site-layout-background header"
      style={{ padding: 0, background: "#f0f2f5" }}
    >
      <Row style={{ margin: 20 }}>
        <Col span={12} justify="start">
          <Row>
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: toggle,
              }
            )}
            <Title level={4} style={{ color: "#85a5ff" }}>
              Dashboard
            </Title>
          </Row>
        </Col>
        <Col span={12}>
          <Row justify="end">
            <Avatar size="large" icon={<UserOutlined />} />
          </Row>
        </Col>
      </Row>
    </Header>
  );
};

export default HeaderComponents;
