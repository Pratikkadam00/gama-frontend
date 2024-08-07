import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./components/home";
import { Login } from "./components/login";
import { Register } from "./components/register";
import { ProjectsDashboard } from "./components/projectDashboard";
import { ProjectUpload } from "./components/projectUpload";

const routerConfiguration = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/projects",
        element: <ProjectsDashboard />, 
      },
      {
        path: "/upload",
        element: <ProjectUpload />, 
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export const App = () => {
  return <RouterProvider router={routerConfiguration} />;
};

export default App;
