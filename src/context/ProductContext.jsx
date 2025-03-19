// src/context/ProductContext.jsx
import { createContext, useContext, useState } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("General");
  const [filterCriteria, setFilterCriteria] = useState({
    name: "",
    brand: "",
    price: "",
    category: ""
  });

  // Agregar un producto: se añade "active" y se inicia el historial de precios
  const addProduct = (product) => {
    const newProduct = {
      ...product,
      id: Date.now(),
      active: true,
      history: [{ date: new Date(), price: product.price }]
    };
    setProducts((prev) => [...prev, newProduct]);
  };

  // Actualizar un producto: si el precio cambia, se agrega el nuevo valor al historial
  const updateProduct = (id, updatedData) => {
    setProducts((prev) =>
      prev.map((p) => {
        if (p.id === id) {
          let updatedHistory = p.history;
          if (p.price !== updatedData.price) {
            updatedHistory = [
              ...p.history,
              { date: new Date(), price: updatedData.price }
            ];
          }
          return { ...p, ...updatedData, history: updatedHistory };
        }
        return p;
      })
    );
  };

  // "Eliminar" un producto: en lugar de borrarlo, lo desactivamos
  const deactivateProduct = (id) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, active: false } : p))
    );
  };

  // Reactivar un producto (opcional)
  const reactivateProduct = (id) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, active: true } : p))
    );
  };

  // Filtrado de productos según criterios avanzados y estado activo
  const filteredProducts = products.filter((product) => {
    if (!product.active) return false;
    if (filterCriteria.category && product.category !== filterCriteria.category)
      return false;
    if (filterCriteria.name && !product.name.toLowerCase().includes(filterCriteria.name.toLowerCase()))
      return false;
    if (filterCriteria.brand && !product.brand.toLowerCase().includes(filterCriteria.brand.toLowerCase()))
      return false;
    if (filterCriteria.price && Number(product.price) > Number(filterCriteria.price))
      return false;
    return true;
  });

  // Agrupar productos por categoría (sin aplicar filtros)
  const productsByCategory = products.reduce((acc, product) => {
    const category = product.category;
    if (!acc[category]) acc[category] = [];
    acc[category].push(product);
    return acc;
  }, {});

  return (
    <ProductContext.Provider
      value={{
        products,
        addProduct,
        updateProduct,
        deactivateProduct,
        reactivateProduct,
        selectedCategory,
        setSelectedCategory,
        filteredProducts,
        productsByCategory,
        filterCriteria,
        setFilterCriteria
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => {
  const context = useContext(ProductContext);
  if (!context) throw new Error("useProduct must be used within a ProductProvider");
  return context;
};
