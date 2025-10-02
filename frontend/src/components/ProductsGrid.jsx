import React from "react";

// Example static data
const products = [
  {
    id: 1,
    name: "Casual T-Shirt",
    price: 499,
    rating: 4.5,
    reviews: 23,
    image:
      "https://images.meesho.com/images/products/457345374/nzcfy_512.avif?width=360",
  },
  {
    id: 2,
    name: "Kurti",
    price: 1499,
    rating: 4.8,
    reviews: 12,
    image:
      "https://images.meesho.com/images/products/473441832/wlkj0_512.avif?width=360",
  },
   {
    id: 1,
    name: "Casual T-Shirt",
    price: 499,
    rating: 4.5,
    reviews: 23,
    image:
      "https://images.meesho.com/images/products/457345374/nzcfy_512.avif?width=360",
  },
  {
    id: 2,
    name: "Kurti",
    price: 1499,
    rating: 4.8,
    reviews: 12,
    image:
      "https://images.meesho.com/images/products/473441832/wlkj0_512.avif?width=360",
  },
   {
    id: 1,
    name: "Casual T-Shirt",
    price: 499,
    rating: 4.5,
    reviews: 23,
    image:
      "https://images.meesho.com/images/products/457345374/nzcfy_512.avif?width=360",
  },
  {
    id: 2,
    name: "Kurti",
    price: 1499,
    rating: 4.8,
    reviews: 12,
    image:
      "https://images.meesho.com/images/products/473441832/wlkj0_512.avif?width=360",
  },
   {
    id: 1,
    name: "Casual T-Shirt",
    price: 499,
    rating: 4.5,
    reviews: 23,
    image:
      "https://images.meesho.com/images/products/457345374/nzcfy_512.avif?width=360",
  },
  {
    id: 2,
    name: "Kurti",
    price: 1499,
    rating: 4.8,
    reviews: 12,
    image:
      "https://images.meesho.com/images/products/473441832/wlkj0_512.avif?width=360",
  },
   {
    id: 1,
    name: "Casual T-Shirt",
    price: 499,
    rating: 4.5,
    reviews: 23,
    image:
      "https://images.meesho.com/images/products/457345374/nzcfy_512.avif?width=360",
  },
  {
    id: 2,
    name: "Kurti",
    price: 1499,
    rating: 4.8,
    reviews: 12,
    image:
      "https://images.meesho.com/images/products/473441832/wlkj0_512.avif?width=360",
  },
  // Add more products
];

const ProductsGrid = () => {
  return (
    <div className="m-2 grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((p) => (
        <div
          key={p.id}
          className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition transform"
        >
          <img src={p.image} alt={p.name} className="w-full h-48 object-cover" />
          <div className="p-2">
            <h3 className="font-semibold text-lg">{p.name}</h3>
            <p className="text-sky-600 font-bold">₹{p.price}</p>
            <p className="text-sm text-gray-500">
              ⭐ {p.rating} | {p.reviews} reviews
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsGrid;
