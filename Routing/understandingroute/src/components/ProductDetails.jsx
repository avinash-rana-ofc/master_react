import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import useFetchProductDetails from "../hooks/useFetchProductDetails";

const ProductDetails = () => {
  const { id } = useParams();
  const [selectedProduct, setSelectedProduct] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useFetchProductDetails(id, (product) => setSelectedProduct(product));

  const handleModalOpen = () => {
    setIsOpen(true);
  }

  const handleModalClose = () => {
    setIsOpen(false);
  }

  const handleDeleteProduct = () => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/products/${id}`, {
      method : "DELETE"
    })
    .then((response) => {
      const data = response.json();
      if(response.ok){
        return data;
      }
      else{
        throw new Error(data);
      }
    })
    .then((data) => {
      alert(data.message);
      navigate("/");
    })
    .catch((err) => console.log(err));
  }

  return (
    <>
      <div className="mx-6 mx-auto max-w-[800px]">
        <div className="grid grid-cols-3 bg-neutral-50 shadow-md mt-3 border border-neutral-50 round-md">
          <img
            src={selectedProduct.image}
            alt={selectedProduct.name}
            className="col-span-1 rounded-l-md w-[260px] h-[260px] object-cover"
          />
          <div className="flex flex-col gap-2 col-span-2 my-auto px-5">
            <span className="font-semibold text-3xl">
              {selectedProduct.name}
            </span>
            <span className="font-medium text-2xl">
              Price: ${selectedProduct.price}
            </span>
            <span className="text-md text-neutral-500 leading-5">
              {selectedProduct.description}
            </span>
            <div className="flex gap-2 my-3">
              <Link
                to={`/products/edit/${id}`}
                className="px-3 py-1 border rounded-md"
              >
                Edit Product
              </Link>
              <button className="bg-red-500 px-3 py-1 rounded-md text-white" onClick={handleModalOpen}>
                Delete Product
              </button>
            </div>
          </div>
        </div>
      </div>
      {isOpen && <DeleteConfirmationModal handleModalClose={handleModalClose} handleDeleteProduct={handleDeleteProduct}/>}
    </>
  );
};

export default ProductDetails;
