import { Routes, Route } from "react-router-dom";
import Stores from "../pages/Stores";
import Products from "../pages/Products";
import Categories from "../pages/Categories";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Stores />} />
      <Route path="/products" element={<Products />} />
      <Route path="/categories" element={<Categories />} />
      
    </Routes>
  );
};

export default AppRoutes;
