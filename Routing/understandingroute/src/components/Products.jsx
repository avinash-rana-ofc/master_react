import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Products = () => {
  const products = useSelector((state) => state.products);
  fetch("https://localhost:3000/products").then((response) => {
    console.log(response);
  })

  return (
    <>
      <div className="flex gap-4 m-6">
        {products.map((product) => (
          <Link
            to={`/product-details/${product.id}`}
            key={product.id}
          >
            <div
              className="shadow-md border border-gray-200 rounded-md w-fit"
              key={product.id}
            >
              <img
                src={product.image}
                alt={product.name}
                className="rounded-t-md w-[240px] h-[240px] object-cover"
              />
              <div className="p-2 border-gray-200 border-t rounded-b-md font-semibold text-xl text-center">
                <span>{product.name}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Outlet />
    </>
  );
};

export default Products;
