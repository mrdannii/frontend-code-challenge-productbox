import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
function ProductDetails() {
  const navigate = useNavigate();

  const { productId } = useParams();
  const [product, setProduct] = useState({});

  const getProductDetails = () => {
    axios.get(`http://localhost:3001/items/${productId}`).then((response) => {
      setProduct(response.data);
    });
  };
  useEffect(() => {
    getProductDetails();
    // eslint-disable-next-line 
  }, []);

  const addProductToCart = () => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    const newProducts = [...storedProducts, product];
    console.log(storedProducts, newProducts);
    localStorage.setItem("products", JSON.stringify(newProducts));
  };

  return (
    <div>
      <div className="">
        <div className="p-2 grid h-screen">
          <div className=" mx-auto flex items-center justify-center ">
            <div className="  self-center">
            <span className="text-blue-500 text-2xl font-semibold mb-3">
         Product Detail
        </span>
              <div className=" mx-auto overflow-hidden rounded-lg mt-5">
                <img
                  src={product?.img || product?.name}
                  alt="product"
                  className="object-cover w-full h-48 "
                />

                <h1 className="text-2xl mt-5 font-bold tracking-tight text-blue-400 sm:text-3xl">
                  {product?.name || ""}
                </h1>

                <div className="mt-2 lg:row-span-3 lg:mt-0">
                  <p className="text-3xl tracking-tight text-gray-600">
                    Rs.{product?.price || ""}/-
                  </p>

                  <button
                    onClick={addProductToCart}
                    type="submit"
                    className="mt-3 mx-auto flex w-50 items-center justify-center rounded-md border border-transparent bg-blue-600 py-2 px-8 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Add to Cart
                  </button>
                  <div className="mt-2  text-center text-sm text-gray-500">
              <p>or</p>
              <button
                type="button"
                className="font-medium text-blue-600 hover:text-blue-500"
                onClick={() => navigate("/all-products")}
              >
                Back to Products
              </button>
            </div>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
