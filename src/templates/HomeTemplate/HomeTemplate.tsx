import React from "react";
import { Outlet } from "react-router-dom";
import Dashboard from "../../components/Dashboard/Dashboard";
import Header from "../../components/Header/Header";

type Props = {};

const HomeTemplate = (props: Props) => {
  return (
    <div className="min-h-screen md:px-10 md:py-5 bg-lite">
      <Header />
      <div className="flex items-start gap-x-10">
        <Dashboard />
        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default HomeTemplate;
