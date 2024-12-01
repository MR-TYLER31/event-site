interface ButtonProps {
  label: string;
  //   onClick: () => void;
  variant?: "primary" | "secondary" | "danger";
  isDisabled?: boolean;
}

function Button({ variant = "primary", label }: ButtonProps) {
  const baseClasses =
    "px-4 py-2 rounded-lg font-medium transition hover:opacity-80";
  const variants = {
    primary: "bg-teal-600 text-white hover:bg-teal-700",
    secondary: "bg-gray-500 text-gray-100 hover:bg-gray-600",
    danger: "bg-red-500 text-white hover:bg-red-600",
    disabled: "bg-gray-300 text-gray-500 cursor-not-allowed",
  };
  return (
    <button className={`${baseClasses} ${variants[variant]}`}>{label}</button>
  );
}

export default Button;
