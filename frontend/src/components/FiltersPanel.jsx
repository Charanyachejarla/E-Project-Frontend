import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const categories = {
  Clothes: ["T-shirts", "Dresses", "Shirts", "Jeans"],
  Footwear: ["Sneakers", "Sandals", "Boots"],
  Accessories: ["Bags", "Belts", "Hats"],
};

const genders = ["Men", "Women", "Kids"];
const colors = ["Red", "Blue", "Green", "Black", "White"];
const fabrics = ["Cotton", "Silk", "Denim"];
const sizes = ["S", "M", "L", "XL"];
const discounts = ["10% Off", "20% Off", "30% Off"];

const FiltersPanel = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile Filter Toggle */}
      <div className="md:hidden m-2">
        <button
          className="flex items-center justify-between w-full bg-gray-200 px-4 py-2 rounded-lg"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          Filters
          {mobileOpen ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>

      {/* Filters Panel */}
      <div
        className={`bg-gray-100 p-4 rounded-md shadow-md md:block ${
          mobileOpen ? "block" : "hidden md:block"
        }`}
      >
        {/* Category */}
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Categories</h3>
          {Object.keys(categories).map((cat) => (
            <div key={cat} className="mb-2">
              <p className="font-medium">{cat}</p>
              {categories[cat].map((item) => (
                <label key={item} className="flex items-center space-x-2 ml-2">
                  <input type="checkbox" />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          ))}
        </div>

        {/* Gender */}
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Gender</h3>
          {genders.map((g) => (
            <label key={g} className="flex items-center space-x-2">
              <input type="checkbox" />
              <span>{g}</span>
            </label>
          ))}
        </div>

        {/* Color */}
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Color</h3>
          {colors.map((c) => (
            <label key={c} className="flex items-center space-x-2">
              <input type="checkbox" />
              <span>{c}</span>
            </label>
          ))}
        </div>

        {/* Fabric */}
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Fabric</h3>
          {fabrics.map((f) => (
            <label key={f} className="flex items-center space-x-2">
              <input type="checkbox" />
              <span>{f}</span>
            </label>
          ))}
        </div>

        {/* Size */}
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Size</h3>
          {sizes.map((s) => (
            <label key={s} className="flex items-center space-x-2">
              <input type="checkbox" />
              <span>{s}</span>
            </label>
          ))}
        </div>

        {/* Discount */}
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Discount</h3>
          {discounts.map((d) => (
            <label key={d} className="flex items-center space-x-2">
              <input type="checkbox" />
              <span>{d}</span>
            </label>
          ))}
        </div>

        {/* Search within filters */}
        <div>
          <input
            type="text"
            placeholder="Search filters..."
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none"
          />
        </div>
      </div>
    </>
  );
};

export default FiltersPanel;
