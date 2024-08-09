import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import NoProjectScreen from "./NoProjectScreen";
import ProjectScreen from "./ProjectScreen";
import CreateProjectModal from "./CreateProjectModal";
import { Project } from "../store/projectStore";

export const Home = () => {
  const { projectList, isCreateProjectModalOpen } = Project((state) => state);

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-gray-100">
      {projectList.length === 0 ? <NoProjectScreen /> : <ProjectScreen />}

      {isCreateProjectModalOpen && <CreateProjectModal />}
    </div>
  );
};
