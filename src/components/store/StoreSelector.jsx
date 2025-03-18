//market-list/src/components/store/StoreSelector.jsx
import { useStore } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const StoreSelector = () => {
  const { stores, selectedStore, selectStore } = useStore();
  const navigate = useNavigate();

  const handleChange = (e) => {
    selectStore(e.target.value);
    navigate("/products"); // Navegar a la página de productos al seleccionar tienda
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
    </div>
  );
};

export default StoreSelector;
