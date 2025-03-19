//market-list/src/components/product/ProductForm.jsx
import { useState } from "react";
import { useProduct } from "../../context/ProductContext";
import { useStore } from "../../context/StoreContext";
import { useCategory } from "../../context/CategoryContext"; 

const ProductForm = () => {
  const { addProduct, updateProduct } = useProduct();
  const { selectedStore } = useStore();
  const { categories } = useCategory();
  const [product, setProduct] = useState({
    name: "",
    brand: "",
    price: "",
    unit: "",
    category: "General",
  });
  const [editing, setEditing] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
    setError(""); // Limpiar mensaje de error al escribir
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validación: verificar que haya tienda seleccionada
    if (!selectedStore) {
      setError("Debes seleccionar una tienda antes de agregar productos");
      return;
    }
    
    // Validación de campos obligatorios
    if (!product.name || !product.price || !product.category) {
      setError("Por favor completa los campos obligatorios: nombre, precio y categoría");
      return;
    }
    
    if (editing) {
      updateProduct(editing.id, { ...product, store: selectedStore });
      setEditing(null);
    } else {
      addProduct({ ...product, id: Date.now(), store: selectedStore });
    }
    setProduct({ name: "", brand: "", price: "", unit: "", category: "General" });
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 bg-white p-4 shadow rounded-lg mb-4">
      {error && <div className="p-2 bg-red-100 text-red-700 rounded mb-2">{error}</div>}
      
      <input
        type="text"
        name="name"
        placeholder="Nombre del producto *"
        value={product.name}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        name="brand"
        placeholder="Marca"
        value={product.brand}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <input
        type="number"
        name="price"
        placeholder="Precio *"
        value={product.price}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        name="unit"
        placeholder="Unidad de medida"
        value={product.unit}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <select
        name="category"
        value={product.category}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      
      {!selectedStore && (
        <div className="py-2 text-amber-600 font-medium">
          Debes seleccionar una tienda antes de agregar productos
        </div>
      )}
      
      <button 
        type="submit" 
        disabled={!selectedStore}
        className={`btn btn-primary w-full ${!selectedStore ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {editing ? "Actualizar Producto" : "Agregar Producto"}
      </button>
    </form>
  );
};

export default ProductForm;