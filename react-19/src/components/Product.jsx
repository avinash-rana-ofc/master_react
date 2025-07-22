import React from "react";

const Product = ({ product }) => {
  return product.isActive && (
      <div className="card" key={product.code}>
        <img src={product.img} alt={product.name} height={120} width={120} />
        <span>{product.code}</span>
        <span>{product.name}</span>
        <span>{product.price}</span>
      </div>
    );
};

export default Product;

// const ProductDetail = () => {
//   return (
//     <>
//       <h1>Product Details</h1>
//     </>
//   );
// };

// export { ProductDetail };
