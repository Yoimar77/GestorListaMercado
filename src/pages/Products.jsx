// src/pages/Products.jsx
import { Link } from "react-router-dom";
import StoreSelector from "../components/store/StoreSelector"; // Agregamos el selector de tienda
import ProductForm from "../components/product/ProductForm";
import ProductList from "../components/product/ProductList";
import CategoryForm from "../components/category/CategoryForm";
import CategoryList from "../components/category/CategoryList";
import CategorySelector from "../components/category/CategorySelector";

const Products = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Gestión de Productos</h1>
      
      {/* Añadimos el selector de tienda */}
      <StoreSelector />
      
      {/* Sección de categorías (crear y listar) */}
      <CategoryForm />
      <CategoryList />
      
      {/* Selector de categoría */}
      <CategorySelector />
      
      {/* Formulario para agregar productos */}
      <ProductForm />
      
      {/* Lista de productos (filtrada por categoría) */}
      <ProductList showFilteredOnly={true} />
      
      {/* Botón para ver todos los productos por categoría */}
      <div className="mt-4 text-center">
        <Link to="/all-products" className="btn btn-primary">
          Ver todos los productos por categoría
        </Link>
      </div>
    </div>
  );
};

export default Products;