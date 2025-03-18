//market-list/src/components/product/ProductList.jsx
import { useState } from "react";
import { useProduct } from "../../context/ProductContext";
import ProductEditForm from "./ProductEditForm";

const ProductList = ({ showFilteredOnly = true }) => {
  const { products, filteredProducts, deleteProduct, selectedCategory } = useProduct();
  const [editingId, setEditingId] = useState(null);

  // Determinar qué productos mostrar
  const displayProducts = showFilteredOnly 
    ? products.filter(product => product.category === selectedCategory)
    : products;

  return (
    <div className="bg-white p-4 shadow rounded-lg">
      <h2 className="text-xl font-semibold mb-2">
        {showFilteredOnly ? `Productos en ${selectedCategory}` : "Todos los productos"}
      </h2>
      {displayProducts.length === 0 ? (
        <p className="text-gray-500">No hay productos registrados en esta categoría.</p>
      ) : (
        <ul className="space-y-2">
          {displayProducts.map((product) => (
            <li key={product.id} className="flex justify-between items-center border-b py-2">
              {editingId === product.id ? (
                <ProductEditForm product={product} setEditingId={setEditingId} />
              ) : (
                <div className="flex-1">
                  <p className="font-medium">{product.name}</p>
                  <p className="text-sm text-gray-600">
                    {product.brand} - ${product.price} / {product.unit} {!showFilteredOnly && `(${product.category})`}
                  </p>
                </div>
              )}
              {editingId !== product.id && (
                <div className="flex gap-2">
                  <button onClick={() => setEditingId(product.id)} className="btn btn-secondary">Editar</button>
                  <button onClick={() => deleteProduct(product.id)} className="btn btn-danger">Eliminar</button>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;
