function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const baseClasses =
    "px-6 py-3 rounded-lg font-medium transition-all duration-300";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-white border border-gray-300 text-slate-900 hover:bg-gray-100",
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;