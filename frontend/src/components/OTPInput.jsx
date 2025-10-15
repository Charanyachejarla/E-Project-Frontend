const OTPInput = ({ value, onChange, onVerify }) => (
  <div className="mb-4 relative">
    <label className="block mb-1 font-medium">Enter OTP</label>
    <input
      type="text"
      value={value}
      onChange={onChange}
      className="border border-gray-300 rounded w-full p-2 pr-20"
      placeholder="Enter OTP"
    />
    <button
      type="button"
      onClick={onVerify}
      className="absolute right-2 top-7 text-blue-600 font-semibold hover:underline"
    >
      Verify
    </button>
  </div>
);

export default OTPInput;
