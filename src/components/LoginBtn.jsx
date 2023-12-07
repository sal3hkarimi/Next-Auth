export default function LoginBtn({ className, onClick }) {
  return (
    <button
      className={`bg-teal-500 text-white py-2 px-4 hover:bg-teal-600 ${className}`}
      onClick={onClick}
    >
      Login
    </button>
  );
}
