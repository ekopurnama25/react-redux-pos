import React, { useEffect } from "react";
import { Layout, Row, Col, Card, Button, Space } from "antd";
import FormUpdateUsers from "../components/FormUpdateUsers";
import { useSelector, useDispatch } from "react-redux";
import { getIdUsers } from "../store/actions/usersactions";
import { useParams } from "react-router-dom";
const { Content } = Layout;

const UsersUpdatePages = () => {
  const { id } = useParams();
  const { users } = useSelector((state) => state.listUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIdUsers(id));
  }, [id]);

  return (
    <Layout title="updateuser">
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
              <Card title="Edit Users">
                <Row>
                  <Col span={24}>
                    <FormUpdateUsers data={users} id={id} />
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </div>
      </Content>
    </Layout>
  );
};

export default UsersUpdatePages;
