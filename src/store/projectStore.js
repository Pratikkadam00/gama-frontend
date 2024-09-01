import axios from "axios";
import { create } from "zustand";
import { project_api } from "../constants/url";

export const Project = create((set) => {
  return {
    projectList: [],
    isCreateProjectModalOpen: false,
    toggleIsCreateProjectModal: (toggle) => {
      set((state) => ({
        isCreateProjectModalOpen: toggle,
      }));
    },
    createProject: async (project) => {
      const { projectName, ...restPayload } = project;
      try {
        const { data } = await axios.post(project_api, {
          name: projectName,
          ...restPayload,
        });
        set((state) => ({
          projectList: [{ ...data }, ...state.projectList],
        }));
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    getProjectsWithUserId: async (userId) => {
      console.log("plist", userId);
      try {
        const { data } = await axios.get(project_api, { params: {userId} });
        console.log("data", data);
        set((state) => ({
          projectList: [...data],
        }));
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  };
});
