import { useState } from "react";
import { useProduct } from "../../context/ProductContext";
import { useCategory } from "../../context/CategoryContext";
import ProductEditForm from "./ProductEditForm";

const ProductListByCategory = () => {
  const { productsByCategory, deleteProduct } = useProduct();
  const { categories } = useCategory();
  const [editingId, setEditingId] = useState(null);

  return (
    <div className="bg-white p-4 shadow rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Todos los productos por categoría</h2>
      
      {categories.map((category) => {
        const categoryProducts = productsByCategory[category] || [];
        
        return (
          <div key={category} className="mb-6">
            <h3 className="text-lg font-medium mb-2 border-b pb-1">{category}</h3>
            
            {categoryProducts.length === 0 ? (
              <p className="text-gray-500">No hay productos en esta categoría.</p>
            ) : (
              <ul className="space-y-2">
                {categoryProducts.map((product) => (
                  <li key={product.id} className="flex justify-between items-center border-b py-2">
                    {editingId === product.id ? (
                      <ProductEditForm product={product} setEditingId={setEditingId} />
                    ) : (
                      <div className="flex-1">
                        <p className="font-medium">{product.name}</p>
                        <p className="text-sm text-gray-600">
                          {product.brand} - ${product.price} / {product.unit}
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
      })}
    </div>
  );
};

export default ProductListByCategory;