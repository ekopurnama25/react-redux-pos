import React from "react";
import { Table, Button, Typography, Skeleton, Space, Modal } from "antd";
import {
  EditFilled,
  DeleteFilled,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

import { useNavigate } from "react-router-dom";

import { getKeyData } from "../utils/getKeyData";
import { deleteUsers } from "../store/actions/usersactions";

import { useDispatch } from "react-redux";

const { Text } = Typography;

const TableUsersComponents = ({ data }) => {
  const columns = [
    {
      title: "No",
      dataIndex: "key",
    },
    {
      title: "Email",
      dataIndex: "email",
      sorter: (a, b) => a.email.localeCompare(b.email),
    },
    {
      title: "Username",
      dataIndex: "username",
      sorter: (a, b) => a.username.localeCompare(b.username),
    },
    {
      title: "Status",
      dataIndex: "roles",
      sorter: (a, b) => a.roles[0].status.localeCompare(b.roles[0].status),
      render: (roles) => {
        return roles?.map((role, idx) => (
          <Text
            key={idx}
            type={
              role?.status.toLowerCase() === "enable" ? "success" : "danger"
            }
          >
            {role?.status}
          </Text>
        ));
      },
    },
    {
      title: "Action",
      render: (user) => {
        return (
          <>
            <Space>
              <Button
                shape="round"
                type="primary"
                onClick={() => {
                  handleUpdate(user?.id_users);
                }}
                icon={<EditFilled />}
              >
                Update
              </Button>
              <Button
                shape="round"
                type="danger"
                icon={<DeleteFilled />}
                onClick={() => {
                  handleDelete(user?.id_users);
                }}
              >
                Delete
              </Button>
            </Space>
          </>
        );
      },
    },
  ];

  const dataModified = getKeyData(data);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleUpdate = (id) => {
    navigate(`/usersupdate/${id}`);
  };

  const handleDelete = (id) => {
    Modal?.confirm({
      title: <span>Apkah kamu yakin akan menghapus item ini?</span>,
      icon: <ExclamationCircleOutlined />,
      onOk() {
        dispatch(deleteUsers(id));
      },
      onCancel() {},
    });
  };

  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }
  return !data ? (
    <Skeleton />
  ) : (
    <>
      <Table columns={columns} dataSource={dataModified} onChange={onChange} />
    </>
  );
};

export default TableUsersComponents;
