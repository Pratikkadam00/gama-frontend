import React, { useState } from "react";
import podcast from "../assets/podcast.svg";
import { Project } from "../store/projectStore";
import CreateProjectModal from "./CreateProjectModal";

const NoProjectScreen = () => {
  const { isCreateProjectModalOpen, toggleIsCreateProjectModal } = Project(
    (state) => state
  );
  const handleNewProjectClick = () => {
    toggleIsCreateProjectModal(true);
  };
  return (
    <>
      <div className="min-h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-6xl font-bold text-purple-600 mb-4 mt-16">
          Create a New Project
        </h1>
        <img src={podcast} alt="Project Illustration" className="w-1/2 mb-6" />
        <p className="text-gray-500 mb-6 max-w-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <button
          onClick={handleNewProjectClick}
          className="bg-[#211935] text-white py-3 px-6 rounded-lg text-lg flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4v16m8-8H4"
            />
          </svg>
          Create New Project
        </button>
      </div>
      {isCreateProjectModalOpen && <CreateProjectModal />}
    </>
  );
};

export default NoProjectScreen;
