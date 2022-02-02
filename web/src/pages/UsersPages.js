import React, { useEffect, useState } from "react";
import { Layout, Row, Col, Card, Button, Space } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../store/actions/usersactions";
import TableUsersComponents from "../components/TableUsersComponent";
import DrawerUsersComponents from "../components/DrawerUsersComponents";
const { Content } = Layout;

const UsersPages = () => {
  const [visible, setVisible] = useState(false);
  const [size, setSize] = useState();
  const { users } = useSelector((state) => state.listUsers);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const showLargeDrawer = () => {
    setSize("large");
    setVisible(true);
  };

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
              <Space>
                <Button type="primary" onClick={showLargeDrawer}>
                  Add Users
                </Button>
              </Space>
              <DrawerUsersComponents />
              <TableUsersComponents data={users} />
            </Card>
          </Col>
        </Row>
      </div>
    </Content>
  );
};

export default UsersPages;
