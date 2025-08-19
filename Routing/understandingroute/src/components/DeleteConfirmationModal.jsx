import React from "react";

const DeleteConfirmationModal = ({handleModalClose, handleDeleteProduct}) => {
  return (
    <div className="z-50 fixed inset-0 flex justify-center items-center">
      <div className="fixed inset-0 bg-black opacity-50" />
      <div className="relative bg-white shadow-lg p-10 rounded-lg w-full max-w-xl text-xl">
        <button type="button" className="top-2 right-5 absolute p-0 text-gray-400 text-3xl" onClick={handleModalClose}>
          &times;
        </button>
        <div className="flex flex-col">
          <p className="font-semibold text-center">Are you sure you want to delete this product?</p>
          <div className="flex self-center gap-4 mt-4">
            <button className="bg-red-500 px-3 py-1 rounded-md text-white" onClick={handleDeleteProduct}>Delete</button>
            <button className="px-3 py-1 border rounded-md" onClick={handleModalClose}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
