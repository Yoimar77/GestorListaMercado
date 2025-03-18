//market-list/src/components/category/CategoryList.jsx
import { useCategory } from "../../context/CategoryContext";

const CategoryList = () => {
  const { categories } = useCategory();

  return (
    <div className="bg-white p-4 shadow rounded-lg mb-4">
      <h2 className="text-lg font-semibold mb-2">Categorías</h2>
      {categories.length === 0 ? (
        <p className="text-gray-500">No hay categorías creadas.</p>
      ) : (
        <ul className="list-disc pl-5">
          {categories.map((cat) => (
            <li key={cat}>{cat}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CategoryList;
