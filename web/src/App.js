import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import HomePages from "./pages/HomePages";
import UsersPages from "./pages/UsersPages";
import { Layout } from "antd";
import FooterComponents from "./components/FooterComponents";
import HeaderComponents from "./components/HeaderComponents";
import SiderComponents from "./components/SiderComponents";
import UsersUpdatePages from "./pages/UsersUpdatePages";
import Login from "./pages/Login";

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [breakPointState, setBreakPointState] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggle = () => {
    setCollapsed((prevState) => !prevState);
  };
  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    breakPointState ? setCollapsed(true) : setCollapsed(false);
    window.addEventListener("resize", handleResize);
  }, [breakPointState]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Routes>
        <Route exact path="/login" element={<Login />} />

        {/* <SiderComponents
          collapsed={collapsed}
          screenWidth={screenWidth}
          setBreakPointState={setBreakPointState}
          {...breakPointState}
        />
        <Layout
          className={`site-layout ${collapsed ? "collaps-margin" : "ml-200"}`}
        >
          <HeaderComponents collapsed={collapsed} toggle={toggle} /> */}

        <Route exact path="/" element={<HomePages />} />
        <Route exact path="/users" element={<UsersPages />} />
        <Route exact path="/usersupdate/:id" element={<UsersUpdatePages />} />
        {/* </Layout>
        <FooterComponents /> */}
      </Routes>
    </>
  );
}

export default App;
