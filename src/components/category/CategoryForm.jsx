  //market-list/src/components/category/CategoryForm.jsx
  import { useState } from "react";
  import { useCategory } from "../../context/CategoryContext";

  const CategoryForm = () => {
    const { addCategory } = useCategory();
    const [categoryName, setCategoryName] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
      if (categoryName.trim() !== "") {
        addCategory(categoryName.trim());
        setCategoryName("");
      }
    };

    return (
      <form onSubmit={handleSubmit} className="flex gap-2 p-4 bg-white shadow rounded-lg mb-4">
        <input
          type="text"
          placeholder="Nueva categoría"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="btn btn-primary">Agregar Categoría</button>
      </form>
    );
  };

  export default CategoryForm;
