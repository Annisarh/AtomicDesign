import React from "react";
import Input from "./Input";
import Label from "./Label";

const InputForm = ({ htmlfor, text, type, id, name, placeholder }) => {
  return (
    <div className="mb-6">
      <Label htmlfor={htmlfor} text={text} />
      <Input type={type} id={id} name={name} placeholder={placeholder} />
    </div>
  );
};

export default InputForm;
