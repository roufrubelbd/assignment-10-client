import { use, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Link, useParams } from "react-router";
import Spinner from "../Spinner/Spinner";
import { AuthContext } from "../../main";

const Details = () => {
    const { user, theme } = use(AuthContext);
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [importQty, setImportQty] = useState(0);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((error) => {
        toast.error(error.response?.data?.message || error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <Spinner />;
  if (!product) return <p className="text-center mt-10">Product not found!</p>;

  const handleImport = async () => {
    try {
      if (importQty <= 0 || importQty > product.availableQuantity) return;

      await axios.post(`http://localhost:5000/imports/${id}`, {
        quantity: importQty,
        userEmail: user?.email, 
      });

      toast.success(`Successfully imported ${importQty} units`);
      setProduct({
        ...product,
        availableQuantity: product.availableQuantity - importQty,
      });
      setImportQty(0);
      setShowModal(false);
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 w-full md:w-3/4 lg:w-2/3">
      <div className="card lg:card-side bg-base-100 shadow-lg border border-gray-200">
        <figure className="p-4 lg:w-1/2">
          <img
            src={product.image}
            alt={product.name}
            className="rounded-lg w-full h-full object-cover"
          />
        </figure>
        <div className="card-body lg:w-1/2">
          <h2 className="text-2xl font-bold">{product.name}</h2>
          <p className={`${theme === "light" ? "text-gray-700" : "text-gray-300"} font-semibold text-lg`}>
            Price: ${product.price}
          </p>
          <p className={`${theme === "light" ? "text-gray-600" : "text-gray-300"}`}>Origin: {product.originCountry}</p>
          <p className={`${theme === "light" ? "text-gray-600" : "text-gray-300"}`}>Rating: {product.rating}</p>
          <p className={`${theme === "light" ? "text-gray-600" : "text-gray-300"}`}>
            Available Quantity: {product.availableQuantity}
          </p>
          <p className={`${theme === "light" ? "text-gray-600" : "text-gray-300"}`}>Category: {product.category}</p>

          <button
            className="btn btn-sm btn-outline mt-4 rounded-full"
            onClick={() => setShowModal(true)}
            disabled={product.availableQuantity <= 0}
          >
            Import Now
          </button>
        </div>
      </div>

      <Link to="/products" className="btn btn-outline btn-sm mt-6 rounded-full">
        &larr; Back to All Products
      </Link>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-200 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className={`text-xl font-bold mb-4 ${theme === "light" ? "" : " text-gray-700"}`}>Import {product.name}</h2>
            <input
              type="number"
              min="1"
              max={product.availableQuantity}
              value={importQty}
              onChange={(e) => setImportQty(Number(e.target.value))}
              placeholder="Enter quantity"
              className={`input input-bordered w-full mb-4 ${theme === "light" ? "" : "bg-gray-100 border-gray-700 text-gray-700"}`}
            />
            <div className="flex justify-end space-x-2">
              <button
                className={`btn btn-sm btn-outline rounded-full ${theme === "light" ? "border-gray-500 text-gray-500" : "border-gray-700 text-gray-700"}`}
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className={`btn btn-sm btn-outline rounded-full ${theme === "light" ? "border-gray-500 text-gray-500" : "border-gray-700 text-gray-700"}`}
                onClick={handleImport}
                disabled={
                  importQty <= 0 || importQty > product.availableQuantity
                }
              >
                Submit
              </button>
            </div>
            <p className={`text-sm ${theme === "light" ? "text-gray-500" : "text-gray-400"} mt-2`}>
              Max quantity you can import: {product.availableQuantity}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
