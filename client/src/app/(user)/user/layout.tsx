"use client";

import DashboardWrapper from "@/components/UserDashboard/shared/DashboardWrapper/DashboardWrapper";
import React from "react";

interface childrenProms {
  children? :React.ReactNode 
}

const Layout = ({ children }: childrenProms) => {

  return (
   <DashboardWrapper>
    {children}
   </DashboardWrapper>
  );
};

export default Layout;