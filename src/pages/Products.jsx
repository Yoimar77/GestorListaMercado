// src/pages/Products.jsx
import { Link } from "react-router-dom";
import StoreSelector from "../components/store/StoreSelector";
import ProductForm from "../components/product/ProductForm";
import ProductList from "../components/product/ProductList";
import CategoryForm from "../components/category/CategoryForm";
import CategoryList from "../components/category/CategoryList";
import CategorySelector from "../components/category/CategorySelector";
import ProductFilter from "../components/product/ProductFilter";             // Agregado: Filtros avanzados
import PriceComparison from "../components/product/PriceComparison";           // Agregado: Comparación de precios históricos
import MonthlyExpenseSummary from "../components/product/MonthlyExpenseSummary"; // Agregado: Resumen de gastos mensuales

const Products = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Gestión de Productos</h1>

      {/* Selector de tienda */}
      <StoreSelector />

      {/* Sección de categorías */}
      <CategoryForm />
      <CategoryList />

      {/* Selector y filtros */}
      <CategorySelector />
      <ProductFilter />

      {/* Formulario para agregar productos */}
      <ProductForm />

      {/* Listado de productos filtrados */}
      <ProductList showFilteredOnly={true} />

      {/* Secciones adicionales del sprint 2 */}
      <PriceComparison />
      <MonthlyExpenseSummary />

      <div className="mt-4 text-center">
        <Link to="/all-products" className="btn btn-primary">
          Ver todos los productos por categoría
        </Link>
      </div>
    </div>
  );
};

export default Products;
