import axios from "axios";
import { create } from "zustand";
import { login_api, register_api } from "../constants/url";

export const User = create((set) => {
  return {
    user: {
      name: "",
      email: "",
      userId: "",
    },
    isLoggedIn: false,
    createUser: async (userPayload) => {
      try {
        const { data } = await axios.post(register_api, userPayload);
        if (data?.user && data?.user?.email) return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    // login_api
    loginUser: async (userPayload) => {
      try {
        const { data } = await axios.post(login_api, userPayload);
        if (data && data.user) {
          set((state) => ({
            user: { ...data.user },
            isLoggedIn: true,
          }));
          return data.user; 
        } else {
          return false; 
        }
      } catch (error) {
        console.error(error);
        return false; 
      }
    },

    deleteUser: () =>
      set((state) => ({
        user: {
          name: "",
          email: "",
          userId: "",
        },
        isLoggedIn: false,
      })),
  };
});
