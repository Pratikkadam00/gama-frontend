import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

export const App = () => {
  return (
    <div className="h-screen w-full">
      <Outlet  />
      <Footer />
    </div>
  );
};

export default App;
