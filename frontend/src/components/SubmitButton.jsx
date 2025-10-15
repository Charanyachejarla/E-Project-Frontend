const SubmitButton = ({ label }) => (
  <button
    type="submit"
    className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700 transition"
  >
    {label}
  </button>
);

export default SubmitButton;
