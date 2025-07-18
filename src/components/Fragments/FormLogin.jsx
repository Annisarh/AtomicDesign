import React from "react";
import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
import { Link } from "react-router-dom";

const FormLogin = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("email", e.target.email.value);
    localStorage.setItem("password", e.target.password.value);
    window.location.href = "/products";
    // console.log(e.target.email.value);
    // console.log(e.target.password.value);
    console.log("login");
  };
  return (
    <>
      <form onSubmit={handleLogin}>
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
        <Button classname="bg-blue-600 w-full" text="Login" type="submit" />
      </form>
    </>
  );
};

export default FormLogin;
