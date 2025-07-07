import React from "react";
import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
import { Link } from "react-router-dom";

const FormLogin = () => {
  return (
    <>
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
      <p className="mt-5 text-center">
        Dont have an account?{" "}
        <Link to="/register" className="font-bold text-blue-600">
          register
        </Link>
      </p>
    </>
  );
};

export default FormLogin;
