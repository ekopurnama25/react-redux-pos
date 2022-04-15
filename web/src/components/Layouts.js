import React, { useState, useEffect } from "react";
import { Layout } from "antd";
import FooterComponents from "./FooterComponents";
import HeaderComponents from "./HeaderComponents";
import SiderComponents from "./SiderComponents";

function Layouts({ children, title }) {
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
    // Kasih title secara dinamis tiap2 page
    document.title = title;

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <SiderComponents
        collapsed={collapsed}
        screenWidth={screenWidth}
        setBreakPointState={setBreakPointState}
        {...breakPointState}
      />
      <Layout
        className={`site-layout ${collapsed ? "collaps-margin" : "ml-200"}`}
      >
        <HeaderComponents collapsed={collapsed} toggle={toggle} />

        <main>{children}</main>
      </Layout>
      <FooterComponents />
    </div>
  );
}

export default Layouts;
