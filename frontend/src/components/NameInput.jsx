const NameInput = ({ value, onChange }) => (
  <div className="mb-4">
    <label className="block mb-1 font-medium">Full Name</label>
    <input
      type="text"
      name="name"
      value={value}
      onChange={onChange}
      className="border border-gray-300 rounded w-full p-2"
      placeholder="Enter your name"
    />
  </div>
);

export default NameInput;
