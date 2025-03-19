// src/components/layout/Navbar.jsx
import { Link } from "react-router-dom";
import useAuth from "../../hooks/UseAuth";
import { useStore } from "../../context/StoreContext"; 

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const { selectedStore } = useStore(); // Obtenemos la tienda seleccionada

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-[var(--color-primary)]">
          Market List 🛒
        </Link>
        <div className="flex items-center space-x-4">
          {currentUser ? (
            <>
              <span className="text-sm text-gray-600">
                {currentUser.displayName ? currentUser.displayName : currentUser.email}
              </span>
              {selectedStore && (
                <span className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded">
                  {selectedStore}
                </span>
              )}
              <Link to="/products" className="text-[var(--color-primary)] hover:underline">
                Productos
              </Link>
              <Link to="/categories" className="text-[var(--color-primary)] hover:underline">
                Categorías
              </Link>
              <button onClick={handleLogout} className="btn btn-secondary">
                Cerrar Sesión
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-[var(--color-primary)] hover:underline">
                Iniciar Sesión
              </Link>
              <Link to="/register" className="btn btn-primary">
                Registrarse
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;