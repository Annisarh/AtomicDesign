import React from "react";
import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
import { Link } from "react-router-dom";

const FormRegister = () => {
  return (
    <>
      <form action="">
        <InputForm
          htmlfor="fullname"
          text="Full Name"
          type="text"
          id="fullname"
          name="fullname"
          placeholder="insert Your Real name"
        />
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
        <InputForm
          htmlfor="passwordConfirm"
          text="Confirm Password"
          type="password"
          id="passwordConfirm"
          name="passwordConfirm"
          placeholder="******"
        />
        <Button classname="bg-blue-600 w-full" text="Register" />
      </form>
    </>
  );
};

export default FormRegister;
