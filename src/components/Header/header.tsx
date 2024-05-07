import React, { useState } from "react";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-transparent text-white p-4 flex justify-between items-center relative">
      {/* Logo */}
      <div className="flex items-center">
        <img src="/path/to/your/logo.png" alt="Brand Logo" className="h-8" />
      </div>

      {/* Toggle button for mobile */}
      <button
        onClick={toggleMenu}
        className="lg:hidden absolute top-1/2 right-4 transform -translate-y-1/2 focus:outline-none text-white"
      >
        {menuOpen ? (
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        )}
      </button>

      {/* Navigation links */}
      <nav
        className={`lg:flex absolute top-full ml-[250px] lg:static lg:flex-row bg-gray-800 lg:bg-transparent lg:justify-end lg:space-x-4 ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="lg:flex items-center space-x-4">
          <li>
            <a href="#about" className="hover:text-vermili">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-vermili">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-vermili">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-vermili">
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
