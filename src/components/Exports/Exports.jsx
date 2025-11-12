import axios from "axios";
import React, { use, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../main";
import Spinner from "../Spinner/Spinner";
// import { Link } from "react-router";
import Swal from "sweetalert2";
import { CSVLink } from "react-csv";
// import { CSVLink } from "react-csv";

const Exports = () => {
  const { user, theme } = use(AuthContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updateProduct, setUpdateProduct] = useState(null);

  useEffect(() => {
    if (!user?.email) return;
    setLoading(true);
    axios
      .get(`http://localhost:5000/exports?email=${user?.email}`)
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

  const handleDelete = async (id) => {
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
          await axios.delete(`http://localhost:5000/exports/${id}`);
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

  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedProductInfo = {
      name: form.name.value,
      image: form.image.value,
      price: parseFloat(form.price.value),
      originCountry: form.originCountry.value,
      rating: parseFloat(form.rating.value),
      availableQuantity: parseInt(form.availableQuantity.value),
    };

    try {
      const res = await axios.put(
        `http://localhost:5000/exports/${updateProduct._id}`,
        updatedProductInfo
      );

      if (res.data.success) {
        toast.success("Product updated successfully!");

        setProducts((prevProduct) =>
          prevProduct.map((singleProduct) =>
            singleProduct._id === updateProduct._id
              ? { ...singleProduct, ...updatedProductInfo }
              : singleProduct
          )
        );
        setUpdateProduct(null);
      } else {
        toast.error("Failed to update product");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Error updating product");
    }
  };

  if (loading) return <Spinner />;
  if (!products.length)
    return <p className="text-center mt-10">No products found!</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-2">My Exported Products</h2>
      <p
        className={`mb-6 text-lg ${
          theme === "light" ? "text-gray-500" : "text-gray-300"
        }`}
      >
        Manage all the products you’ve exported from your inventory.
      </p>
      <div className="mb-6">
        <CSVLink
          data={products}
          filename={"my-exports.csv"}
          className="btn btn-outline btn-sm rounded-full border-blue-500 text-blue-600  px-6 font-bold"
        >
          Download CSV
        </CSVLink>
      </div>

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

              <p
                className={`font-semibold ${
                  theme === "light" ? "text-gray-700" : "text-gray-300"
                }`}
              >
                Price: ${product.price}
              </p>
              <p
                className={`text-sm ${
                  theme === "light" ? "text-gray-600" : "text-gray-300"
                }`}
              >
                Origin: {product.originCountry}
              </p>
              <p
                className={`text-sm ${
                  theme === "light" ? "text-gray-600" : "text-gray-300"
                }`}
              >
                Rating: {product.rating}{" "}
              </p>
              <p
                className={`text-sm ${
                  theme === "light" ? "text-gray-600" : "text-gray-300"
                }`}
              >
                Imported Quantity: {product.importedQuantity}
              </p>
              <div className="card-actions justify-end mt-2">
                <button
                  onClick={() => handleDelete(product._id)}
                  className="btn btn-outline btn-sm rounded-full text-red-600 border-red-400"
                >
                  Delete
                </button>
                <button
                  onClick={() => setUpdateProduct(product)}
                  className="btn btn-outline btn-sm rounded-full text-green-600 border-green-600"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {updateProduct && (
        <div className="fixed inset-0 bg-blue-100 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-2/3 lg:w-1/2 border border-blue-400">
            <h3 className="text-lg font-semibold mb-4">Update Product</h3>
            <form onSubmit={handleUpdate}>
              <input
                type="text"
                name="name"
                defaultValue={updateProduct.name}
                className="input input-bordered w-full mb-2"
              />
              <input
                type="text"
                name="image"
                defaultValue={updateProduct.image}
                className="input input-bordered w-full mb-2"
              />
              <input
                type="number"
                name="price"
                defaultValue={updateProduct.price}
                className="input input-bordered w-full mb-2"
              />
              <input
                type="text"
                name="originCountry"
                defaultValue={updateProduct.originCountry}
                className="input input-bordered w-full mb-2"
              />
              <input
                type="number"
                name="rating"
                defaultValue={updateProduct.rating}
                className="input input-bordered w-full mb-2"
              />
              <input
                type="number"
                name="availableQuantity"
                defaultValue={updateProduct.availableQuantity}
                className="input input-bordered w-full mb-2"
              />
              <div className="flex justify-end mt-4">
                <button
                  type="button"
                  onClick={() => setUpdateProduct(null)}
                  className="btn btn-sm btn-outline rounded-full text-red-600 border-red-600 mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-sm btn-outline rounded-full text-green-600 border-green-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Exports;
