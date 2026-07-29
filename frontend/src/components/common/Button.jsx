function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;