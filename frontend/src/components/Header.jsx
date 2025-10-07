import React, { useState } from "react";
import { FaUserCircle, FaShoppingCart, FaUserTie, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
          <div className="text-2xl font-bold text-sky-600 cursor-pointer">ShopEase</div>
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
        <div className="flex items-center space-x-4">
          {/* ✅ PROFILE ICON with Link to /profile */}
          <Link to="/profile" className="relative group cursor-pointer">
            <FaUserCircle className="text-gray-600 text-2xl hover:text-sky-600" />
            <Tooltip text="Profile" />
          </Link>

          <div className="relative group cursor-pointer">
            <FaUserTie className="text-gray-600 text-2xl hover:text-sky-600" />
            <Tooltip text="Seller/Admin" />
          </div>

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
          <div className="text-xl font-bold text-sky-600 cursor-pointer">ShopEase</div>
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

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="bg-gray-100 shadow-md p-4 md:hidden fixed top-32 left-0 w-full z-40">
          <ul className="flex flex-col space-y-2">
            <li className="cursor-pointer hover:text-sky-600">Clothes</li>
            <li className="cursor-pointer hover:text-sky-600">Footwear</li>
            <li className="cursor-pointer hover:text-sky-600">Accessories</li>
          </ul>
        </nav>
      )}

      {/* ✅ Mobile Bottom Icons (updated with Link) */}
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
