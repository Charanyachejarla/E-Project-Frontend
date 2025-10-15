import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [generatedOTP, setGeneratedOTP] = useState(null);
  const [error, setError] = useState("");

  const handleSendOtp = () => {
    if (!/^\d{10}$/.test(phone)) {
      setError("Please enter a valid 10-digit phone number.");
      return;
    }

    const otpCode = Math.floor(1000 + Math.random() * 9000); // Simulated 4-digit OTP
    setGeneratedOTP(otpCode);
    setOtpSent(true);
    setError("");
    console.log("Simulated OTP:", otpCode);
  };

  const handleVerifyOtp = () => {
    if (otp === generatedOTP?.toString()) {
      alert("🎉 Signup successful!");
      navigate("/");
    } else {
      setError("Invalid OTP. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="w-[700px] h-[500px] bg-white rounded-lg shadow-2xl flex overflow-hidden relative">
        {/* Left side */}
        <div className="w-1/2 bg-blue-600 text-white p-6 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-2">Looks like you're new here!</h2>
          <p className="text-sm">
            Sign up with your mobile number to get started
          </p>
          <img
            src="https://img.icons8.com/clouds/100/000000/laptop.png"
            alt="illustration"
            className="mt-10 w-28"
          />
        </div>

        {/* Right side */}
        <div className="w-1/2 p-6 relative flex flex-col justify-center">
          {/* Close button */}
          <button
            onClick={() => navigate("/")}
            className="absolute top-2 right-3 text-gray-600 text-2xl font-bold hover:text-black"
            aria-label="Close signup page"
          >
            ×
          </button>

          {!otpSent ? (
            <>
              <div className="mb-4">
                <label className="text-sm font-medium mb-1 text-gray-700">
                  Enter Mobile Number
                </label>
                <div className="flex items-center border rounded p-2 mt-1">
                  <span className="text-gray-700 mr-2">+91</span>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter mobile number"
                    className="w-full focus:outline-none"
                  />
                </div>
              </div>

              {error && <p className="text-red-600 text-sm mb-2">{error}</p>}

              {/* Continue Button */}
              <button
                onClick={handleSendOtp}
                className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700 text-sm mb-3"
              >
                Continue
              </button>

              {/* Existing user link */}
              <Link
                to="/login"
                className="w-full text-center border border-gray-300 text-gray-700 py-2 rounded hover:bg-gray-100 text-sm"
              >
                Existing user? Log in
              </Link>
            </>
          ) : (
            <>
              <label className="text-sm font-medium mb-1 text-gray-700">
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
                onClick={handleVerifyOtp}
                className="bg-green-600 text-white w-full py-2 rounded hover:bg-green-700 text-sm"
              >
                Verify & Sign Up
              </button>

              <button
                onClick={() => {
                  setOtpSent(false);
                  setOtp("");
                  setGeneratedOTP(null);
                }}
                className="mt-3 text-blue-600 text-sm underline"
              >
                Change Mobile Number
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signup;
