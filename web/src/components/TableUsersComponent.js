import React, { useState } from "react";
import { Table, Button, Typography, Row, Col } from "antd";
import { EditFilled, DeleteFilled } from "@ant-design/icons";
import { getKeyData } from "../utils/getKeyData";
import { deleteUsers } from "../store/actions/usersactions";

import { useDispatch } from "react-redux";

const { Text } = Typography;

const TableUsersComponents = ({ data }) => {
  const columns = [
    {
      title: "No",
      dataIndex: "key",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Email",
      dataIndex: "email",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Username",
      dataIndex: "username",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Status",
      //   dataIndex: ["roles", "status"],
      dataIndex: "roles",
      sorter: (a, b) => a.age - b.age,
      render: (roles) => {
        //const StatusUsers = "Eneble";
        //console.log({ id_users });
        return <Text type="danger">{roles?.status}</Text>;
      },
    },
    {
      title: "Action",
      dataIndex: "roles",
      render: (roles) => {
        return (
          <>
            <Row style={{ margin: 20 }}>
              <Col span={10}>
                <Button type="primary" icon={<EditFilled />}>
                  Update
                </Button>
              </Col>
              <Col span={10}>
                <Button
                  type="danger"
                  icon={<DeleteFilled />}
                  onClick={(e) => {
                    DeleteUsers(e, roles.id);
                  }}
                >
                  Delete
                </Button>
              </Col>
            </Row>
          </>
        );
      },
    },
  ];

  const dataModified = getKeyData(data);
  const dispatch = useDispatch();
  const DeleteUsers = (e, id) => {
    e.preventDefault();
    try {
      dispatch(deleteUsers(id));
    } catch (err) {
      console.log(err);
    }
  };

  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }
  return (
    <>
      <Table columns={columns} dataSource={dataModified} onChange={onChange} />
    </>
  );
};

export default TableUsersComponents;
