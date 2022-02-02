import React from "react";
import { Table, Button, Typography, Row, Col } from "antd";
import { EditFilled, DeleteFilled } from "@ant-design/icons";
import { getKeyData } from "../utils/getKeyData";

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
        return <Text type="danger">{roles?.status}</Text>;
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      render: () => {
        return (
          <>
            <Row style={{ margin: 20 }}>
              <Col span={10}>
                <Button type="primary" icon={<EditFilled />}>
                  Update
                </Button>
              </Col>
              <Col span={10}>
                <Button type="danger" icon={<DeleteFilled />}>
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
