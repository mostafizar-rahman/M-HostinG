import React from "react";
import Header from "../../Components/Shared/Header/Header";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Root;
