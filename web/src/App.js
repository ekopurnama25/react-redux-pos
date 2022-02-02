import * as React from "react";
import { Route, Routes } from "react-router-dom";
import HomePages from "./pages/HomePages";
import UsersPages from "./pages/UsersPages";
import { Layout } from "antd";
import FooterComponents from "./components/FooterComponents";
import HeaderComponents from "./components/HeaderComponents";
import SiderComponents from "./components/SiderComponents";

function App() {
  return (
    <>
      <Layout hasSider>
        <SiderComponents />
        <Layout className="site-layout" style={{ marginLeft: 200 }}>
          <HeaderComponents />
          <Routes>
            <Route exact path="/" element={<HomePages />} />
            <Route exact path="users" element={<UsersPages />}>
              <Route exact path=":userId" element={<UsersPages />} />
            </Route>
          </Routes>
          <FooterComponents />
        </Layout>
      </Layout>
    </>
  );
}

export default App;
