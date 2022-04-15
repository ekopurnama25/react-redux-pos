import React, { useEffect } from "react";
import { Card, Row, Col, Typography } from "antd";
import FormLogin from "../components/FormLogin";

const Login = () => {
  const { Title } = Typography;
  useEffect(() => {
    document.title = "Login";
  }, []);

  return (
    <>
      <Row>
        <Col span={24}>
          <Row justify="center">
            <Card
              hoverable
              style={{
                margin: "130px",
                width: 300,
                height: 330,
                backgroundColor: "#eb2f96",
                borderRadius: 10,
              }}
            >
              <Row justify="center">
                <Col>
                  <Title level={5} style={{ color: "#ffffff" }}>
                    LOGIN
                  </Title>
                </Col>
              </Row>
              <Row justify="center">
                <Col>
                  <FormLogin />
                </Col>
              </Row>
            </Card>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Login;
