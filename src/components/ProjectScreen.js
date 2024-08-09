import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Project } from "../store/projectStore";

const ProjectScreen = () => {
  const navigate = useNavigate();

  const [showEmailPopup, setShowEmailPopup] = useState(true);
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [projects, setProjects] = useState([]);

  const { projectList } = Project((state) => state);

  const handleBackToHome = () => {
    navigate("/");
  };

  const handleCardClick = () => {
    navigate("/upload");
  };

  const getInitials = (name) => {
    const words = name.trim().split(/\s+/);
    if (words.length > 1) {
      return words[0][0] + words[1][0];
    }
    return words[0][0];
  };
  const handleNewProjectClick = () => {
    if (!email) {
      setShowEmailPopup(true);
    } else {
      setShowModal(true);
    }
  };

  return (
    <div className="h-full   w-full bg-gray-100 px-12">
      <header className=" flex justify-between items-end mt-24 ">
        <div className="h-full flex flex-col gap-2">
          <button
            onClick={handleBackToHome}
            className="text-purple-600 text-lg font-semibold"
          >
            &larr; Back to Home
          </button>
          <h1 className="text-4xl font-bold text-purple-600">Projects</h1>
        </div>
        <button
          onClick={handleNewProjectClick}
          className="bg-purple-600 text-white py-2 px-4 rounded-lg text-lg"
        >
          Create New Project
        </button>
      </header>
      <div className="h-[65%] flex  flex-wrap justify-start  gap-x-14 gap-y-10 overflow-y-auto  py-5  mt-5 px-10 ">
        {[...projectList].map((project, index) => (
          <div
            key={index}
            className="h-28  bg-white p-6 rounded-lg flex items-center space-x-4 cursor-pointer "
            onClick={handleCardClick}
          >
            <div className="w-16 h-16 flex items-center justify-center bg-purple-600 text-white text-2xl font-bold rounded-full">
              {getInitials(project.name)}
            </div>
            <div className="text-left">
              <h2 className="text-xl font-semibold">{project.name}</h2>
              <p className="text-gray-500">3 Episodes</p>
              <p className="text-gray-500">Last edited a week ago</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectScreen;
