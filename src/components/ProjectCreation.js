import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const ProjectCreation = () => {
  return (
    <div className="h-screen w-full">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default ProjectCreation;
