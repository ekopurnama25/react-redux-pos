import React, { useEffect } from "react";
import { Layout, Row, Col, Card } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../store/actions/usersactions";
import TableUsersComponents from "../components/TableUsersComponent";
import DrawerUsersComponents from "../components/DrawerUsersComponents";
import Layouts from "../components/Layouts";
const { Content } = Layout;

const UsersPages = ({ visible, size }) => {
  const { users } = useSelector((state) => state.listUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <Layouts title="Users">
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
    </Layouts>
  );
};

export default UsersPages;
