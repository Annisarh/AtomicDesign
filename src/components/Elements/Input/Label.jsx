import React from "react";

const Label = ({ htmlfor, text }) => {
  return (
    <label htmlFor={htmlfor} className="block text-slate-700 font-bold mb-2">
      {text}
    </label>
  );
};

export default Label;
