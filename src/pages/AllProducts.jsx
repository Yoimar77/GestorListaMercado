// market-list/src/pages/AllProducts.jsx
import { Link } from "react-router-dom";
import ProductListByCategory from "../components/product/ProductListByCategory";

const AllProducts = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Todos los Productos</h1>
      
      <ProductListByCategory />
      
      <div className="mt-4 text-center">
        <Link to="/products" className="btn btn-primary">
          Volver a gestión de productos
        </Link>
      </div>
    </div>
  );
};

export default AllProducts;