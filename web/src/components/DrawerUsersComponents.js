import React, { useState } from "react";
import { Drawer, Button, Space, Form, Input, Select } from "antd";
import { createUsers } from "../store/actions/usersactions";

import { useDispatch } from "react-redux";

const { Option } = Select;

const DrawerUsersComponents = () => {
  const [formUser] = Form.useForm();
  const [visible, setVisible] = useState(false);
  const [size, setSize] = useState();
  const dispatch = useDispatch();

  const onClose = () => {
    setVisible(false);
  };

  const showLargeDrawer = () => {
    setSize("large");
    setVisible(true);
  };

  const saveUsers = (userData) => {
    try {
      dispatch(createUsers(userData));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Space>
        <Button type="primary" ghost onClick={showLargeDrawer}>
          Add Users
        </Button>
      </Space>
      <Drawer
        title={`${size} Drawer`}
        placement="right"
        size={size}
        onClose={onClose}
        visible={visible}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
          </Space>
        }
      >
        <Form form={formUser} onFinish={saveUsers}>
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input placeholder="Username" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item
            name="roles"
            label="Roles"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select placeholder="Select Roles" allowClear>
              <Option value="Admin">Admin</Option>
              <Option value="Users">Users</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="status"
            label="Status"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select placeholder="Select Status" allowClear>
              <Option value="Eneble">Eneble</Option>
              <Option value="Disable">Disable</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Password"
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
              SUBMIT
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
};

export default DrawerUsersComponents;
