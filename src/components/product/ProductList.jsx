import { useState } from "react";
import { useProduct } from "../../context/ProductContext";
import ProductEditForm from "./ProductEditForm";

const ProductList = () => {
  const { products, deleteProduct } = useProduct();
  const [editingId, setEditingId] = useState(null);

  return (
    <div className="bg-white p-4 shadow rounded-lg">
      <h2 className="text-xl font-semibold mb-2">Lista de Productos</h2>
      {products.length === 0 ? (
        <p className="text-gray-500">No hay productos registrados.</p>
      ) : (
        <ul className="space-y-2">
          {products.map((product) => (
            <li key={product.id} className="flex justify-between items-center border-b py-2">
              {editingId === product.id ? (
                <ProductEditForm product={product} setEditingId={setEditingId} />
              ) : (
                <div className="flex-1">
                  <p className="font-medium">{product.name}</p>
                  <p className="text-sm text-gray-600">{product.brand} - ${product.price} / {product.unit} ({product.category})</p>
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
