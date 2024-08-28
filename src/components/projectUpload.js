import React, { useState } from "react";
import SideNavbar from "./SideNavbar";
import { Outlet } from "react-router-dom";

export const ProjectUpload = () => {


  return (
    <div className="flex">
      <SideNavbar />
      <Outlet/>    
    </div>
  );
};
