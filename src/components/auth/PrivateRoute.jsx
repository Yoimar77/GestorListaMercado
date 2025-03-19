// src/components/auth/PrivateRoute.jsx
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../../hooks/UseAuth";

const PrivateRoute = () => {
  const { currentUser, loading } = useAuth();
  const location = useLocation();
  
  if (loading) {
    return <div className="flex justify-center items-center h-screen">Cargando...</div>;
  }
  
  // Redirigir directamente a productos cuando el usuario está autenticado
  if (currentUser && location.pathname === "/") {
    return <Navigate to="/products" />;
  }
  
  return currentUser ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;