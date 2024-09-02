import React, { useState } from "react";
import ICON from "../assets/directright.png";
import { NavLink, useParams } from "react-router-dom";
const SideNavbar = () => {
  const [activeLabel, setActiveLabel] = useState(0);
  const { projectId } = useParams();

  return (
    <nav className="w-1/5 h-screen bg-gray-100 p-6 flex flex-col items-start gap-10">
      <div>
        <div className="flex items-center gap-1">
          <img className="h-8 " alt="img" src={ICON} />
          <h2 className="font-bold text-purple-600 text-3xl">GAMA</h2>
        </div>
      </div>
      <div className="w-full flex flex-col gap-2 border-b-2 pb-4">
        {[
          { label: "Projects", path: `/${projectId}/upload` },
          { label: "Widget-configuration" },
          { label: "Deploy" },
          { label: "Pricing" },
        ].map((config, index) => (
          <div
            className={`h-12 w-full rounded-full flex justify-start items-center gap-2 pl-4 cursor-pointer  ${
              index === activeLabel
                ? "bg-purple-600 text-white"
                : " hover:bg-gray-200"
            }`}
            onClick={() => setActiveLabel(index)}
            key={index}
          >
            <span
              className={`h-7 w-7 ${
                index === activeLabel ? "bg-black text-white" : "bg-gray-300"
              } flex justify-center items-center rounded-full `}
            >
              {index + 1}
            </span>
            <NavLink className="text-balck font-semibold">
              {config?.label}
            </NavLink>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default SideNavbar;
