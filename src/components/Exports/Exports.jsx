import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import Spinner from "../Spinner/Spinner";

const Exports = () => {
  const [loading, setLoading] = useState(false);

  if (loading) return <Spinner />;

  const handleExport = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const price = parseFloat(form.price.value);
    const originCountry = form.originCountry.value;
    const rating = parseFloat(form.rating.value);
    const availableQuantity = parseInt(form.availableQuantity.value);

    const newProduct = {
      name,
      image,
      price,
      originCountry,
      rating,
      availableQuantity,
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
    <div className="container mx-auto bg-blue-500 mt-6">
      <h2>My exports</h2>
      <div className="border ">
        <form onSubmit={handleExport}>
          <input type="text" name="name" placeholder="Product Name" required /> <br />
          <input
            type="text"
            name="image"
            placeholder="Product image url"
            required
          /> <br />
          <input type="number" name="price" placeholder="Price" required /> <br />
          <input
            type="text"
            name="originCountry"
            placeholder="Origin Country"
            required
          />
          <br />
          <input type="number" name="rating" placeholder="Rating" required /> <br />
          <input
            type="number"
            name="availableQuantity"
            placeholder="Available Quantity"
            required
          />
          <br />
          <button type="submit">Export</button>
        </form>
      </div>
    </div>
  );
};

export default Exports;
