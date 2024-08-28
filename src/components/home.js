import React, { useState, useEffect } from "react";
import NoProjectScreen from "./NoProjectScreen";
import ProjectScreen from "./ProjectScreen";
import CreateProjectModal from "./CreateProjectModal";
import { Project } from "../store/projectStore";
import { User } from "../store/userStore";

export const Home = () => {
  const { projectList, isCreateProjectModalOpen, getProjectsWithUserId } =
    Project((state) => state);
  const { user } = User((state) => state);
  const { userId } = user;
  useEffect(() => {
    if (!userId) return;
    getProjectsWithUserId(userId);
  }, [userId]);
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-gray-100">
      {projectList.length === 0 ? <NoProjectScreen /> : <ProjectScreen />}

      {isCreateProjectModalOpen && <CreateProjectModal />}
    </div>
  );
};
