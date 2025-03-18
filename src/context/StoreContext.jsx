// market-list/src/context/StoreContext.jsx
import { createContext, useContext, useState } from "react";

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  // Tiendas predefinidas
  const stores = ["Supermercado A", "Supermercado B"];
  const [selectedStore, setSelectedStore] = useState("");

  const selectStore = (storeName) => {
    setSelectedStore(storeName);
  };

  return (
    <StoreContext.Provider value={{ stores, selectedStore, selectStore }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) throw new Error("useStore must be used within a StoreProvider");
  return context;
};
