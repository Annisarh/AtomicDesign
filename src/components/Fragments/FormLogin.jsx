import React from "react";
import InputForm from "../Elements/Input";
import Button from "../Elements/Button";

const FormLogin = () => {
  return (
    <form action="">
      <InputForm
        htmlfor="email"
        text="Email"
        type="email"
        id="email"
        name="email"
        placeholder="example@gmail.com"
      />
      <InputForm
        htmlfor="password"
        text="Password"
        type="password"
        id="password"
        name="password"
        placeholder="******"
      />
      <Button classname="bg-blue-600 w-full" text="Login" />
    </form>
  );
};

export default FormLogin;
