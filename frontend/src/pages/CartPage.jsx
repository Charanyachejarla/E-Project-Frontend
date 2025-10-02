import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

// Sample static cart data
const initialCartItems = [
  {
    id: 1,
    name: "Men's T-Shirt",
    price: 499,
    image: "https://via.placeholder.com/100",
  },
  {
    id: 2,
    name: "Women's Sneakers",
    price: 1299,
    image: "https://via.placeholder.com/100",
  },
  {
    id: 3,
    name: "Leather Wallet",
    price: 799,
    image: "https://via.placeholder.com/100",
  },
];

const CartPage = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sticky Header */}
      <header className="bg-white shadow-md p-4 sticky top-0 z-50 flex justify-between items-center">
       <Link to="/">
        <div className="text-2xl font-bold text-sky-600 cursor-pointer">ShopEase</div>
       </Link>
      </header>

      <div className="max-w-6xl mx-auto p-4 flex flex-col md:flex-row md:space-x-6">
        {/* Cart Items */}
        <div className="flex-1">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500 mt-10">Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row bg-white p-4 rounded-lg mb-4 shadow-md items-center md:items-start"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-md"
                />
                <div className="flex-1 md:ml-4 mt-2 md:mt-0">
                  <h2 className="font-medium text-lg">{item.name}</h2>
                  <p className="text-gray-700 mt-1">₹{item.price}</p>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-600 hover:text-red-800 mt-2 md:mt-0 md:ml-4 cursor-pointer"
                  title="Remove item"
                >
                  <FaTrash className="text-xl" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Summary / Checkout */}
        <div className="md:w-80 mt-4 md:mt-0">
          <div className="bg-white p-4 rounded-lg shadow-md sticky top-20">
            <h3 className="font-bold text-lg mb-4">Order Summary</h3>
            <p className="flex justify-between mb-2">
              <span>Total Items:</span>
              <span>{cartItems.length}</span>
            </p>
            <p className="flex justify-between font-medium text-gray-800 mb-4">
              <span>Total Price:</span>
              <span>₹{totalPrice}</span>
            </p>
            <button
              disabled={cartItems.length === 0}
              className="w-full bg-sky-500 text-white py-2 rounded-lg hover:bg-sky-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
