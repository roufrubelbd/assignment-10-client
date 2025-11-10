import { useEffect, useState } from "react";
import { Link } from "react-router";
import axios from "axios";

export default function AllProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/products") // replace with your server URL
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center mt-10">Loading products...</p>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">All Products</h2>
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
              <p className="text-gray-700 font-semibold">Price: ${product.price}</p>
              <p className="text-gray-600 text-sm">Origin: {product.originCountry}</p>
              <p className="text-gray-600 text-sm">Rating: {product.rating} ⭐</p>
              <p className="text-gray-600 text-sm">
                Available: {product.availableQuantity}
              </p>
              <div className="card-actions justify-end mt-2">
                <Link
                  to={`/products/${product._id}`}
                  className="btn btn-primary btn-sm"
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
}
