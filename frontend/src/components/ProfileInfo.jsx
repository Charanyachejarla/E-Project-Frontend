import React, { useState } from "react";

// List of all states in India
const statesList = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh",
  "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", 
  "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", 
  "West Bengal", "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", "Lakshadweep", 
  "Delhi", "Puducherry"
];

const ProfileInfo = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [showAddressForm, setShowAddressForm] = useState(false);
  const [address, setAddress] = useState({
    name: "",
    mobile: "",
    pincode: "",
    locality: "",
    area: "",
    city: "",
    state: "",
    landmark: "",
    altPhone: "",
    addressType: "Home", // Default to Home
  });

  // Function to handle the "Add Address" button click
  const handleAddAddress = () => {
    setShowAddressForm(true); // Show the address form
  };

  // Function to handle changes in the address form
  const handleAddressChange = (field, value) => {
    setAddress({ ...address, [field]: value });
  };

  // Function to handle saving the address
  const handleSaveAddress = () => {
    alert("Address saved: " + JSON.stringify(address, null, 2));
    setShowAddressForm(false); // Hide the form after saving
  };

  // Function to handle canceling the address form
  const handleCancelAddress = () => {
    setShowAddressForm(false); // Hide the form without saving
  };

  return (
    <div
      className="bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: "url('https://via.placeholder.com/1500x500')", // Replace with your background image URL
        minHeight: "100vh",  // Ensures the background takes up at least the full viewport height
        backgroundSize: "cover", // Makes sure the image covers the entire area
        backgroundPosition: "center", // Centers the background image
      }}
    >
      <div className="bg-white text-gray-800 p-6 rounded shadow-md w-full max-w-2xl space-y-6">
        {/* Personal Info Header with Edit Button on Left */}
        <div className="flex items-center mb-4 space-x-4">
          <h2 className="text-lg font-semibold">Personal Information</h2>
          <button className="text-blue-600 text-sm hover:underline">Edit</button>
        </div>

        {/* First and Last Name */}
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-1/2 border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-1/2 border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>

        {/* Gender */}
        <div>
          <label className="block font-semibold text-lg mb-2">Your Gender</label>
          <div className="flex space-x-6">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                value="Male"
                checked={gender === "Male"}
                onChange={(e) => setGender(e.target.value)}
              />
              <span>Male</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                value="Female"
                checked={gender === "Female"}
                onChange={(e) => setGender(e.target.value)}
              />
              <span>Female</span>
            </label>
          </div>
        </div>

        {/* Email Section */}
        <div>
          <div className="flex items-center justify-start mb-2 space-x-4">
            <label className="font-semibold text-lg">Email Address</label>
            <button className="text-blue-600 text-sm hover:underline whitespace-nowrap">
              Edit
            </button>
          </div>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-1/2 border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>

        {/* Phone Section */}
        <div>
          <div className="flex items-center justify-start mb-2 space-x-4">
            <label className="font-semibold text-lg">Mobile Number</label>
            <button className="text-blue-600 text-sm hover:underline whitespace-nowrap">
              Edit
            </button>
          </div>
          <input
            type="tel"
            placeholder="10-digit mobile number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-1/2 border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>

        {/* Manage Address */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="font-semibold text-lg">Manage Address</label>
          </div>
          <button
            onClick={handleAddAddress}
            className="bg-blue-600 text-white px-4 py-2 rounded w-1/2 hover:bg-blue-700"
          >
            + Add a New Address
          </button>
        </div>

        {/* New Address Form */}
        {showAddressForm && (
          <div className="border border-gray-200 p-4 rounded space-y-4">
            <h3 className="text-lg font-semibold">Add a New Address</h3>

            {/* Address Inputs in Sections */}
            <div className="flex gap-4 mb-4">
              {/* Name and Mobile in One Section */}
              <div className="w-1/2">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={address.name}
                  onChange={(e) => handleAddressChange("name", e.target.value)}
                  className="w-full border border-gray-200 px-3 py-3 rounded focus:outline-none"
                />
              </div>
              <div className="w-1/2">
                <input
                  type="tel"
                  placeholder="10-digit mobile number"
                  value={address.mobile}
                  onChange={(e) => handleAddressChange("mobile", e.target.value)}
                  className="w-full border border-gray-200 px-3 py-3 rounded focus:outline-none"
                />
              </div>
            </div>

            <div className="flex gap-4 mb-4">
              {/* Pincode and Locality in One Section */}
              <div className="w-1/2">
                <input
                  type="text"
                  placeholder="Pincode"
                  value={address.pincode}
                  onChange={(e) => handleAddressChange("pincode", e.target.value)}
                  className="w-full border border-gray-200 px-3 py-3 rounded focus:outline-none"
                />
              </div>
              <div className="w-1/2">
                <input
                  type="text"
                  placeholder="Locality"
                  value={address.locality}
                  onChange={(e) => handleAddressChange("locality", e.target.value)}
                  className="w-full border border-gray-200 px-3 py-3 rounded focus:outline-none"
                />
              </div>
            </div>

            {/* Address Field (Area and Street) */}
            <div className="mb-4">
              <input
                type="text"
                placeholder="Address (Area and Street)"
                value={address.area}
                onChange={(e) => handleAddressChange("area", e.target.value)}
                className="w-full border border-gray-200 px-3 py-6 rounded focus:outline-none" // Increased height here
              />
            </div>

            {/* City and State */}
            <div className="flex gap-4 mb-4">
              <div className="w-1/2">
                <input
                  type="text"
                  placeholder="City/District/Town"
                  value={address.city}
                  onChange={(e) => handleAddressChange("city", e.target.value)}
                  className="w-full border border-gray-200 px-3 py-3 rounded focus:outline-none"
                />
              </div>
              <div className="w-1/2">
                <select
                  value={address.state}
                  onChange={(e) => handleAddressChange("state", e.target.value)}
                  className="w-full border border-gray-200 px-3 py-3 rounded focus:outline-none"
                >
                  <option value="">--Select State--</option>
                  {statesList.map((state, index) => (
                    <option key={index} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Landmark and Alternate Phone */}
            <div className="flex gap-4 mb-4">
              <div className="w-1/2">
                <input
                  type="text"
                  placeholder="Landmark (Optional)"
                  value={address.landmark}
                  onChange={(e) => handleAddressChange("landmark", e.target.value)}
                  className="w-full border border-gray-200 px-3 py-3 rounded focus:outline-none"
                />
              </div>
              <div className="w-1/2">
                <input
                  type="tel"
                  placeholder="Alternate Phone (Optional)"
                  value={address.altPhone}
                  onChange={(e) => handleAddressChange("altPhone", e.target.value)}
                  className="w-full border border-gray-200 px-3 py-3 rounded focus:outline-none"
                />
              </div>
            </div>

            {/* Address Type */}
            <div className="mb-4">
              <label className="font-semibold">Address Type:</label>
              <div className="flex space-x-6 mt-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="addressType"
                    value="Home"
                    checked={address.addressType === "Home"}
                    onChange={(e) => handleAddressChange("addressType", e.target.value)}
                  />
                  <span>Home</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="addressType"
                    value="Work"
                    checked={address.addressType === "Work"}
                    onChange={(e) => handleAddressChange("addressType", e.target.value)}
                  />
                  <span>Work</span>
                </label>
              </div>
            </div>

            {/* Save and Cancel Buttons aligned left */}
            <div className="flex justify-start space-x-4">
              <button
                onClick={handleSaveAddress}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Save
              </button>
              <button
                onClick={handleCancelAddress}
                className="px-4 py-2 border border-gray-500 rounded hover:bg-gray-100"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileInfo;
