import axios from "axios";
import React, { use, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../main";
import Spinner from "../Spinner/Spinner";
import { Link } from "react-router";

const Imports = () => {
  const { user } = use(AuthContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/imports?email=${user?.email}`)
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err.response?.data?.message || err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <Spinner />;

  if (!products.length)
    return <p className="text-center mt-10">No products found!</p>;

// 6. “Remove” button
// 7. Imported Quantity
// 8. “See Details” button
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">My Imported Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="card bg-base-100 shadow-lg border border-gray-200"
          >
            <figure className="p-4">
              <img
                src={product.image}
                alt={product.name}
                className="rounded-lg h-48 w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title">{product.name}</h3>
              <p className="text-gray-700 font-semibold">
                Price: ${product.price}
              </p>
              <p className="text-gray-600 text-sm">
                Origin: {product.originCountry}
              </p>
              <p className="text-gray-600 text-sm">Rating: {product.rating} </p>
              <p className="text-gray-600 text-sm">
                Imported Quantity: {product.importedQuantity}
              </p>
              <div className="card-actions justify-end mt-2">
                <Link
                  to={`/products/${product._id}`}
                  className="btn btn-outline btn-sm rounded-full"
                >
                  Remove
                </Link>
                <Link
                  to={`/products/${product._id}`}
                  className="btn btn-outline btn-sm rounded-full"
                >
                  See Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Imports;
