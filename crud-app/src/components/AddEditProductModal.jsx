import { useState } from "react";

const AddEditProductModal = ({
  handleCloseProductModal,
  handleAddProduct,
  selectedProduct,
  handleEditProduct,
}) => {
  const [data, setData] = useState(
    selectedProduct || {
      productCode: "",
      productName: "",
      price: "",
      isActive : false
    }
  );

  const handleInputChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleIsActive = (e) => {
    setData((prev) => ({...prev, [e.target.name] : e.target.checked}))
  } 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedProduct) {
      handleEditProduct(data);
    } else {
      handleAddProduct(data);
    }
  };

  return (
    <div className="z-50 fixed inset-0 flex justify-center items-center">
      <div className="fixed inset-0 bg-black opacity-50" />
      <div className="relative bg-white shadow-lg p-10 rounded-lg w-full max-w-xl text-xl">
        <button
          type="button"
          className="top-2 right-5 absolute p-0 text-gray-400 text-3xl"
          onClick={handleCloseProductModal}
        >
          &times;
        </button>
        <h1 className="mb-6 font-semibold text-4xl">
          {selectedProduct ? `Edit Product` : `Add Product`}
        </h1>
        <form className="gap-5 grid" onSubmit={handleSubmit}>
          <div>
            <label className="font-medium">Product Code:</label>
            <input
              type="text"
              placeholder="Enter the product code"
              className="disabled:bg-gray-50 px-2 py-1 border rounded w-full"
              name="productCode"
              onChange={handleInputChange}
              value={data.productCode}
              disabled={selectedProduct}
            />
          </div>
          <div>
            <label className="font-medium">Product Name:</label>
            <input
              type="text"
              placeholder="Enter the product name"
              className="px-2 py-1 border rounded w-full"
              name="productName"
              onChange={handleInputChange}
              value={data.productName}
            />
          </div>
          <div>
            <label className="font-medium">Price:</label>
            <input
              type="number"
              placeholder="Enter Price"
              className="px-2 py-1 border rounded w-full"
              name="price"
              onChange={handleInputChange}
              value={data.price}
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              // className="px-2 py-1 border rounded w-full"
              name="isActive"
              onChange={handleIsActive}
              checked={data.isActive} 
            />
            <label className="mx-2 font-medium">Activate Product</label>
          </div>
          <button
            type="submit"
            className="bg-blue-500 mt-6 px-4 py-2 rounded-md font-semibold text-white text-lg text-xl"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddEditProductModal;
