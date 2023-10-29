import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [productsLenght, setProductsLength] = useState(
    JSON.parse(localStorage.getItem("products"))?.length || []
  );
  return (
    <nav
      x-data="{ isOpen: false }"
      class="relative bg-white  shadow-md shadow-violet-400 dark:bg-gray-800"
    >
      <div class="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
        <div class="flex items-center justify-between">
        
          <Link
            to="/"
            class="text-2xl font-bold text-gray-800 transition-colors duration-300 transform dark:text-white lg:text-2xl hover:text-gray-700 dark:hover:text-gray-300"
          >
            <div className="text-blue-600 p-3 text-center inline-flex items-center justify-center w-10 h-10 mr-2 shadow-lg rounded-full bg-blue-300">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
</svg>
                  </div>
            RandoStore
          </Link>
        </div>

        <div class="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center">
          <div class="flex flex-col md:flex-row md:mx-6">
            <Link
              to="/"
              class="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
            >
              Home
            </Link>
            <Link
              to="all-products"
              class="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
            >
              Products
            </Link>
            <Link
              to="add-new-product"
              class="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
            >
              Sell Your Product
              
            </Link>
          </div>

          <div class="flex justify-center md:block">
            <Link to="cart" class="relative text-gray-200 transition-colors duration-300 transform d hover:text-gray-400 ">
              <svg
                class="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <span class="absolute top-0 left-0 p-1 text-xs text-white bg-blue-500 rounded-full"></span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
   
  );
}

export default Navbar;
