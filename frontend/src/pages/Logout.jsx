// src/pages/Logout.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // ✅ Clear localStorage or any session/token data
    localStorage.removeItem("authToken"); // Or whatever key you use
    localStorage.removeItem("user");

    // ✅ Optionally: clear cookies, Redux state, etc.

    // ✅ Redirect after logout
    navigate("/login");
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-[60vh]">
      <h2 className="text-xl font-semibold text-gray-700">Logging out...</h2>
    </div>
  );
};

export default Logout;
