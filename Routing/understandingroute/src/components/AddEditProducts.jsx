import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetchProductDetails from "../hooks/useFetchProductDetails";

const AddEditProducts = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState({
    name: "",
    image: "",
    price: "",
    description: "",
  });

  useFetchProductDetails(id, (product) => setData(product))

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

  const handleEditProduct = (e) => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/products/${id}`, {
      method: "PUT",
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
        navigate(`/product-details/${id}`);
      })
      .catch((err) => console.log(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      handleEditProduct();
    } else {
      handleAddProduct();
    }
  };

  return (
    <div className="shadow-lg m-6 mx-auto p-10 border border-gray-50 rounded-md max-w-[1024px]">
      <h1 className="font-semibold text-3xl">
        {id ? "Edit Product" : "Add Product"}
      </h1>
      <form className="gap-4 grid grid-cols-2 my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <label className="font-semibold">Product Name:</label>
          <input
            type="text"
            name="name"
            className="p-2 border border-gray-200 rounded-md"
            onChange={handleChange}
            value={data.name}
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
            value={data.image}
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
            value={data.price}
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
            value={data.description}
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

export default AddEditProducts;
