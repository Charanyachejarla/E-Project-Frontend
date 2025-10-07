import React, { useState } from "react";
import {
  FaUser,
  FaMapMarkerAlt,
  FaBoxOpen,
  FaHeart,
  FaTrash,
  FaSignOutAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// Header
import SimpleHeader from "../components/SimpleHeader";

// Section Components
import ProfileInfo from "../components/ProfileInfo";
//import Addresses from "../components/Addresses";
import OrdersList from "../components/OrdersList";
import WishlistPreview from "../components/WishlistPreview";
import DeleteAccount from "../components/DeleteAccount";

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const navigate = useNavigate();

  const menuItems = [
    { key: "profile", label: "Profile Info", icon: <FaUser /> },
   // { key: "addresses", label: "Addresses", icon: <FaMapMarkerAlt /> },
    { key: "orders", label: "Orders", icon: <FaBoxOpen /> },
    { key: "wishlist", label: "Wishlist", icon: <FaHeart /> },
    { key: "delete", label: "Delete Account", icon: <FaTrash /> },
    { key: "logout", label: "Logout", icon: <FaSignOutAlt /> },
  ];

  const handleLogout = () => {
    // Clear login/auth data
    localStorage.removeItem("authToken");
    alert("You have been logged out.");
    navigate("/login");
  };

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return <ProfileInfo />;
      /*case "addresses":
        return <Addresses />;*/
      case "orders":
        return <OrdersList />;
      case "wishlist":
        return <WishlistPreview />;
      case "delete":
        return <DeleteAccount />;
      case "logout":
        handleLogout();
        return null;
      default:
        return <div>Select a section</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <SimpleHeader /> {/* ✅ Only shows ShopEase */}

      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <aside className="bg-white w-full md:w-64 shadow-md p-4 flex md:flex-col justify-around md:justify-start md:space-y-4 text-gray-700 border-b md:border-b-0 md:border-r">
          {menuItems.map((item) => (
            <button
              key={item.key}
              className={`flex items-center space-x-3 p-2 rounded-md transition-all w-full md:w-auto text-sm ${
                activeTab === item.key
                  ? "bg-blue-100 text-blue-600 font-semibold"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => setActiveTab(item.key)}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="hidden md:inline">{item.label}</span>
            </button>
          ))}
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4">{renderContent()}</main>
      </div>
    </div>
  );
};

export default UserProfile;
