import React from "react";

const categories = ["Clothes", "Footwear", "Accessories"];

const Navbar = () => {
  return (
    <nav className="bg-gray-100 shadow-md p-2 sticky top-[72px] z-40">
      <ul className="flex space-x-6 justify-center">
        {categories.map((cat) => (
          <li key={cat} className="relative group cursor-pointer">
            <span className="hover:text-sky-600 font-medium">{cat}</span>

            {/* Dropdown */}
            <ul className="absolute left-0 top-full mt-0 hidden group-hover:block 
                           bg-white shadow-lg rounded-md w-40 z-50
                           transition-all duration-150">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Men</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Women</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Kids</li>
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
