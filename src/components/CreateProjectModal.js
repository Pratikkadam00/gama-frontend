import React, { useState } from "react";
import { Project } from "../store/projectStore";
import { User } from "../store/userStore";

const CreateProjectModal = () => {
  const [projectName, setProjectName] = useState("");
  const [error, setError] = useState("");

  const { toggleIsCreateProjectModal, createProject } = Project(
    (state) => state
  );
  const { user } = User((state) => state);

  const closeModal = () => {
    toggleIsCreateProjectModal(false);
    setProjectName("");
    setError("");
  };

  const handleCreateProject = () => {
    if (!projectName) {
      setError("Project Name can't be empty");
    } else {
      setError("");
      createProject({ projectName, userId: user.userId });
      closeModal();
    }
  };

  return (
    <div className="absolute h-screen w-full top-0 bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-sm flex items-center justify-center">
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
  );
};

export default CreateProjectModal;
