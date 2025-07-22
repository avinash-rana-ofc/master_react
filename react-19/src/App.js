import "./App.css";
import Products from "./components/Product";

function App() {
  const products = [
    {
      name: "Apple",
      img: "/apple.png",
      code: "0001",
      price: 12,
      isActive: true,
    },
    {
      id: "2",
      name: "Orange",
      img: "/orange.png",
      code: "0002",
      price: 20,
      isActive: false,
    },
    {
      name: "Mango",
      img: "/mango.png",
      code: "0003",
      price: 5,
      isActive: true,
    },
  ];

  const Employees = [
    {
      id: "001",
      name: "Avinash Rana",
      img:"/employee_1",
      Salary: "10000",
      isActive: true,
    },
    {
      id: "002",
      name: "Anik Ghosh",
      img:"/employee_2",
      Salary: "20000",
      isActive: false,
    },
    {
      id: "003",
      name: "Debaleena Ghoshal",
      img:"/employee_3",
      Salary: "30000",
      isActive: true,
    }
  ];

  const handleClick = (params) => {
    console.log("Printing");
    console.log(params);
  };
  return (
    <>
      <h1> Products </h1>
      <div className="product-list">
        {products.map((product) => (
          <Products product={product} key={product.code} />
        ))}
      </div>
      <button onClick={() => handleClick("Hello World")}>Click Me</button>
    </>
  );
}

export default App;
