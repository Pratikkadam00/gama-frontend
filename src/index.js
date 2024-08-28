import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./components/Login.js";
import { Home } from "./components/Home.js";
import { ProjectUpload } from "./components/ProjectUpload.js";
import { Register } from "./components/Register.js";
import ProjectCreation from "./components/ProjectCreation.js";
import { UploadPage } from "./components/UploadPage.js";

const routerConfiguration = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/home",
    element: <ProjectCreation />,
    children: [
      {
        path: "/home",
        element: <Home />,
        children: [],
      },
    ],
  },
  {
    path: "/:projectId/upload",
    element: <ProjectUpload />,
    children: [
      {
        path: "/:projectId/upload",
        element: <UploadPage />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={routerConfiguration}> 
  </RouterProvider>
);
