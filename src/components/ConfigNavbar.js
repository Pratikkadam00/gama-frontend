import React, { useState } from "react";

const ConfigNavbar = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("EN");
  const [dropdownOpen, setDropdownOpen] = useState(false);

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
        <div className="cursor-pointer text-xl text-purple-500 font-semibold">
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
                  <a
                    href="#"
                    onClick={() => handleLanguageChange("EN")}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    English
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={() => handleLanguageChange("ES")}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Spanish
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={() => handleLanguageChange("FR")}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    French
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={() => handleLanguageChange("DE")}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    German
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={() => handleLanguageChange("IT")}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Italian
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Notification Icon */}
        <div className="cursor-pointer">
          <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M32.0001 58C34.9334 58 37.3334 55.6 37.3334 52.6667H26.6667C26.6667 55.6 29.0667 58 32.0001 58ZM48.0001 42V28.6667C48.0001 20.48 43.6534 13.6267 36.0001 11.8133V10C36.0001 7.78667 34.2134 6 32.0001 6C29.7867 6 28.0001 7.78667 28.0001 10V11.8133C20.3734 13.6267 16.0001 20.4533 16.0001 28.6667V42L10.6667 47.3333V50H53.3334V47.3333L48.0001 42ZM42.6667 44.6667H21.3334V28.6667C21.3334 22.0533 25.3601 16.6667 32.0001 16.6667C38.6401 16.6667 42.6667 22.0533 42.6667 28.6667V44.6667Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ConfigNavbar;
