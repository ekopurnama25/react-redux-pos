import React from "react";
import { Layout, Row, Col, Card, Avatar, Typography } from "antd";
import {
  UserOutlined,
  ShoppingCartOutlined,
  DollarOutlined,
  AreaChartOutlined,
} from "@ant-design/icons";

const { Content } = Layout;
const { Title } = Typography;

const HomePages = () => {
  return (
    <>
      <Layout title="home">
        <Content
          style={{
            margin: "26px 16px 0",
            overflow: "initial",
            background: "#f0f2f5",
          }}
        >
          <div className="site-card-wrapper">
            <Row gutter={16}>
              <Col lg={6} md={12} xs={24} xxl={6}>
                <Card
                  hoverable
                  style={{
                    background: "#85a5ff",
                    borderRadius: 10,
                  }}
                >
                  <Row gutter={16}>
                    <Col span={12}>
                      <Avatar
                        style={{ backgroundColor: "#85a5ff" }}
                        size={{
                          xs: 100,
                          sm: 100,
                          md: 100,
                          lg: 100,
                          xl: 100,
                          xxl: 100,
                        }}
                        icon={<UserOutlined />}
                      />
                    </Col>
                    <Col span={12}>
                      <Col>
                        <Title level={4} style={{ color: "#ffffff" }}>
                          Users
                        </Title>
                      </Col>
                      <Col>
                        <Title level={4} style={{ color: "#ffffff" }}>
                          100
                        </Title>
                      </Col>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col xs={24} md={12} lg={6}>
                <Card
                  hoverable
                  style={{
                    background: "#ff85c0",
                    borderRadius: 10,
                  }}
                >
                  <Row gutter={16}>
                    <Col span={12}>
                      <Avatar
                        style={{ backgroundColor: "#ff85c0" }}
                        size={{
                          xs: 100,
                          sm: 100,
                          md: 100,
                          lg: 100,
                          xl: 100,
                          xxl: 100,
                        }}
                        icon={<AreaChartOutlined />}
                      />
                    </Col>
                    <Col span={12}>
                      <Col>
                        <Title level={4} style={{ color: "#ffffff" }}>
                          Graphs
                        </Title>
                      </Col>
                      <Col>
                        <Title level={4} style={{ color: "#ffffff" }}>
                          100
                        </Title>
                      </Col>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col lg={6} md={12} xs={24}>
                <Card
                  hoverable
                  style={{
                    background: "#87e8de",
                    borderRadius: 10,
                  }}
                >
                  <Row gutter={16}>
                    <Col span={12}>
                      <Avatar
                        style={{ backgroundColor: "#87e8de" }}
                        size={{
                          xs: 100,
                          sm: 100,
                          md: 100,
                          lg: 100,
                          xl: 100,
                          xxl: 100,
                        }}
                        icon={<DollarOutlined />}
                      />
                    </Col>
                    <Col span={12}>
                      <Col>
                        <Title level={4} style={{ color: "#ffffff" }}>
                          Income
                        </Title>
                      </Col>
                      <Col>
                        <Title level={4} style={{ color: "#ffffff" }}>
                          100
                        </Title>
                      </Col>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col lg={6} md={12} xs={24}>
                <Card
                  hoverable
                  style={{
                    background: "#fff566",
                    borderRadius: 10,
                  }}
                >
                  <Row gutter={16}>
                    <Col span={12}>
                      <Avatar
                        style={{ backgroundColor: "#fff566" }}
                        size={{
                          xs: 100,
                          sm: 100,
                          md: 100,
                          lg: 100,
                          xl: 100,
                          xxl: 100,
                        }}
                        icon={<ShoppingCartOutlined />}
                      />
                    </Col>
                    <Col span={12}>
                      <Col>
                        <Title level={4} style={{ color: "#ffffff" }}>
                          Goods
                        </Title>
                      </Col>
                      <Col>
                        <Title level={4} style={{ color: "#ffffff" }}>
                          100
                        </Title>
                      </Col>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          </div>
        </Content>
        <Content
          style={{
            margin: "26px 16px 0",
            overflow: "initial",
            background: "#f0f2f5",
          }}
        >
          <Row gutter={16}>
            <Col lg={24} md={24} xs={24} xxl={24}>
              <Card title="First React Redux" size="small">
                <b>Eko Purnama Azi</b>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </Card>
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
};

export default HomePages;
