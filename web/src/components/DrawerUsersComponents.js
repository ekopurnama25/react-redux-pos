import React, { useState } from "react";
import { Drawer, Button, Space } from "antd";

const DrawerUsersComponents = () => {
  const [visible, setVisible] = useState(false);
  const [size, setSize] = useState();
  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Drawer
        title={`${size} Drawer`}
        placement="right"
        size={size}
        onClose={onClose}
        visible={visible}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="primary" onClick={onClose}>
              OK
            </Button>
          </Space>
        }
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};

export default DrawerUsersComponents;
