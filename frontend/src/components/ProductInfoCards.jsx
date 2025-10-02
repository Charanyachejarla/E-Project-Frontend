import React from "react";
import { FaStar, FaRegClock, FaTruck } from "react-icons/fa";

const ProductInfoCards = () => {
  // Sample data
  const product = {
    name: "Lorenz Bi-Fold Dark Brown RFID Blocking Leather Wallet for Men with External Card Holder & Coin Pocket Feature | Soft Nappa Men’s Leather Wallet | GL-10",
    price: 430,
    originalPrice: 476,
    discount: "10% off",
    dealTime: "00h : 46m : 40s",
    rating: 4.0,
    ratingsCount: 1193,
    reviewsCount: 466,
    freeDelivery: true,
    size: "Free Size (Length: 11 cm, Width: 9 cm)",
    material: "Leather",
    compartments: 2,
    quantity: 1,
    description: "An exclusively stylish men’s wallet from the house of LORENZ. Crafted with high quality Genuine Leather. This men's wallet features: 8 credit card slots, 2 note compartments, 2 hidden secret pockets. Comes with a classy gift box.",
    origin: "India",
    seller: "LORENZ Store",
  };

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6 font-sans">
      {/* Card 1: Price & Offer */}
      <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col space-y-4">
        <h2 className="text-lg font-medium">{product.name}</h2>
        <div className="flex items-center space-x-4">
          <span className="text-2xl font-bold text-sky-600">₹{product.price}</span>
          <span className="line-through text-gray-400">₹{product.originalPrice}</span>
          <span className="text-green-600 font-medium">{product.discount}</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-500">
          <FaRegClock /> <span>{product.dealTime} Left</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaStar className="text-yellow-400" />
          <span>{product.rating}</span>
          <span className="text-gray-500 text-sm">
            {product.ratingsCount} Ratings, {product.reviewsCount} Reviews
          </span>
        </div>
        {product.freeDelivery && (
          <div className="flex items-center text-gray-500">
            <FaTruck className="mr-2" /> Free Delivery
          </div>
        )}
      </div>

      {/* Card 2: Select Size */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-lg font-medium mb-2">Select Size</h3>
        <div className="flex space-x-2">
          <button className="border px-4 py-2 rounded hover:bg-gray-100 cursor-pointer">
            {product.size}
          </button>
        </div>
      </div>

      {/* Card 3: Product Details */}
      <div className="bg-white shadow-lg rounded-lg p-6 space-y-4">
        <h3 className="text-lg font-medium">Product Details</h3>
        <p>
          <span className="font-medium">Name:</span> {product.name}
        </p>
        <p>
          <span className="font-medium">Material:</span> {product.material}
        </p>
        <p>
          <span className="font-medium">No. of Compartments:</span> {product.compartments}
        </p>
        <p>
          <span className="font-medium">Net Quantity:</span> {product.quantity}
        </p>
        <p>
          <span className="font-medium">Sizes:</span> {product.size}
        </p>
        <p>{product.description}</p>
        <p>
          <span className="font-medium">Country of Origin:</span> {product.origin}
        </p>
        <p>
          <span className="font-medium">Sold by:</span> {product.seller}
        </p>
        <div className="mt-4 flex space-x-4">
          <button className="bg-sky-500 text-white px-6 py-2 rounded hover:bg-sky-600">
            Add to Cart
          </button>
          <button className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfoCards;
