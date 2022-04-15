import React from "react";
import { Button, Form, Input, Col } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authusers } from "../store/actions/authaction";

const FormLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formSignIn] = Form.useForm();

  const SignInUsers = (userAuth) => {
    try {
      dispatch(authusers(userAuth));
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Col style={{ margin: "50px 5px 0" }}>
        <Form form={formSignIn} onFinish={SignInUsers}>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input placeholder="email" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Sign In
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </>
  );
};

export default FormLogin;
