import axios from "axios";
import { create } from "zustand";
import { project_api, login_api } from "../constants/url";

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
      try {
        const { data } = await axios.post(project_api, { params: userId });
        set((state) => ({
          projectList: [
            { name: data.name, createdAt: data.createdAt },
            ...state.projectList,
          ],
        }));
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    deleteUser: (user) =>
      set((state) => ({
        user: {
          name: "",
          email: "",
        },
        isLoggedIn: false,
      })),
  };
});
