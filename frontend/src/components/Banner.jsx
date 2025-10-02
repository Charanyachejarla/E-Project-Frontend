import React from "react";

function Banner() {
  return (
    <section className="relative w-full h-64 md:h-96 bg-gradient-to-r from-sky-500 to-indigo-600 flex items-center justify-center text-center text-white">
      {/* Overlay Text */}
      <div>
        <h1 className="text-3xl md:text-5xl font-bold">Welcome to ShopEase</h1>
        <p className="mt-2 md:mt-4 text-lg md:text-xl">
          Discover Clothes, Footwear & Accessories at Best Prices
        </p>
        <button className="mt-4 px-6 py-2 bg-white text-sky-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 cursor-pointer">
          Shop Now
        </button>
      </div>
    </section>
  );
}

export default Banner;
