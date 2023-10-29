import React from 'react'
import { useNavigate } from "react-router-dom";


export default function Home() {
    const navigate = useNavigate();

  return (
    <>
    
      <main>

        <section className="relative py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full  pointer-events-none overflow-hidden -mt-20"
            style={{ height: "100px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://plus.unsplash.com/premium_photo-1681487818956-b61f40077d3b?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <div className="text-blue-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-blue-300">
                    <i className="fas fa-rocket text-xl"></i>
                  </div>
                  <h3 className="text-3xl font-semibold">
                    RandoStore
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-gray-600">
                  Discover something new every day at Rando Store.
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200 mr-3">
                            <i className="fas fa-fingerprint"></i>
                          </span>
                        </div>
                        <div>
                        <button
                type="button"
                className="text-lg font-medium text-blue-400 hover:text-blue-600 p-3 hover:font-bold"
                onClick={() => navigate("/all-products")}
              >
                Browse Products
              </button>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200 mr-3">
                            <i className="fab fa-html5"></i>
                          </span>
                        </div>
                        <div> <button
                type="button"
                className="text-lg font-medium text-blue-400 hover:text-blue-600 p-3 hover:font-bold"
                onClick={() => navigate("/add-new-product")}
              >
                List Your Product
              </button>
                        </div>
                      </div>
                    </li>
                    
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>



     
      
      </main>
    </>
  )
}
