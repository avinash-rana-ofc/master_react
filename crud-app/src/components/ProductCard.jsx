const ProductCard = ({product, handleDeleteProduct, handleEditClick}) => {
  return (
    <div className={`flex flex-col gap-2 shadow-lg p-5 border rounded-lg w-[240px] font-semibold text-2xl ${!product.isActive && ' shadow-none bg-gray-50'}`}>
      <span>{product.productCode}</span>
      <span>{product.productName}</span>
      <span>{product.price}</span>
      <div className="flex gap-1 mt-6 text-xl">
        <button
          type="button"
          className="px-2 py-1 border rounded-md w-full font-semibold"
          onClick={() => handleEditClick(product)}
        >
          Edit
        </button>
        <button
          type="button"
          className="bg-red-500 px-2 py-1 rounded-md w-full font-semibold text-white"
          onClick={() => handleDeleteProduct(product.productCode)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
