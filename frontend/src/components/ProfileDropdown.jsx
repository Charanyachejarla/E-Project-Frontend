import React, { useState } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Profile Icon */}
      <div className="cursor-pointer p-2 rounded-full hover:bg-gray-100">
        <svg
          className="w-6 h-6 text-gray-700"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5.121 17.804A8.962 8.962 0 0112 15c2.136 0 4.09.75 5.621 2.004M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-60 bg-white border border-gray-200 shadow-lg rounded-md z-50">
          {/* Login & Signup side by side */}
          <div className="flex border-b border-gray-200">
            <Link
              to="/login"
              className="flex-1 text-center px-4 py-2 bg-gray-100 hover:bg-gray-800 hover:text-white transition-colors duration-300 rounded-l-md"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="flex-1 text-center px-4 py-2 bg-gray-100 hover:bg-gray-800 hover:text-white transition-colors duration-300 rounded-r-md"
            >
              Signup
            </Link>
          </div>

          {/* Other links */}
          <ul>
            <li>
              <Link
                to="/profile"
                className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
              >
                My Profile
              </Link>
            </li>
            <li>
              <Link
                to="/orders"
                className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
              >
                Orders
              </Link>
            </li>
            <li>
              <Link
                to="/wishlist"
                className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
              >
                Wishlist
              </Link>
            </li>
            <li>
              <Link
                to="/logout"
                className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
              >
                Logout
              </Link>
            </li>
            <li>
              <Link
                to="/delete"
                className="block px-4 py-2 hover:bg-red-100 text-red-600"
              >
                Delete Account
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

// Wrap in Router for demo
const App = () => {
  return (
    <Router>
      <div className="p-10">
        <ProfileDropdown />
      </div>
    </Router>
  );
};

export default App;
