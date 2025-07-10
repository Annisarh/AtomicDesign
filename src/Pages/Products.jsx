import React, { useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";

const products = [
  {
    id: 1,
    title: "Sepatu Baru",
    price: 1000000,
    image: "/img/shoes-1.jpg",
    deskripsi: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
          praesentium nesciunt voluptatum accusantium mollitia. Ipsum amet iste
          facilis ut odio velit exercitationem rem debitis eius, voluptate quam
          soluta. Incidunt, tempora.`,
  },
  {
    id: 2,
    title: "Sepatu Nike",
    price: 2000000,
    image: "/img/shoes-2.jpg",
    deskripsi: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
          praesentium`,
  },
  {
    id: 3,
    title: "Sepatu Adidas",
    price: 1500000,
    image: "/img/shoes-3.jpg",
    deskripsi: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
          praesentium`,
  },
];

const email = localStorage.getItem("email");

const Products = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      qty: 1,
    },
  ]);
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };
  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          id,
          qty: 1,
        },
      ]);
    }
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
      <div className="flex justify-center py-5 gap-2 mx-2">
        <div className="w-3/5 flex flex-wrap gap-2">
          {products.map((product) => {
            return (
              <CardProduct key={product.id}>
                <CardProduct.Header url={product.image} />
                <CardProduct.Body title={product.title}>
                  {product.deskripsi}
                </CardProduct.Body>
                <CardProduct.Footer
                  id={product.id}
                  harga={product.price}
                  handleAddToCart={handleAddToCart}
                />
              </CardProduct>
            );
          })}
        </div>
        <div className="w-2/5">
          <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
          <table className="text-left table-auto border-separate border-spacing-5">
            <thead>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </thead>
            <tbody>
              {cart.map((item) => {
                const product = products.find(
                  (product) => product.id === item.id
                );
                return (
                  <tr>
                    <td>{product.title}</td>
                    <td>
                      {product.price.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </td>
                    <td>{item.qty}</td>
                    <td>
                      {(item.qty * product.price).toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Products;
