import axios from "axios";
import React, { use, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../main";
import Spinner from "../Spinner/Spinner";
import { Link } from "react-router";
import Swal from "sweetalert2";

const Imports = () => {
  const { user } = use(AuthContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;
    setLoading(true);
    axios
      .get(`http://localhost:5000/imports?email=${user?.email}`)
      .then((res) => {
        setProducts(res.data);
        // console.log(products)
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err.response?.data?.message || err.message);
        setLoading(false);
      });
  }, [user?.email]);

  const handleRemove = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This product will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`http://localhost:5000/imports/${id}`);
          setProducts((prevProducts) =>
            prevProducts.filter((singleProduct) => singleProduct._id !== id)
          );

          Swal.fire("Deleted!", "Your product has been removed.", "success");
        } catch (error) {
          Swal.fire(
            "Error!",
            error.response?.data?.message || error.message,
            "error"
          );
        }
      }
    });
  };

  if (loading) return <Spinner />;

  if (!products.length)
    return <p className="text-center mt-10">No products found!</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-2">
        My Imported Products
      </h2>
      <p className="mb-6 text-gray-500 text-lg">
          Track and organize all your imported product details in one place.
        </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="card bg-base-100 shadow-lg border border-gray-200"
          >
            <figure className="px-4 pt-4">
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
                <button
                  onClick={() => handleRemove(product._id)}
                  className="btn btn-outline btn-sm rounded-full text-red-600 border-red-300"
                >
                  Remove
                </button>
                <Link
                  to={`/products/${product.productId}`}
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
