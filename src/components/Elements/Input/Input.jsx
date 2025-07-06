import React from "react";

const Input = ({ type, id, name, placeholder }) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-100"
      placeholder={placeholder}
    />
  );
};

export default Input;
