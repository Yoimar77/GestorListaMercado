// src/components/product/ProductFilter.jsx
import { useProduct } from "../../context/ProductContext";

const ProductFilter = () => {
  const { filterCriteria, setFilterCriteria } = useProduct();

  const handleChange = (e) => {
    setFilterCriteria({ ...filterCriteria, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-4 bg-white shadow rounded-lg mb-4">
      <h3 className="font-medium mb-2">Filtrar productos</h3>
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={filterCriteria.name}
          onChange={handleChange}
          className="p-2 border rounded"
        />
        <input
          type="text"
          name="brand"
          placeholder="Marca"
          value={filterCriteria.brand}
          onChange={handleChange}
          className="p-2 border rounded"
        />
        <input
          type="number"
          name="price"
          placeholder="Precio máximo"
          value={filterCriteria.price}
          onChange={handleChange}
          className="p-2 border rounded"
        />
        <input
          type="text"
          name="category"
          placeholder="Categoría"
          value={filterCriteria.category}
          onChange={handleChange}
          className="p-2 border rounded"
        />
      </div>
    </div>
  );
};

export default ProductFilter;
