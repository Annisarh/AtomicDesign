import React from "react";
import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormLogin from "../components/Fragments/FormLogin";

const login = () => {
  return <AuthLayouts title="Login" typeForm={<FormLogin />} />;
};

export default login;
