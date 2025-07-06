import React from "react";
import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormRegister from "../components/Fragments/FormRegister";

const register = () => {
  return <AuthLayouts title="Register" typeForm={<FormRegister />} />;
};

export default register;
