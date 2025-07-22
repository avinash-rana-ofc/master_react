import { useState } from "react";
import "./App.css";
import AddEditProductModal from "./components/AddEditProductModal";
import ProductCard from "./components/ProductCard";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [productList, setProductList] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState();

  const handleOpenProductModal = () => {
    setIsOpen(true);
  };

  const handleCloseProductModal = () => {
    setIsOpen(false);
    setSelectedProduct();
  };

  const handleAddProduct = (product) => {
    setProductList((prev) => [...prev, product]);
    handleCloseProductModal();
  };

  const handleDeleteProduct = (productCode) => {
    setProductList(
      productList.filter((product) => product.productCode !== productCode)
    );
  };

  const handleEditClick = (product) => {
    setSelectedProduct(product);
    setIsOpen(true);
  };

  const handleEditProduct = (product) => {
    const updateProductList = productList.map((p) =>
      p.productCode === product.productCode ? product : p
    );

    setProductList(updateProductList);
    handleCloseProductModal();
  };

  return (
    <>
      <div className="w-full max-w-5xl mx-auto">
        <div className="flex justify-between items-center my-10">
          <h1 className="text-5xl font-bold">Products</h1>
          <button
            type="button"
            className="bg-blue-500 text-white py-2 px-4 rounded-md text-xl font-semibold"
            onClick={handleOpenProductModal}
          >
            Add Product
          </button>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {productList.length > 0 ? (
            <>
              {productList
                .filter((p) => p.isActive)
                .map((product) => (
                  <ProductCard
                    product={product}
                    key={product.productCode}
                    handleDeleteProduct={handleDeleteProduct}
                    handleEditClick={handleEditClick}
                  />
                ))}
              {productList
                .filter((p) => !p.isActive)
                .map((product) => (
                  <ProductCard
                    product={product}
                    key={product.productCode}
                    handleDeleteProduct={handleDeleteProduct}
                    handleEditClick={handleEditClick}
                  />
                ))}
            </>
          ) : (
            <h1 className="col-span-6 text-center text-xl font-medium">
              No Products found
            </h1>
          )}
        </div>
      </div>
      {isOpen && (
        <AddEditProductModal
          handleCloseProductModal={handleCloseProductModal}
          handleAddProduct={handleAddProduct}
          selectedProduct={selectedProduct}
          handleEditProduct={handleEditProduct}
        />
      )}
    </>
  );
}

export default App;
