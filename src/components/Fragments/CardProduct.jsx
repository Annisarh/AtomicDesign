import React from "react";
import Button from "../Elements/Button";

const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow flex flex-col justify-between">
      {children}
    </div>
  );
};

const Body = (props) => {
  const { title, children } = props;
  return (
    <div className="px-5 pb-5 h-full">
      <a href="">
        <h5 className="text-xl font-semibold tracking-tight text-white">
          {title}
        </h5>
        <p className="text-sm text-white mt-2">{children}</p>
      </a>
    </div>
  );
};

const Header = (props) => {
  const { url } = props;
  return (
    <a href="">
      <img src={url} alt="product" className="p-8 rounded-t-lg h-full" />
    </a>
  );
};

const Footer = (props) => {
  const { harga } = props;
  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-xl font-bold text-white">{harga}</span>
      <Button
        text="Add To Cart"
        classname="bg-blue-600 rounded-xl font-semibold"
      />
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;
export default CardProduct;
