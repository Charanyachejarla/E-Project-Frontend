// components/LoginPopup.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginPopup = ({ onClose }) => {
  const [mobile, setMobile] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  const sendOtp = () => {
    if (!/^\d{10}$/.test(mobile)) {
      setError("Enter a valid 10-digit mobile number.");
      return;
    }
    setError("");
    setOtpSent(true);
  };

  const verifyOtp = () => {
    if (!otp || otp.length < 4) {
      setError("Enter the OTP you received.");
      return;
    }
    setError("");
    alert("Login successful!");
    onClose(); // Close popup after success
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      <div className="w-[700px] h-[500px] bg-white rounded shadow-xl flex overflow-hidden relative border pointer-events-auto">
        {/* Left panel */}
        <div className="w-1/2 bg-blue-600 text-white p-6 flex flex-col justify-center">
          <h2 className="text-3xl font-semibold mb-2">Login</h2>
          <p className="text-sm">
            Get access to your Orders, Wishlist and Recommendations
          </p>
          <div className="mt-10">
            <img
              src="https://img.icons8.com/clouds/100/000000/laptop.png"
              alt="illustration"
              className="w-28"
            />
          </div>
        </div>

        {/* Right panel */}
        <div className="w-1/2 p-6 relative flex flex-col justify-center">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-2 right-3 text-gray-500 hover:text-black text-2xl font-bold"
          >
            ×
          </button>

          {!otpSent ? (
            <>
              <label className="text-sm font-medium mb-2 text-gray-700">
                Enter Email/Mobile number
              </label>
              <div className="flex items-center border rounded p-2 mb-3">
                <span className="text-gray-700 mr-2">+91</span>
                <input
                  type="tel"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  placeholder="Enter mobile number"
                  className="w-full focus:outline-none"
                />
              </div>
              {error && <p className="text-red-600 text-sm mb-2">{error}</p>}
              <button
                onClick={sendOtp}
                className="bg-orange-500 hover:bg-orange-600 text-white w-full p-2 rounded text-sm"
              >
                Request OTP
              </button>
            </>
          ) : (
            <>
              <label className="text-sm font-medium mb-2 text-gray-700">
                Enter OTP
              </label>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP"
                className="w-full border p-2 rounded mb-2"
              />
              {error && <p className="text-red-600 text-sm mb-2">{error}</p>}
              <button
                onClick={verifyOtp}
                className="bg-green-600 hover:bg-green-700 text-white w-full p-2 rounded text-sm"
              >
                Verify OTP & Login
              </button>
              <button
                onClick={() => {
                  setOtpSent(false);
                  setOtp("");
                }}
                className="mt-2 text-blue-600 text-sm underline"
              >
                Change Mobile Number
              </button>
            </>
          )}

          <p className="mt-6 text-center text-sm text-gray-600">
            New to Flipkart?{" "}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Create an account
            </Link>
          </p>

          <p className="text-xs text-gray-400 mt-2 text-center">
            By continuing, you agree to Flipkart's{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Terms of Use
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPopup;
