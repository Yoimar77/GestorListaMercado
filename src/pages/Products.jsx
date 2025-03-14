import ProductForm from "../components/product/ProductForm";
import ProductList from "../components/product/ProductList";
import CategoryForm from "../components/category/CategoryForm";
import CategoryList from "../components/category/CategoryList";

const Products = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Gestión de Productos</h1>
      
      {/* Sección de categorías (crear y listar) */}
      <CategoryForm />
      <CategoryList />
      
      {/* Formulario para agregar productos */}
      <ProductForm />
      
      {/* Lista de productos */}
      <ProductList />
    </div>
  );
};

export default Products;
