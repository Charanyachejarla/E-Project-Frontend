import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import ProductDetail from "./pages/ProductDetail";
import UserProfile from "./pages/UserProfile";
import Signup from "./pages/Signup";
import Logout from "./pages/Logout";

// LoginPopup component (full page modal)
import LoginPopup from "./components/LoginPopup";

// Components used as pages
import ProfileInfo from "./components/ProfileInfo";
import OrdersList from "./components/OrdersList";
import WishlistPreview from "./components/WishlistPreview";
import DeleteAccount from "./components/DeleteAccount";

// Layout Components
import SimpleHeader from "./components/SimpleHeader";
import Footer from "./components/Footer";

function Layout() {
  const location = useLocation();
  const path = location.pathname;

  // Show SimpleHeader only on these routes
  const simpleHeaderRoutes = ["/login", "/signup"];

  return (
    <>
      {/* Show simple header only on login and signup pages */}
      {simpleHeaderRoutes.includes(path) && <SimpleHeader />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/signup" element={<Signup />} />

        {/* Replace /login route with LoginPopup */}
        <Route path="/login" element={<LoginPopup />} />

        <Route path="/logout" element={<Logout />} />
        <Route path="/profile-info" element={<ProfileInfo />} />
        <Route path="/orders" element={<OrdersList />} />
        <Route path="/wishlist" element={<WishlistPreview />} />
        <Route path="/delete" element={<DeleteAccount />} />
      </Routes>

      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
