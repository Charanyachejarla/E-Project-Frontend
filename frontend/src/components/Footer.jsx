import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Later you can connect this to backend/email service
    console.log("User Email:", email);
    console.log("Message:", message);
    alert("Your message has been sent! ✅");
    setEmail("");
    setMessage("");
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">ShopEase</h2>
          <p className="text-sm">
            ShopEase is your one-stop destination for trendy clothes, stylish
            footwear, and the latest accessories. Shop smart, live easy!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li className="hover:text-sky-400 cursor-pointer">Home</li>
            <li className="hover:text-sky-400 cursor-pointer">Clothes</li>
            <li className="hover:text-sky-400 cursor-pointer">Footwear</li>
            <li className="hover:text-sky-400 cursor-pointer">Accessories</li>
            <li className="hover:text-sky-400 cursor-pointer">Cart</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-3 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none text-white"
              required
            />
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="px-3 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none text-white"
              rows="3"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-sky-500 hover:bg-sky-600 text-white py-2 px-4 rounded cursor-pointer"
            >
              Send
            </button>
          </form>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-2xl">
            <a href="#" className="hover:text-sky-400"><FaFacebook /></a>
            <a href="#" className="hover:text-sky-400"><FaInstagram /></a>
            <a href="#" className="hover:text-sky-400"><FaTwitter /></a>
            <a href="#" className="hover:text-sky-400"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} ShopEase. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
