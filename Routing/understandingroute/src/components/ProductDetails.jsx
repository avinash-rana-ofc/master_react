import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [selectedProduct, setSelectedProduct] = useState({});

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/products/${id}`)
      .then((response) => {
        const data = response.json();
        if (response.ok) {
          return data;
        } else {
          throw new Error(data);

        }
      })
      .then((data) => {
        return setSelectedProduct(data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div className="mx-6 mx-auto max-w-[800px]">
      <div className="grid grid-cols-3 bg-neutral-50 shadow-md mt-3 border border-neutral-50 round-md">
        <img
          src={selectedProduct.image}
          alt={selectedProduct.name}
          className="col-span-1 rounded-l-md w-[260px] h-[260px] object-cover"
        />
        <div className="flex flex-col gap-2 col-span-2 my-auto px-5">
          <span className="font-semibold text-3xl">{selectedProduct.name}</span>
          <span className="font-medium text-2xl">
            Price: ${selectedProduct.price}
          </span>
          <span className="text-md text-neutral-500 leading-5">
            {selectedProduct.description}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
