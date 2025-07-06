import React from "react";

const Button = ({ classname, text }) => {
  return <button className={`p-2 text-white ${classname}`}>{text}</button>;
};

export default Button;
