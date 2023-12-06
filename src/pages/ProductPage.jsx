import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth";

const ProductPage = () => {
  const [product, setProduct] = useState({});
  const params = useParams();

  const auth = useAuth();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    if (!auth.user) {
      navigate("/signin");
    }
  };

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.productId}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <div className="bg-gray-100 py-8 text-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <div className="h-[460px] rounded-lg bg-gray-300 mb-4">
              <img
                className="w-full h-full object-cover"
                src={product.image}
                alt={product.title}
              />
            </div>
            <div className="flex -mx-2 mb-4">
              <div className="w-1/2 px-2">
                <button
                  onClick={handleAddToCart}
                  className={
                    "w-full transform rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium tracking-wide text-white transition-colors duration-300 hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                  }
                  tabIndex="-1"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <h2 className="text-2xl font-bold text-gray-800  mb-2">
              {product.title}
            </h2>

            <div className="flex mb-4">
              <div className="mr-4">
                <span className="font-bold text-gray-700">Price:</span>
                <span className="text-gray-600 ">${product.price}</span>
              </div>
            </div>

            <div>
              <span className="font-bold text-gray-700 ">
                Product Description:
              </span>
              <p className="text-gray-600  text-sm mt-2">
                {product.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
