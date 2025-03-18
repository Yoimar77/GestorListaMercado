// market-list/src/pages/Categories.jsx
import CategoryForm from "../components/category/CategoryForm";
import CategoryList from "../components/category/CategoryList";

const Categories = () => {
  return (
    <div className="flex flex-col items-center p-4 min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Gestión de Categorías</h1>
      <CategoryForm />
      <CategoryList />
    </div>
  );
};

export default Categories;
