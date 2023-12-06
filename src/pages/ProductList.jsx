import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = () => {
    if (!auth.user) {
      navigate("/signin");
    }
  };

  return (
    <div className="flex flex-wrap justify-center mt-10 px-6">
      {products.map((product) => (
        <div
          key={product.title}
          className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex-col lg:w-1/5 md:w-1/4 m-2 p-2 relative"
        >
          <Link to={`/products/${product.id}`}>
            <img
              className="rounded-t-lg h-80 w-full"
              src={product.image}
              alt={product.title}
            />
          </Link>
          <div className="p-5">
            <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">
              {product.title}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {product.price}
            </p>
            <button
              onClick={handleAddToCart}
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 absolute bottom-1 right-1"
            >
              Add to Cart
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
