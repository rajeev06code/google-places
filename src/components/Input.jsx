import React from "react";

const Input = ({ placeholder, value, onChange, className, type }) => {
  return (
    <input
      type={type}
      className={`order border-gray-300 rounded-sm px-3 py-2 ${className}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
