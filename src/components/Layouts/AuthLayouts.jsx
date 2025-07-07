import React from "react";
import FormLogin from "../Fragments/FormLogin";

const AuthLayouts = ({ title, typeForm }) => {
  return (
    <div className="flex justify-center bg-slate-300e min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="font-bold text-3xl text-blue-600 mb-1">{title}</h1>
        <p className="font-medium text-sm text-slate-700 mb-4">
          Welcome, please input your details
        </p>
        {typeForm}
      </div>
    </div>
  );
};

export default AuthLayouts;
