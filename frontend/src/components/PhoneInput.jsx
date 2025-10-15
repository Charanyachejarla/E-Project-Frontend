const PhoneInput = ({ value, onChange, onSendOTP }) => (
  <div className="mb-4">
    <label className="block mb-1 font-medium">Phone Number</label>
    <div className="flex">
      <input
        type="tel"
        name="phone"
        value={value}
        onChange={onChange}
        className="border border-gray-300 rounded-l w-full p-2"
        placeholder="Enter phone number"
      />
      <button
        type="button"
        onClick={onSendOTP}
        className="bg-blue-600 text-white px-4 rounded-r hover:bg-blue-700 transition"
      >
        Send OTP
      </button>
    </div>
  </div>
);

export default PhoneInput;
