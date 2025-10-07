import React from "react";
import { Link } from "react-router-dom";

const SimpleHeader = () => {
  return (
    <header className="bg-white shadow-md p-4 sticky top-0 z-50 w-full">
      <div className="flex items-center">
        <Link to="/">
          <h1 className="text-2xl font-bold text-sky-600 cursor-pointer">ShopEase</h1>
        </Link>
      </div>
    </header>
  );
};

export default SimpleHeader;
