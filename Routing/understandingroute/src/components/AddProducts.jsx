import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProducts = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    image: "",
    price: "",
    description: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleAddProduct = () => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/products/add`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => {
        const data = response.json();
        if (response.ok) {
          return data;
        } else {
          throw new Error(data);
        }
      })
      .then((data) => {
        alert(data.message);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddProduct();
  };

  return (
    <div className="shadow-lg m-6 mx-auto p-10 border border-gray-50 rounded-md max-w-[1024px]">
      <h1 className="font-semibold text-3xl">Add Products</h1>
      <form className="gap-4 grid grid-cols-2 my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <label className="font-semibold">Product Name:</label>
          <input
            type="text"
            name="name"
            className="p-2 border border-gray-200 rounded-md"
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-semibold">Image URL:</label>
          <input
            type="text"
            name="image"
            className="p-2 border border-gray-200 rounded-md"
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-semibold">Price:</label>
          <input
            type="number"
            name="price"
            className="p-2 border border-gray-200 rounded-md"
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-semibold">Description:</label>
          <textarea
            type="text"
            name="description"
            className="p-2 border border-gray-200 rounded-md"
            rows={4}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="col-span-2 bg-blue-500 mx-auto my-4 px-3 py-1 rounded-md w-[400px] text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProducts;
