import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const ConfigNavbar = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("EN");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang);
    setDropdownOpen(false);
  };

  return (
    <div className="flex items-center justify-between h-16 bg-white px-4 md:px-8 shadow-md">
      <div className="flex items-center space-x-2">
        {/* Home Icon */}
        <div
          className="cursor-pointer text-xl text-purple-500 font-semibold"
          onClick={() => navigate("/home")} // Use navigate to go to /home
        >
          <svg
            width="52"
            height="52"
            viewBox="0 0 52 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26.0002 13.4116L36.8335 23.1616V40.0833H32.5002V27.0833H19.5002V40.0833H15.1668V23.1616L26.0002 13.4116ZM26.0002 7.58325L4.3335 27.0833H10.8335V44.4166H23.8335V31.4166H28.1668V44.4166H41.1668V27.0833H47.6668L26.0002 7.58325Z"
              fill="#7E22CE"
            />
          </svg>
        </div>
        {/* Breadcrumb */}
        <div className="flex items-center space-x-1 text-gray-600 text-sm md:text-base">
          <span className="text-purple-500">/ Sample Project</span>
          <span>/</span>
          <span className="text-purple-500">Upload</span>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        {/* Language Selector */}
        <div className="relative">
          <button
            id="dropdownDefaultButton"
            onClick={toggleDropdown}
            className="text-gray-600 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
            type="button"
          >
            {selectedLanguage}
            <svg
              className="w-2.5 h-2.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          {/* Dropdown menu */}
          {dropdownOpen && (
            <div
              id="dropdown"
              className="z-10 absolute right-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-28"
            >
              <ul className="py-2 text-sm text-gray-700">
                <li>
                  <button
                    onClick={() => handleLanguageChange("EN")}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    English
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleLanguageChange("ES")}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Spanish
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleLanguageChange("FR")}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    French
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleLanguageChange("DE")}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    German
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleLanguageChange("IT")}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Italian
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Notification Icon */}
        <div className="cursor-pointer">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 22c1.1046 0 2-.8954 2-2H10c0 1.1046.8954 2 2 2zm5-2H7v-2H5V6c0-3.3137 2.6863-6 6-6s6 2.6863 6 6v12h2v2zm-6-2a4 4 0 0 1-4-4V6c0-2.2091 1.7909-4 4-4s4 1.7909 4 4v10a4 4 0 0 1-4 4z"
              fill="#7E22CE"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ConfigNavbar;
