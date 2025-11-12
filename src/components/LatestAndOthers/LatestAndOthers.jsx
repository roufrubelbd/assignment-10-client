import { useEffect, useState } from "react";
import { Link } from "react-router";
import axios from "axios";
import toast from "react-hot-toast";
import Spinner from "../Spinner/Spinner";
import { use } from "react";
import { AuthContext } from "../../main";

const LatestAndOthers = () => {
  const { theme } = use(AuthContext);
  const [latestProducts, setLatestProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/products?limit=6")
      .then((res) => {
        setLatestProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err.response?.data?.message || err.message);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5000/products")
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

  if (!latestProducts.length)
    return <p className="text-center mt-10">No latest products found!</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Latest 6 Products */}
      <section>
        <h2 className="text-3xl font-bold mb-2">Latest Products</h2>
        <p className={`mb-6 ${theme === "light" ? "text-gray-700" : "text-gray-300"} text-lg`}>
          Carefully selected, high-quality products — updated daily.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {latestProducts?.map((product) => (
            <div
              key={product._id}
              className={`card bg-base-100 shadow-lg border ${theme === "light" ? "border-gray-200" : "border-gray-700"}`}
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
                <p className={`${theme === "light" ? "text-gray-700" : "text-gray-300"} font-semibold`}>
                  Price: ${product.price}
                </p>
                <p className={`${theme === "light" ? "text-gray-600" : "text-gray-300"} text-sm`}>
                  Origin: {product.originCountry}
                </p>
                <div className="flex justify-between gap-4">
                  <div>
                    <p className={`${theme === "light" ? "text-gray-600" : "text-gray-300"} text-sm`}>
                      Rating: {product.rating}
                    </p>
                    <p className={`${theme === "light" ? "text-gray-600" : "text-gray-300"} text-sm`}>
                      Available: {product.availableQuantity}
                    </p>
                  </div>
                  <div className="card-actions justify-end mt-2">
                    <Link
                      to={`/products/${product._id}`}
                      className="btn btn-outline rounded-full btn-sm"
                    >
                      See Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Extra Section 1 - Top Week's  */}
      <section className="my-20">
        <h2 className="text-3xl font-bold mb-2">This Week’s Top Deals</h2>
        <p className={`mb-8 ${theme === "light" ? "text-gray-700" : "text-gray-300"} text-lg`}>
          Explore our latest tech and gadget collection — innovative, modern,
          and affordable.
        </p>

        <div className="flex gap-10 overflow-x-auto px-4 scrollbar-hide">
          {products.map((product) => (
            <div
              key={product._id}
              className="flex flex-col items-center min-w-[160px] text-center"
            >
              <div className="w-42 h-42 flex items-center justify-center bg-gray-100 rounded-full overflow-hidden p-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-contain w-24 h-24 rounded-2xl"
                />
              </div>
              <p className={`mt-3 text-sm font-medium ${theme === "light" ? "text-gray-700" : "text-gray-300"} w-32 truncate`}>
                {product.name}
              </p>
              <p className={`text-xs ${theme === "light" ? "text-gray-500" : "text-gray-400"}`}>£{product.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Extra Section 2 - Why Choose Us */}
      <section className="bg-linear-to-r from-blue-600 to-black text-white py-12 rounded-2xl shadow-xl mt-16">
        <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl font-semibold mb-2"> Fast Delivery</h3>
            <p className="text-gray-200">
              Receive your products within 2–3 business days.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Quality Guaranteed</h3>
            <p className="text-gray-200">
              We only sell verified, high-quality products.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2"> 24/7 Support</h3>
            <p className="text-gray-200">
              Our support team is always ready to assist you.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LatestAndOthers;
