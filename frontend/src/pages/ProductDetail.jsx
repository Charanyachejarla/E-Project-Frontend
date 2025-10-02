import React, { useState } from "react";
import ProductsGrid from "../components/ProductsGrid";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import ProductInfoCards from "../components/ProductInfoCards";

const ProductDetail = () => {
  // Sample product data
  const product = {
    id: 1,
    name: "ALMEDA Woven Banarasi Jacquard Saree (Purple)",
    price: "₹418",
    originalPrice: "₹1,999",
    discount: "79% off",
    specialPrice: "Or Pay ₹388 + 30",
    rating: 3.8,
    reviews: 27,
    seller: "JACQUARDHOUSE4",
    description:
      "Elegant Banarasi Jacquard Saree crafted with fine woven fabric. Perfect for festive occasions with traditional style.",
    images: {
      default: [
        "https://images.meesho.com/images/products/457345374/nzcfy_512.avif?width=360",
        "https://via.placeholder.com/360x360?text=Front+View",
        "https://via.placeholder.com/360x360?text=Back+View",
        "https://via.placeholder.com/360x360?text=Close+Up",
      ],
      colors: {
        Red: "https://via.placeholder.com/100x100/ff0000?text=Red",
        Blue: "https://via.placeholder.com/100x100/0000ff?text=Blue",
        Green: "https://via.placeholder.com/100x100/008000?text=Green",
        Black: "https://via.placeholder.com/100x100/000000?text=Black",
      },
    },
  };

  const [mainImage, setMainImage] = useState(product.images.default[0]);

  // Dummy similar products
  const similarProducts = [
    {
      id: 2,
      name: "Designer Kurti",
      price: "₹999",
      rating: 4.3,
      reviews: 90,
      image: "https://via.placeholder.com/200x200?text=Kurti",
    },
    {
      id: 3,
      name: "Women’s Saree",
      price: "₹2,499",
      rating: 4.6,
      reviews: 160,
      image: "https://via.placeholder.com/200x200?text=Saree",
    },
    {
      id: 4,
      name: "Chudidar Dress",
      price: "₹1,299",
      rating: 4.1,
      reviews: 120,
      image: "https://via.placeholder.com/200x200?text=Chudidar",
    },
  ];

  return (
  <div>
      <Header />
      <Navbar />
  
    <div className="max-w-7xl mx-auto p-6">
      

      {/* Top Section divided into two parts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Part 1 - Images + actions */}
        <div className="flex">
          {/* Thumbnails on left */}
          <div className="flex flex-col space-y-3 mr-4">
            {product.images.default.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`thumb-${idx}`}
                className={`w-20 h-20 object-cover border rounded cursor-pointer hover:scale-105 transition ${
                  mainImage === img ? "ring-2 ring-sky-500" : ""
                }`}
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>

          {/* Main Image */}
          <div>
            <img
              src={mainImage}
              alt={product.name}
              className="w-96 h-[28rem] object-cover rounded-lg shadow"
            />

            {/* Color Variations */}
            <h3 className="mt-6 font-medium text-gray-700">
              Available Colors
            </h3>
            <div className="flex space-x-3 mt-2">
              {Object.entries(product.images.colors).map(([color, img]) => (
                <img
                  key={color}
                  src={img}
                  alt={color}
                  className="w-12 h-12 object-cover border rounded-full cursor-pointer hover:scale-105 transition"
                  onClick={() => setMainImage(img)}
                />
              ))}
            </div>

            {/* Buttons */}
            <div className="flex space-x-4 mt-6">
              <button className="bg-sky-600 text-white px-6 py-2 rounded-lg hover:bg-sky-700">
                Add to Cart
              </button>
              <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700">
                Buy Now
              </button>
            </div>
          </div>
        </div>

        <ProductInfoCards product={product} />
      </div>

      {/* Part 3 - Similar Products */}
      <div className="mt-12">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Similar Products
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {similarProducts.map((p) => (
            <ProductsGrid key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  </div>
  );
};

export default ProductDetail;
