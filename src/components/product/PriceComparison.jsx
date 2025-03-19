// src/components/product/PriceComparison.jsx
import { useState } from "react";
import { useProduct } from "../../context/ProductContext";

const PriceComparison = () => {
  const { products } = useProduct();
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [month1, setMonth1] = useState("");
  const [month2, setMonth2] = useState("");

  const selectedProduct = products.find(p => p.id === Number(selectedProductId));

  const getPriceForMonth = (history, month) => {
    // Se asume que 'month' es un string en formato "YYYY-MM"
    const record = history.find(item => {
      const itemMonth = new Date(item.date).toISOString().slice(0, 7);
      return itemMonth === month;
    });
    return record ? record.price : "No hay registro";
  };

  return (
    <div className="p-4 bg-white shadow rounded-lg mb-4">
      <h3 className="font-medium mb-2">Comparación de Precios</h3>
      <div className="flex flex-col gap-2">
        <select
          value={selectedProductId || ""}
          onChange={e => setSelectedProductId(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="">Selecciona un producto</option>
          {products.map(product => (
            <option key={product.id} value={product.id}>
              {product.name} ({product.brand})
            </option>
          ))}
        </select>
        {selectedProduct && (
          <>
            <div className="flex gap-2">
              <input
                type="month"
                value={month1}
                onChange={e => setMonth1(e.target.value)}
                className="p-2 border rounded"
              />
              <input
                type="month"
                value={month2}
                onChange={e => setMonth2(e.target.value)}
                className="p-2 border rounded"
              />
            </div>
            <div>
              <p>
                Precio en {month1}: {getPriceForMonth(selectedProduct.history, month1)}
              </p>
              <p>
                Precio en {month2}: {getPriceForMonth(selectedProduct.history, month2)}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PriceComparison;
