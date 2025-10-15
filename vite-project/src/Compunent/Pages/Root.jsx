import React from "react";
import Header from "../Root File/Header";
import { Outlet } from "react-router";
import Footer from "../Root File/Footer";

const Root = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
