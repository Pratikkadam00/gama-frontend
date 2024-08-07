import React, { useState } from "react";
import { IoMdSettings, IoMdNotificationsOutline } from "react-icons/io";
import podcast from "../assets/podcast.svg";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleCreateProject = () => {
    if (!projectName) {
      setError("Project Name can't be empty");
    } else {
      setError("");
      setProjects([...projects, projectName.trim()]);
      closeModal();
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setProjectName("");
    setError("");
  };

  const handleNewProjectClick = () => {
    setShowModal(true);
  };

  const handleBackToHome = () => {
    navigate("/");
  };

  const getInitials = (name) => {
    const words = name.trim().split(/\s+/);
    if (words.length > 1) {
      return words[0][0] + words[1][0];
    }
    return words[0][0];
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <header className="w-full py-6 bg-white shadow-md flex justify-between items-center px-6">
        <div className="text-2xl font-bold text-purple-600">GAMA.</div>
        <div className="flex items-center space-x-4">
          <button className="bg-gray-200 p-2 rounded-full">
            <IoMdSettings className="h-6 w-6" />
          </button>
          <button className="bg-gray-200 p-2 rounded-full">
            <IoMdNotificationsOutline className="h-6 w-6" />
          </button>
        </div>
      </header>

      {projects.length === 0 ? (
        <main className="flex-grow flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-6xl font-bold text-purple-600 mb-4 mt-16">
            Create a New Project
          </h1>
          <img
            src={podcast}
            alt="Project Illustration"
            className="w-1/2 mb-6"
          />
          <p className="text-gray-500 mb-6 max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button
            onClick={handleNewProjectClick}
            className="bg-purple-600 text-white py-3 px-6 rounded-lg text-lg flex items-center"
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
        </main>
      ) : (
        <div className="min-h-screen bg-gray-100 p-8 w-full">
          <header className="flex justify-between items-center mb-8">
            <button
              onClick={handleBackToHome}
              className="text-purple-600 text-lg font-semibold"
            >
              &larr; Back to Home
            </button>
            <button
              onClick={handleNewProjectClick}
              className="bg-purple-600 text-white py-2 px-4 rounded-lg text-lg"
            >
              Create New Project
            </button>
          </header>
          <h1 className="text-4xl font-bold text-purple-600 mb-8">Projects</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-4"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-purple-600 text-white text-2xl font-bold rounded-full">
                  {getInitials(project)}
                </div>
                <div className="text-left">
                  <h2 className="text-xl font-semibold">{project}</h2>
                  <p className="text-gray-500">4 Episodes</p>
                  <p className="text-gray-500">Last edited a week ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <footer className="w-full py-4 bg-white text-center text-gray-500">
        &copy; 2024 GAMA. All rights reserved.
      </footer>

      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-sm flex items-center justify-center">
          <div className="bg-white rounded-3xl p-6 w-11/12 max-w-2xl">
            <h2 className="text-2xl font-bold mb-4">Create Project</h2>
            <label className="block text-left mb-2">Enter Project Name:</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded mb-2"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
            />
            {error && <p className="text-red-500 text-left mb-2">{error}</p>}
            <div className="flex justify-end p-3 space-x-4">
              <button className="text-red-500" onClick={closeModal}>
                Cancel
              </button>
              <button
                className="bg-purple-600 text-white py-2 px-4 rounded"
                onClick={handleCreateProject}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
