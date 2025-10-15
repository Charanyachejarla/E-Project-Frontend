import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginPopup = () => {
  const [mobile, setMobile] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const sendOtp = () => {
    if (!/^\d{10}$/.test(mobile)) {
      setError("Enter a valid 10-digit mobile number.");
      return;
    }
    setError("");
    setOtpSent(true);
  };

  const verifyOtp = () => {
    if (otp.length < 4) {
      setError("Enter the OTP received.");
      return;
    }
    alert("Login successful!");
    navigate("/"); // Redirect to home after login
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div
        className="w-full max-w-3xl bg-white rounded-lg shadow-2xl flex overflow-hidden relative"
        style={{ minHeight: "500px" }} // fixed min height
      >
        {/* Left side - visible on md+ */}
        <div className="w-1/2 bg-blue-600 text-white p-6 flex flex-col justify-center hidden md:flex">
          <h2 className="text-3xl font-bold mb-3">Login</h2>
          <p className="text-sm">Access your orders, wishlist & recommendations</p>
          <img
            src="https://img.icons8.com/clouds/100/000000/laptop.png"
            alt="illustration"
            className="mt-10 w-28"
          />
        </div>

        {/* Right side - Form */}
        <div className="w-full md:w-1/2 p-8 relative flex flex-col justify-center">
          {/* Close button */}
          <button
            onClick={() => navigate("/")}
            className="absolute top-2 right-3 text-gray-600 text-2xl font-bold hover:text-black"
            aria-label="Close login page"
          >
            ×
          </button>

          {/* Step 1: Mobile Input */}
          {!otpSent ? (
            <>
              <label className="text-sm font-medium mb-1 text-gray-700">
                Enter Mobile Number
              </label>
              <div className="flex items-center border rounded p-3 mb-4">
                <span className="text-gray-700 mr-2">+91</span>
                <input
                  type="tel"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  placeholder="Enter mobile number"
                  className="w-full focus:outline-none text-lg"
                />
              </div>
              {error && <p className="text-red-600 text-sm mb-4">{error}</p>}

              <button
                onClick={sendOtp}
                className="bg-blue-600 text-white w-full py-3 rounded hover:bg-blue-700 text-sm font-semibold"
              >
                Send OTP
              </button>
            </>
          ) : (
            <>
              {/* Step 2: OTP Input */}
              <label className="text-sm font-medium mb-1 text-gray-700">
                Enter OTP
              </label>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP"
                className="w-full border p-3 rounded mb-4 text-lg"
              />
              {error && <p className="text-red-600 text-sm mb-4">{error}</p>}

              <button
                onClick={verifyOtp}
                className="bg-green-600 text-white w-full py-3 rounded hover:bg-green-700 text-sm font-semibold"
              >
                Verify OTP & Login
              </button>

              <button
                onClick={() => {
                  setOtpSent(false);
                  setOtp("");
                  setError("");
                }}
                className="mt-5 text-blue-600 text-sm underline"
              >
                Change Mobile Number
              </button>
            </>
          )}

          <p className="mt-8 text-sm text-center text-gray-500">
            New here?{" "}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPopup;
