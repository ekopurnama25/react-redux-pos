import React from "react";
import { Form, Input, Select, Button, Skeleton } from "antd";
import { UpdateUsersID } from "../store/actions/usersactions";
import { useDispatch } from "react-redux";

const FormUpdateUsers = ({ id, data }) => {
  const { Option } = Select;
  const dispatch = useDispatch();
  const [formUpdateUser] = Form.useForm();

  // const onFinishFailed = (errorInfo) => {
  //   console.log("Failed:", errorInfo);
  // };

  const EditUsers = (userData) => {
    try {
      dispatch(UpdateUsersID(id, userData));
    } catch (err) {
      console.log(err);
    }
  };

  return !data?.data ? (
    <Skeleton />
  ) : (
    <>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        form={formUpdateUser}
        onFinish={EditUsers}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
          initialValue={data.data?.username}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your username!" }]}
          initialValue={data.data?.email}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="roles"
          label="Roles"
          rules={[
            {
              required: true,
            },
          ]}
          initialValue={data.data?.roles[0].roles}
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
          initialValue={data.data?.roles[0].status}
        >
          <Select placeholder="Select Status" allowClear>
            <Option value="Enable">Enable</Option>
            <Option value="Disable">Disable</Option>
          </Select>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default FormUpdateUsers;
