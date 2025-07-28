import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.products);
  const selectedProduct = products.find((p) => p.id === id);
  
  return (
    <div className="mx-6 mx-auto max-w-[800px]">
      <div className="grid grid-cols-3 bg-gray-200 shadow-md mt-3 border border-neutral-50 round-md">
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
