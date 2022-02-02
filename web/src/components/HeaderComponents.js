import React from "react";
import { Layout, Avatar, Col } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Row } from "antd";
import { Typography } from "antd";

const HeaderComponents = () => {
  const { Header } = Layout;
  const { Title } = Typography;
  return (
    <Header
      className="site-layout-background"
      style={{ padding: 0, background: "#f0f2f5" }}
    >
      <Row style={{ margin: 20 }}>
        <Col span={12} justify="start">
          <Title level={4} style={{ color: "#85a5ff" }}>
            Dashboard
          </Title>
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
