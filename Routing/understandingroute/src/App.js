import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Layout from "./components/Layout";
import NotFound from "./components/NotFound";
import ProductDetails from "./components/ProductDetails";
import Products from "./components/Products";
import AddEditProducts from "./components/AddEditProducts";

function App() {
  // const routElements = useRoutes([
  //   {
  //     path: "/",
  //     element: <Layout />,
  //     children: [
  //       {
  //         index: true,
  //         element: <Home />,
  //       },
  //       {
  //         path: "/products",
  //         element: <Products />,
  //         children: [
  //           {
  //             path: "/products/:id",
  //             element: <ProductDetails />,
  //           },
  //         ],
  //       },
  //       {
  //         path: "/about",
  //         element: <About />,
  //       },
  //       {
  //         path: "*",
  //         element: <NotFound />,
  //         //element: <Navigate to={"/"} />,
  //       },
  //     ],
  //   },
  // ]);
  return (
    <div>
      {/* {routElements} */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Products />} />
          <Route path="/product-details/:id" element={<ProductDetails />} />
          <Route path="/products">
            <Route path="add" element={<AddEditProducts />} />
            <Route path="edit/:id" element={<AddEditProducts />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
