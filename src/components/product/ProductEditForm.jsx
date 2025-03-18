//market-list/src/components/product/ProductEditForm.jsx
import { useState } from "react";
import { useProduct } from "../../context/ProductContext";

const ProductEditForm = ({ product, setEditingId }) => {
  const { updateProduct } = useProduct();
  const [updatedProduct, setUpdatedProduct] = useState({ ...product });

  const handleChange = (e) => {
    setUpdatedProduct({ ...updatedProduct, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProduct(product.id, updatedProduct);
    setEditingId(null);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 w-full">
      <input type="text" name="name" value={updatedProduct.name} onChange={handleChange} className="border p-1 rounded flex-grow" />
      <input type="text" name="brand" value={updatedProduct.brand} onChange={handleChange} className="border p-1 rounded flex-grow" />
      <input type="number" name="price" value={updatedProduct.price} onChange={handleChange} className="border p-1 rounded w-16" />
      <input type="text" name="unit" value={updatedProduct.unit} onChange={handleChange} className="border p-1 rounded w-16" />
      <select name="category" value={updatedProduct.category} onChange={handleChange} className="border p-1 rounded w-24">
        {/** Se asume que se usa la categoría almacenada en ProductContext; en un caso real, podrías importar el contexto de categorías */}\n        <option value="General">General</option>\n      </select>
      <button type="submit" className="btn btn-primary">Guardar</button>
    </form>
  );
};

export default ProductEditForm;
