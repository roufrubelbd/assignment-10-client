import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import Spinner from "../Spinner/Spinner";

const Add = () => {
  const [loading, setLoading] = useState(false);

  if (loading) return <Spinner />;

  const handleAdd = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const price = parseFloat(form.price.value);
    const originCountry = form.originCountry.value;
    const rating = parseFloat(form.rating.value);
    const availableQuantity = parseInt(form.availableQuantity.value);
    const category = form.category.value;

    const newProduct = {
      name,
      image,
      price,
      originCountry,
      rating,
      availableQuantity,
      category,
    };

    try {
      const res = await axios.post("http://localhost:5000/exports", newProduct);

      if (res.data.success) {
        toast.success("Product exported successfully!");
        form.reset();
        setLoading(false);
      } else {
        toast.error("Failed to export product");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Error exporting product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto bg-base-300 mt-6 p-8">
      <div className="p-8 shadow-lg rounded-lg bg-blue-100 w-full md:w-1/3 lg:w-1/4 mx-auto border border-blue-300">
        <h2 className="mb-4 text-2xl font-bold">Add Exports</h2>
        <div className="">
          <form onSubmit={handleAdd}>
            <input
              type="text"
              name="name"
              placeholder="Product Name"
              required
              className="px-6 py-2 bg-white mb-3 rounded-lg w-full"
            />{" "}
            <br />
            <input
              type="text"
              name="image"
              placeholder="Product image url"
              required
              className="px-6 py-2 bg-white mb-3 rounded-lg w-full"
            />{" "}
            <br />
            <input
              type="number"
              name="price"
              placeholder="Price"
              required
              className="px-6 py-2 bg-white mb-3 rounded-lg w-full"
            />{" "}
            <br />
            <input
              type="text"
              name="originCountry"
              placeholder="Origin Country"
              required
              className="px-6 py-2 bg-white mb-3 rounded-lg w-full"
            />
            <br />
            <input
              type="number"
              name="rating"
              placeholder="Rating"
              required
              className="px-6 py-2 bg-white mb-3 rounded-lg w-full"
            />{" "}
            <br />
            <input
              type="number"
              name="availableQuantity"
              placeholder="Available Quantity"
              required
              className="px-6 py-2 bg-white mb-3 rounded-lg w-full"
            />
            <br />
            <input
              type="text"
              name="category"
              placeholder="Category"
              required
              className="px-6 py-2 bg-white mb-3 rounded-lg w-full"
            />
            <br />
            <button
              className="btn btn-sm btn-outline rounded-full w-full font-bold"
              type="submit"
            >
              Add Export
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Add;
