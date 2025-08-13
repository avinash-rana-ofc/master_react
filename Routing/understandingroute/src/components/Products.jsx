import { Link, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {setProducts} from "../store/productSlice";

const Products = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((response) => {
        const data = response.json();
        if (response.ok) {
          return data;
        } else {
          throw new Error(data);
        }
      })
      .then((data) => dispatch(setProducts(data)))
      .catch((err) => console.log(err));
  }, [dispatch]);

  return (
    <>
      <div className="flex gap-4 m-6">
        {products.length > 0 ? products.map((product) => (
          <Link to={`/product-details/${product.id}`} key={product.id}>
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
        )) : <h1 className="text-semibold text-2xl">No Products found</h1>}
      </div>
      <Outlet />
    </>
  );
};

export default Products;
