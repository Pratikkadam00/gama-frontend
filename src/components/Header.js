import React, { useState } from "react";
import LAMA from "../assets/LAMA..png";
import ICON from "../assets/directright.png";
import { IoMdSettings, IoMdNotificationsOutline } from "react-icons/io";
import { User } from "../store/userStore";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const { user, deleteUser } = User((state) => state);
  const { email } = user;
  const handleLogout = () => {
    deleteUser();
    navigate("/login");
  };
console.log("email", email);
  return (
    <header className="absolute top-0 w-full p-4 flex justify-between  px-6 bg-gray-100">
      <div className="flex items-center gap-1">
        <img className="h-8 " src={ICON} />
        <img className="h-5 mb-1" src={LAMA} />
      </div>
      <div className="flex items-center space-x-4">
        {email && (
          <button
            onClick={handleLogout}
            className="bg-[#7E22CE] px-3 py-1 rounded-md text-lg text-white"
          >
            Logout
          </button>
        )}
        <div className=" flex gap-4 ">
          <IoMdSettings className="h-8 w-8 rounded-full hover:cursor-pointer" />

          <IoMdNotificationsOutline className="h-8 w-8 hover:cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Header;
