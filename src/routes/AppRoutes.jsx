// market-list/src/routes/AppRoutes.jsx
import { Routes, Route } from "react-router-dom";
import Stores from "../pages/Stores";
import Products from "../pages/Products";
import Categories from "../pages/Categories";
import AllProducts from "../pages/AllProducts";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Stores />} />
      <Route path="/products" element={<Products />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/all-products" element={<AllProducts />} />
    </Routes>
  );
};

export default AppRoutes;
