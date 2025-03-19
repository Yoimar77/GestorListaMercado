// src/routes/AppRoutes.jsx
import { Routes, Route } from "react-router-dom";
import Products from "../pages/Products";
import Categories from "../pages/Categories";
import AllProducts from "../pages/AllProducts";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ResetPassword from "../pages/ResetPassword";
import PrivateRoute from "../components/auth/PrivateRoute";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Rutas públicas */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/reset-password" element={<ResetPassword />} />

      {/* Rutas protegidas */}
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<Products />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/all-products" element={<AllProducts />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
