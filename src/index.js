import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./components/Login";
import { Home } from "./components/Home";
import { ProjectUpload } from "./components/ProjectUpload";
import { Register } from "./components/Register";
import ProjectCreation from "./components/ProjectCreation";
import { UploadPage } from "./components/UploadPage";

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
