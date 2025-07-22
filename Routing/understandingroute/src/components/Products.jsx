import React from "react";
import { Link, Outlet } from "react-router-dom";

const Products = () => {
  const products = [
    {
      id: "1",
      image: "/apple.jpg",
      name: "Apple",
      price: 20,
      description:
        "Presenting the best of Apples. Crisp and sweet, it’s perfect for a healthy snack. Packed with fiber and antioxidants, it's a great addition to your daily diet.",
    },
    {
      id: "2",
      image: "/banana.jpg",
      name: "Banana",
      price: 30,
      description:
        "Enrich your diet with Bananas. Rich in potassium, they help maintain healthy blood pressure. A quick and easy snack, perfect for on-the-go energy.",
    },
    {
      id: "3",
      image: "/orange.jpg",
      name: "Orange",
      price: 35,
      description:
        "Oranges, known for their tangy sweetness, they’re a great way to boost your immune system. Enjoy them as a refreshing snack or in juices.",
    },
    {
      id: "4",
      image: "/pineapple.jpg",
      name: "Pineapple",
      price: 50,
      description:
        "Tasty and Nutritional Pineapples. A tropical delight, full of vitamin C and manganese. The sweet, tart flavor makes it perfect for smoothies, desserts, or just a refreshing bite.",
    },
  ];

  return (
    <>
      <div className="flex gap-4 m-6">
        {products.map((product) => (
          <Link
            to={`/product-details/${product.id}`}
            state={product}
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
