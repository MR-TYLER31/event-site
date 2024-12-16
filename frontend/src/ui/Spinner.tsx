import React from "react";

const Spinner: React.FC<{ size?: string; color?: string; margin?: string }> = ({
  size = "w-16 h-16",
  color = "border-blue-500",
  margin = "0",
}) => {
  return (
    <div
      className={`mx-auto ${size} border-4 border-solid border-t-transparent rounded-full animate-spin ${color} ${margin}`}
    ></div>
  );
};

export default Spinner;
