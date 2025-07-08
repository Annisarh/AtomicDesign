import React from "react";
import FormLogin from "../Fragments/FormLogin";
import { Link } from "react-router-dom";

const AuthLayouts = (props) => {
  // const { title, typeForm } = props;
  return (
    <div className="flex justify-center bg-slate-300e min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="font-bold text-3xl text-blue-600 mb-1">{props.title}</h1>
        <p className="font-medium text-sm text-slate-700 mb-4">
          Welcome, please input your details
        </p>
        {props.children}
        <p className="mt-5 text-center">
          {props.type === "login"
            ? " doesnt Have an account? "
            : "Already have Account? "}
          {props.type === "login" && (
            <Link to="/register" className="font-bold text-blue-600">
              Register
            </Link>
          )}
          {props.type === "register" && (
            <Link to="/login" className="font-bold text-blue-600">
              Login
            </Link>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthLayouts;
