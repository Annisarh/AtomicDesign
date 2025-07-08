import React from "react";
import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormLogin from "../components/Fragments/FormLogin";
import { Link } from "react-router-dom";

const login = () => {
  return (
    <AuthLayouts title="Login" type="login">
      <FormLogin />
    </AuthLayouts>
  );
};

export default login;
