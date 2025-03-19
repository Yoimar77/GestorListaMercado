// src/components/store/StoreSelector.jsx (modificado)
import { useStore } from "../../context/StoreContext";

const StoreSelector = () => {
  const { stores, selectedStore, selectStore } = useStore();

  const handleChange = (e) => {
    selectStore(e.target.value);
  };

  return (
    <div className="p-4 bg-white shadow rounded-lg mb-4">
      <label className="block font-medium mb-2">Selecciona una tienda</label>
      <select value={selectedStore || ""} onChange={handleChange} className="w-full p-2 border rounded">
        <option value="">Elige una tienda</option>
        {stores.map((store) => (
          <option key={store} value={store}>{store}</option>
        ))}
      </select>
      {selectedStore && (
        <div className="mt-2 p-2 bg-green-100 text-green-700 rounded text-center">
          Tienda seleccionada: <strong>{selectedStore}</strong>
        </div>
      )}
    </div>
  );
};

export default StoreSelector;