import { Card, Col, Layout, Row } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import FormUpdateUsers from "../components/FormUpdateUsers";
import Layouts from "../components/Layouts";
import { getIdUsers } from "../store/actions/usersactions";
const { Content } = Layout;

const UsersUpdatePages = () => {
  const { id } = useParams();
  const { users } = useSelector((state) => state.listUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIdUsers(id));
  }, [dispatch, id]);

  return (
    <Layouts title="Update User">
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
    </Layouts>
  );
};

export default UsersUpdatePages;
