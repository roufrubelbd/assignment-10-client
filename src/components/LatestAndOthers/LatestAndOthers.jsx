import { useEffect, useState } from "react";
import { Link } from "react-router";
import axios from "axios";
import toast from "react-hot-toast";

const LatestAndOthers = () => {
  const [latestProducts, setLatestProducts] = useState([]);
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

  const Skeleton = () => (
    <div className="max-w-4xl mx-auto p-4 space-y-4 animate-pulse">
      <div className="h-64 bg-gray-200 rounded-lg"></div>
      <div className="h-6 bg-gray-300 rounded w-3/4"></div>
      <div className="h-4 bg-gray-300 rounded w-1/2"></div>
      <div className="h-4 bg-gray-300 rounded w-1/3"></div>
      <div className="h-4 bg-gray-300 rounded w-1/4"></div>
      <div className="h-10 bg-gray-300 rounded w-1/2"></div>
    </div>
  );

  if (loading) return <Skeleton />;
  if (!latestProducts.length)
    return <p className="text-center mt-10">No latest products found!</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Latest 6 Products */}
      <section>
        <h2 className="text-3xl font-bold mb-6 text-center">Latest Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {latestProducts?.map((product) => (
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
                <p className="text-gray-600 text-sm">
                  Rating: {product.rating}
                </p>
                <p className="text-gray-600 text-sm">
                  Available: {product.availableQuantity}
                </p>
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
          ))}
        </div>
      </section>

      {/* Extra Section 1 - Top Categories */}
      <section className="text-center mt-16">
        <h2 className="text-3xl font-bold mb-6">Top Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 bg-blue-50 rounded-2xl shadow hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">Smartphones</h3>
            <p className="text-gray-600 text-sm">Latest flagship models</p>
          </div>
          <div className="p-6 bg-blue-50 rounded-2xl shadow hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">Laptops</h3>
            <p className="text-gray-600 text-sm">Top performance devices</p>
          </div>
          <div className="p-6 bg-blue-50 rounded-2xl shadow hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">Gadgets</h3>
            <p className="text-gray-600 text-sm">Innovative tech accessories</p>
          </div>
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
            <h3 className="text-xl font-semibold mb-2">
               Quality Guaranteed
            </h3>
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
