import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function AllProducts() {
  const [products, setProducts] = useState([]);
  const getAllProducts = () => {
    axios.get("http://localhost:3001/items").then((response) => {
      setProducts(response.data);
    });
  };

  const addProductToCart = (id)=>{
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    const newProducts = [...storedProducts, products[id - 1]];
    localStorage.setItem('products', JSON.stringify(newProducts));  
  }
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className="p-5">
             <span className="text-blue-500 text-2xl font-semibold ">
         All Listed Products
        </span>
      <div className="mx-auto p-10 grid grid-cols-2 gap-y-10 gap-x-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ">
        {products.map((product, index) => (
          <div
            key={index}
            className="max-w-xs overflow-hidden bg-white shadow-lg shadow-violet-200 border border-gray-300  duration-300 hover:scale-105 hover:shadow-xl hover:shadow-violet-300"
          >
            <img
              className="object-cover w-full h-48 "
              src={product?.img}  
               alt={product?.name || "product image"}
            />

            <div className="px-4 py-2 ">
              <h1 className="text-2xl font-bold text-blue-400 uppercase ">
                {product?.name}
              </h1>
            </div>
            <div className="flex items-center justify-between px-4 py-2 ">

              <h1 className="text-md font-semibold  text-gray-500">
                Rs.{product?.price}/-
              </h1>
              <div className="flex justify-between items-center">
                <button onClick={()=>addProductToCart(product.id)} className=" px-2 py-1 text-xs font-semibold mx-2 text-gray-900 uppercase transition-colors duration-300 transform bg-blue-200 rounded hover:bg-blue-500 focus:bg-gray-400 focus:outline-none">
                  Add to cart
                </button>
                <Link
                  to={`${product.id}`}
                  className="bg-violet-200 px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllProducts;
