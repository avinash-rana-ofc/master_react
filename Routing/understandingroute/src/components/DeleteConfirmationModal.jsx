import React from "react";

const DeleteConfirmationModal = (handleModalOpen) => {
  return (
    <div className="z-50 fixed inset-0 flex justify-center items-center">
      <div className="fixed inset-0 bg-black opacity-50" />
      <div className="relative bg-white shadow-lg p-10 rounded-lg w-full max-w-xl text-xl">
        <button type="button" className="top-2 right-5 absolute p-0 text-gray-400 text-3xl" onClick={handleModalOpen}>
          &times;
        </button>
        DeleteConfirmationModal
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
