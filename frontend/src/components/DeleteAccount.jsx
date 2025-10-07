import React, { useState } from "react";

const DeleteAccount = () => {
  const [confirming, setConfirming] = useState(false);

  const handleDelete = () => {
    // Add your delete logic here
    alert("Account deleted (mock)");
    setConfirming(false);
  };

  return (
    <div className="bg-white text-gray-800 p-4 rounded shadow-md w-full">
      <h2 className="text-xl font-semibold mb-4 border-b pb-2">Delete Account</h2>

      {confirming ? (
        <div className="space-y-4">
          <p className="text-red-600 font-medium">
            Are you sure you want to delete your account? This action is irreversible.
          </p>
          <div className="flex space-x-2">
            <button
              onClick={handleDelete}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Yes, Delete
            </button>
            <button
              onClick={() => setConfirming(false)}
              className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setConfirming(true)}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Delete My Account
        </button>
      )}
    </div>
  );
};

export default DeleteAccount;
