import React from "react";

const Button = ({ classname, text, type = "button", onClick = () => {} }) => {
  return (
    <button
      className={`p-2 text-white ${classname}`}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
