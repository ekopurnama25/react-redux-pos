import React, { useEffect, useState } from "react";
import { Layout, Row, Col, Card, Button, Space } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../store/actions/usersactions";
import TableUsersComponents from "../components/TableUsersComponent";
import DrawerUsersComponents from "../components/DrawerUsersComponents";
const { Content } = Layout;

const UsersPages = ({ visible, size }) => {
  const { users } = useSelector((state) => state.listUsers);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <Content
      style={{
        margin: "26px 16px 0",
        overflow: "initial",
        background: "#f0f2f5",
      }}
    >
      <div className="site-card-wrapper">
        <Row>
          <Col span={24}>
            <Card title="Users Account">
              <Row justify="end">
                <Col style={{ marginBottom: 15 }}>
                  <DrawerUsersComponents visible={visible} size={size} />
                </Col>
              </Row>
              <TableUsersComponents data={users} />
            </Card>
          </Col>
        </Row>
      </div>
    </Content>
  );
};

export default UsersPages;
