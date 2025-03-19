//market-list/src/components/category/CategorySelector.jsx
import { useProduct } from "../../context/ProductContext";
import { useCategory } from "../../context/CategoryContext";

const CategorySelector = () => {
  const { categories } = useCategory();
  const { selectedCategory, setSelectedCategory } = useProduct();

  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div className="bg-white p-4 shadow rounded-lg mb-4">
      <label className="block font-medium mb-2">Selecciona una categoría para ver su lista</label>
      <select
        value={selectedCategory}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategorySelector;