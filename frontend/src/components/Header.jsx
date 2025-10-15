import React, { useState } from "react";
import {
  FaUserCircle,
  FaShoppingCart,
  FaUserTie,
  FaBars,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  const Tooltip = ({ text }) => (
    <span className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 
                     bg-gray-800 text-white text-xs px-2 py-1 rounded 
                     opacity-0 group-hover:opacity-100 transition">
      {text}
    </span>
  );

  return (
    <>
      {/* Desktop Header */}
      <header className="bg-white shadow-md p-4 hidden md:flex justify-between items-center sticky top-0 z-50">
        {/* Site Name */}
        <Link to="/">
          <div className="text-2xl font-bold text-sky-600 cursor-pointer">
            ShopEase
          </div>
        </Link>

        {/* Search Bar */}
        <div className="flex flex-1 mx-4">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full border border-gray-300 rounded-l-lg px-3 py-2 focus:outline-none"
          />
          <button className="bg-sky-500 text-white px-4 rounded-r-lg hover:bg-sky-600 cursor-pointer">
            Search
          </button>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4 relative">
          {/* ✅ Profile Icon with Dropdown */}
          <div
            className="relative group cursor-pointer"
            onMouseEnter={() => setProfileMenuOpen(true)}
            onMouseLeave={() => setProfileMenuOpen(false)}
          >
            <FaUserCircle className="text-gray-600 text-2xl hover:text-sky-600" />
            <Tooltip text="Profile" />

            {/* Dropdown Menu */}
            <div
              className={`absolute right-0 mt-2 w-56 bg-white border border-gray-200 shadow-lg rounded-md z-50 transition-opacity duration-200 ${
                profileMenuOpen
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              }`}
              onMouseEnter={() => setProfileMenuOpen(true)}
              onMouseLeave={() => setProfileMenuOpen(false)}
            >
              <ul className="py-2">
                <li>
                  <Link
                    to="/login"
                    className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/signup"
                    className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                  >
                    Signup
                  </Link>
                </li>
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
          </div>

          {/* Seller/Admin Icon */}
          <div className="relative group cursor-pointer">
            <FaUserTie className="text-gray-600 text-2xl hover:text-sky-600" />
            <Tooltip text="Seller/Admin" />
          </div>

          {/* Cart Icon */}
          <Link to="/cart" className="relative group cursor-pointer">
            <FaShoppingCart className="text-gray-600 text-2xl hover:text-sky-600" />
            <Tooltip text="Cart" />
          </Link>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="bg-white shadow-md p-4 flex flex-col md:hidden fixed top-0 w-full z-50">
        <div className="flex justify-between items-center">
          {/* Hamburger */}
          <button
            className="text-2xl text-gray-600 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FaBars />
          </button>

          {/* Site Name */}
          <div className="text-xl font-bold text-sky-600 cursor-pointer">
            ShopEase
          </div>
        </div>

        {/* Search Bar */}
        <div className="mt-2 flex w-full">
          <input
            type="text"
            placeholder="Search products..."
            className="flex-1 border border-gray-300 rounded-l-lg px-3 py-2 focus:outline-none"
          />
          <button className="bg-sky-500 text-white px-4 rounded-r-lg hover:bg-sky-600 cursor-pointer">
            Search
          </button>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <nav className="bg-gray-100 shadow-md p-4 md:hidden fixed top-32 left-0 w-full z-40">
          <ul className="flex flex-col space-y-2">
            <li className="cursor-pointer hover:text-sky-600">Clothes</li>
            <li className="cursor-pointer hover:text-sky-600">Footwear</li>
            <li className="cursor-pointer hover:text-sky-600">Accessories</li>
          </ul>
        </nav>
      )}

      {/* Mobile Bottom Icons */}
      <div className="fixed bottom-0 left-0 w-full bg-white shadow-inner flex justify-around p-2 md:hidden z-50">
        <Link to="/profile" className="text-gray-600 text-2xl hover:text-sky-600">
          <FaUserCircle />
        </Link>
        <FaUserTie className="text-gray-600 text-2xl hover:text-sky-600" />
        <Link to="/cart" className="text-gray-600 text-2xl hover:text-sky-600">
          <FaShoppingCart />
        </Link>
      </div>
    </>
  );
};

export default Header;
