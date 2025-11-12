import { use, useEffect, useState } from "react";
import { Link } from "react-router";
import axios from "axios";
import Spinner from "../Spinner/Spinner";
// import { AuthContext } from "../../main";
import toast from "react-hot-toast";
import { AuthContext } from "../../main";

const AllProducts = () => {
  const { theme } = use(AuthContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchProduct, setSearchProduct] = useState("");

  useEffect(() => {
    axios
      .get("https://assignment-10-server-rosy-seven.vercel.app/products")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err.response?.data?.message || err.message);
        setLoading(false);
      });
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchProduct.toLowerCase())
  );

  if (loading) return <Spinner />;

  if (!products.length)
    return (
      <p className="text-center mt-10 text-2xl text-amber-500">
        No products found!
      </p>
    );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center gap-2">
        <div>
          <h2 className="text-3xl font-bold mb-2">All Products</h2>
          <p
            className={`mb-6 ${
              theme === "light" ? "text-gray-700" : "text-white"
            } text-lg`}
          >
            Find everything you need — all in one collection.
          </p>
        </div>

        <div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="Search by product name..."
            className="input input-bordered border-blue-500 w-full max-w-md"
            value={searchProduct}
            onChange={(e) => setSearchProduct(e.target.value)}
          />
        </div>
      </div>
      {!filteredProducts.length ? (
        <p className="text-center mt-10 text-2xl text-amber-500">
          No products found!
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
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
                <p
                  className={`${
                    theme === "light" ? "text-gray-700" : "text-gray-300"
                  } font-semibold`}
                >
                  Price: ${product.price}
                </p>
                <p
                  className={`${
                    theme === "light" ? "text-gray-600" : "text-gray-300"
                  } text-sm`}
                >
                  Origin: {product.originCountry}
                </p>
                <div className="flex justify-between gap-4">
                  <div>
                    <p
                      className={`${
                        theme === "light" ? "text-gray-600" : "text-gray-300"
                      } text-sm`}
                    >
                      Rating: {product.rating}{" "}
                    </p>
                    <p
                      className={`${
                        theme === "light" ? "text-gray-600" : "text-gray-300"
                      } text-sm`}
                    >
                      Available: {product.availableQuantity}
                    </p>
                  </div>
                  <div className="card-actions justify-end mt-2">
                    <Link
                      to={`/products/${product._id}`}
                      className="btn btn-outline btn-sm rounded-full"
                    >
                      See Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllProducts;
