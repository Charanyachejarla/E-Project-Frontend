import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import ProductsGrid from "../components/ProductsGrid";
import FiltersPanel from "../components/FiltersPanel";

const HomePage = () => {
    // Category banners data
// Category carousel data
const categoryCarousel = [
  { id: 1, name: "Men", image: "https://images.meesho.com/images/marketing/1744634780426.webp" },
  { id: 2, name: "Women", image: "https://images.meesho.com/images/marketing/1744634654837.webp" },
  { id: 3, name: "Kids", image: "https://images.meesho.com/images/marketing/1744634835018.webp" },
  { id: 4, name: "Footwear", image: "https://images.meesho.com/images/marketing/1744634814643.webp" },
  { id: 5, name: "Accessories", image: "https://images.meesho.com/images/marketing/1744634725496.webp" },
  { id: 6, name: "Beauty", image: "https://images.meesho.com/images/marketing/1744634871107.webp" },
  { id: 7, name: "Footwear", image: "https://images.meesho.com/images/marketing/1744634814643.webp" },
  { id: 8, name: "Accessories", image: "https://images.meesho.com/images/marketing/1744634725496.webp" },
  { id: 9, name: "Beauty", image: "https://images.meesho.com/images/marketing/1744634871107.webp" },
];

// Sample brand logos
const brands = [
  "https://images.meesho.com/images/marketing/1743159302944.webp",
  "https://images.meesho.com/images/marketing/1743159415385.webp",
  "https://images.meesho.com/images/marketing/1744636599446.webp",
  "https://images.meesho.com/images/marketing/1743159393231.webp",
  "https://images.meesho.com/images/marketing/1743159377598.webp",
  "https://images.meesho.com/images/marketing/1743159363205.webp",
  "https://images.meesho.com/images/marketing/1743159393231.webp",
  "https://images.meesho.com/images/marketing/1743159302944.webp",
  "https://images.meesho.com/images/marketing/1743159415385.webp",
  "https://images.meesho.com/images/marketing/1744636599446.webp",
];



  return (
    <div className="min-h-screen bg-gray-50">
          <Header />
          <Navbar />
          {/* Later: Product Listing */}
          <main className="pt-16 md:pt-2 pb-20">
            <div>
             <Banner />
            </div>
             {/* Category Carousel */}
            <div className="overflow-x-auto py-6 px-4 md:px-16">
            <div className="flex space-x-4">
                {categoryCarousel.map((cat) => (
                <div
                    key={cat.id}
                    className="flex-shrink-0 w-36 h-44 bg-gradient-to-br from-sky-100 to-sky-300 rounded-2xl flex flex-col items-center justify-center shadow-lg transform transition hover:-translate-y-2 hover:scale-105 cursor-pointer"
                >
                    <div className="w-20 h-20 rounded-full overflow-hidden mb-2 shadow-inner">
                    <img
                        src={cat.image}
                        alt={cat.name}
                        className="w-full h-full object-cover"
                    />
                    </div>
                    <p className="text-center font-medium text-gray-700">{cat.name}</p>
                </div>
                ))}
            </div>
            </div>

            {/* Brand Logos */}
            <div className="overflow-hidden relative w-full py-6 bg-gray-50">
            <div className="flex animate-marquee space-x-6">
                {/* Duplicate the brands for seamless infinite loop */}
                {[...brands, ...brands].map((brand, index) => (
                <div key={index} className="flex-shrink-0 w-24 h-12 flex items-center justify-center">
                    <img src={brand} alt={`brand-${index}`} className="w-full h-full object-contain" />
                </div>
                ))}
            </div>
            </div>

          </main>
          <h2 className="text-xl font-semibold text-gray-700">Featured Products</h2>
            {/* Product grid will come here */}
            <div className="flex flex-col md:flex-row gap-4 mt-4">
                {/* Filters on left */}
                <div className="md:w-1/4">
                    <FiltersPanel />
                </div>

                {/* Products on right */}
                <div className="md:w-3/4">
                    <ProductsGrid />
                </div>
            </div>
        </div>
    );
};

export default HomePage;
