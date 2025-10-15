const EmailInput = ({ value, onChange }) => (
  <div className="mb-4">
    <label className="block mb-1 font-medium">Email</label>
    <input
      type="email"
      name="email"
      value={value}
      onChange={onChange}
      className="border border-gray-300 rounded w-full p-2"
      placeholder="Enter your email"
    />
  </div>
);

export default EmailInput;
