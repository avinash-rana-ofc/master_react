import { useLocation, useOutletContext, useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
//   const productObj = useOutletContext();
//   const selectedProduct = productObj.find((p) => p.id === id);
// const location = useLocation();
const {state} = useLocation();
console.log(state)
  return (
    <div className="mx-6 mx-auto max-w-[800px]">
      <div className="grid grid-cols-3 bg-gray-200 shadow-md mt-3 border border-neutral-50 round-md">
        <img src={state.image} alt={state.name} className="col-span-1 rounded-l-md w-[260px] h-[260px] object-cover" />
        <div className="flex flex-col gap-2 col-span-2 my-auto px-5">
            <span className="font-semibold text-3xl">{state.name}</span>
            <span className="font-medium text-2xl">Price: ${state.price}</span>
            <span className="text-md text-neutral-500 leading-5">{state.description}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
