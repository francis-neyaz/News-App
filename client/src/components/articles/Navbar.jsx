import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navItems = [
    { id: 1, title: "Home Page", path: "/" },
    { id: 3, title: "Currencies", path: "/cr" },
    { id: 4, title: "About", path: "/a" },
  ];

  return (
    <nav className="bg-gradient-to-r from-yellow-500 to-red-600 text-black py-4 px-6 flex justify-between items-center shadow-lg rounded-lg">
      {/* Brand Logo */}
      <div className="text-3xl font-bold cursor-pointer hover:text-gray-200 transition duration-300">
        Flash News
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-6">
        {navItems.map((item) => (
          <Link
            key={item.id}
            to={item.path}
            className="text-lg font-medium hover:text-gray-300 transition duration-300"
          >
            {item.title}
          </Link>
        ))}
      </div>

      {/* Search Input */}
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search Headlines..."
          className="px-4 py-2 rounded-l-lg border focus:outline-none focus:ring-2 focus:ring-blue-300 w-full md:w-auto"
        />
        <button className="bg-gray-800 px-4 py-2 rounded-r-lg text-white font-medium hover:bg-gray-700 transition duration-300">
          Search
        </button>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="flex md:hidden">
        <button className="text-white focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 7.5h16.5m-16.5 7.5h16.5"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;


