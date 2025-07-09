import React from "react";
import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";

const products = [
  {
    id: 1,
    title: "Sepatu Baru",
    price: "Rp. 1.000.000",
    image: "/img/shoes-1.jpg",
    deskripsi: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
          praesentium nesciunt voluptatum accusantium mollitia. Ipsum amet iste
          facilis ut odio velit exercitationem rem debitis eius, voluptate quam
          soluta. Incidunt, tempora.`,
  },
  {
    id: 2,
    title: "Sepatu Nike",
    price: "Rp. 2.000.000",
    image: "/img/shoes-2.jpg",
    deskripsi: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
          praesentium`,
  },
  {
    id: 3,
    title: "Sepatu Adidas",
    price: "Rp. 1.500.000",
    image: "/img/shoes-3.jpg",
    deskripsi: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
          praesentium`,
  },
];

const email = localStorage.getItem("email");

const Products = () => {
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };
  return (
    <>
      <div className="w-full h-[45px] bg-blue-600 flex justify-end items-center px-5">
        <div className="text-lg text-white text-left">{email}</div>
        <button
          className="mx-2 bg-black text-white px-2 py-1 cursor-pointer"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
      <div className="flex justify-center py-5 gap-2">
        {products.map((product) => {
          return (
            <CardProduct key={product.id}>
              <CardProduct.Header url={product.image} />
              <CardProduct.Body title={product.title}>
                {product.deskripsi}
              </CardProduct.Body>
              <CardProduct.Footer harga={product.price} />
            </CardProduct>
          );
        })}
      </div>
    </>
  );
};

export default Products;
